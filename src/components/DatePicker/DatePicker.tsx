/**
 * DatePicker Component
 * 
 * A compound component for date selection with support for both controlled and uncontrolled usage.
 * Features include:
 * - Manual date input with format validation
 * - Calendar view with month and year navigation
 * - Customizable date format
 * - Flexible positioning of icon and input
 * - Support for custom triggers and icons
 * 
 * Basic usage:
 * ```tsx
 * <DatePicker onChange={handleChange}>
 *   <DatePicker.Control>
 *     <DatePicker.Input placeholder="Select date" />
 *     <DatePicker.Icon />
 *   </DatePicker.Control>
 *   <DatePicker.Calendar />
 * </DatePicker>
 * ```
 */

"use client";
import React, {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
} from "react";
import { twMerge } from "tailwind-merge";
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    addMonths,
    subMonths,
    getDay,
    parse,
    isValid,
    getYear,
    setYear,
    setMonth,
    getMonth,
} from "date-fns";

// Context Types
interface DatePickerContextType {
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
    currentMonth: Date;
    setCurrentMonth: (date: Date) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    dateFormat: string;
}

// Props Types
interface DatePickerProps {
    /** The child components */
    children: React.ReactNode;
    /** Initial date for uncontrolled mode */
    defaultDate?: Date;
    /** Current date for controlled mode */
    value?: Date | null;
    /** Additional CSS classes */
    className?: string;
    /** Callback when date changes */
    onChange?: (date: Date | null) => void;
    /** Date format string (using date-fns format) */
    dateFormat?: string;
}

interface DatePickerIconProps {
    children?: React.ReactNode;
    className?: string;
}

interface DatePickerTriggerProps {
    children: React.ReactNode;
    className?: string;
}

interface DatePickerCalendarProps {
    className?: string;
}

interface DatePickerInputProps {
    /** Placeholder text when no date is selected */
    placeholder?: string;
    /** Additional CSS classes */
    className?: string;
    /** Override the parent's date format */
    format?: string;
    /** Whether to allow typing in the input */
    allowManualInput?: boolean;
}

// Add new interface for wrapper
interface DatePickerControlProps {
    children: React.ReactNode;
    className?: string;
}

// Create Context
const DatePickerContext = createContext<DatePickerContextType | null>(null);

// Custom Hook
const useDatePicker = () => {
    const context = useContext(DatePickerContext);
    if (!context) {
        throw new Error(
            "useDatePicker must be used within a DatePicker component"
        );
    }
    return context;
};

/**
 * Default calendar icon component
 * Used when no custom icon is provided
 */
const DefaultCalendarIcon = () => (
    <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
    </svg>
);

/**
 * Root DatePicker component
 * Manages state and provides context for child components
 */
const DatePickerRoot = ({
    children,
    defaultDate,
    value,
    className,
    onChange,
    dateFormat = "MM/dd/yyyy",
}: DatePickerProps) => {
    const isControlled = value !== undefined;
    const [internalDate, setInternalDate] = useState<Date | null>(
        defaultDate || null
    );
    const [currentMonth, setCurrentMonth] = useState<Date>(
        defaultDate || value || new Date()
    );
    const [isOpen, setIsOpen] = useState(false);
    const datePickerRef = useRef<HTMLDivElement>(null);

    // Use the controlled value if provided, otherwise use internal state
    const selectedDate = isControlled ? value : internalDate;

    const handleDateChange = (date: Date | null) => {
        if (!isControlled) {
            setInternalDate(date);
        }
        if (date) {
            setCurrentMonth(date);
        }
        onChange?.(date);
    };

    // Update current month when controlled value changes
    useEffect(() => {
        if (isControlled && value) {
            setCurrentMonth(value);
        }
    }, [isControlled, value]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                datePickerRef.current &&
                !datePickerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <DatePickerContext.Provider
            value={{
                selectedDate,
                setSelectedDate: handleDateChange,
                currentMonth,
                setCurrentMonth,
                isOpen,
                setIsOpen,
                dateFormat,
            }}
        >
            <div
                ref={datePickerRef}
                className={twMerge("relative inline-block", className)}
            >
                {children}
            </div>
        </DatePickerContext.Provider>
    );
};

/**
 * Wrapper component for input and icon
 * Provides consistent styling and layout
 */
const Control = ({ children, className }: DatePickerControlProps) => {
    return (
        <div
            className={twMerge(
                "flex gap-2 items-center w-full px-3 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500",
                className
            )}
        >
            {children}
        </div>
    );
};

/**
 * Icon component that toggles the calendar
 * Can be customized with children or uses default icon
 */
const Icon = ({ children, className }: DatePickerIconProps) => {
    const { setIsOpen, isOpen } = useDatePicker();

    return (
        <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={twMerge(
                "text-gray-500 hover:text-gray-700 focus:outline-none",
                className
            )}
        >
            {children || <DefaultCalendarIcon />}
        </button>
    );
};

/**
 * Custom trigger component for advanced use cases
 * Allows any element to toggle the calendar
 */
const Trigger = ({ children, className }: DatePickerTriggerProps) => {
    const { setIsOpen, isOpen } = useDatePicker();

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={twMerge("cursor-pointer", className)}
        >
            {children}
        </div>
    );
};

/**
 * Input component for displaying and editing the date
 * Supports manual input with format validation
 */
const Input = ({
    placeholder = "Select date",
    className,
    format: dateFormat,
    allowManualInput = true,
}: DatePickerInputProps) => {
    const {
        selectedDate,
        isOpen,
        setIsOpen,
        setSelectedDate,
        dateFormat: contextDateFormat,
    } = useDatePicker();
    const [inputValue, setInputValue] = useState("");
    const finalDateFormat = dateFormat || contextDateFormat;

    // Update input value when selectedDate changes
    useEffect(() => {
        if (selectedDate) {
            setInputValue(format(selectedDate, finalDateFormat));
        } else {
            setInputValue("");
        }
    }, [selectedDate, finalDateFormat]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!allowManualInput) return;

        const value = e.target.value;
        setInputValue(value);

        // If input is empty, clear the date
        if (!value.trim()) {
            setSelectedDate(null);
            return;
        }

        try {
            // Try to parse the date with the current format
            const parsedDate = parse(value, finalDateFormat, new Date());

            // Only update if it's a valid date and the input matches the expected format length
            if (
                isValid(parsedDate) &&
                value.length === format(parsedDate, finalDateFormat).length
            ) {
                setSelectedDate(parsedDate);
            }
        } catch (error) {
            console.error("Invalid date format:", error);
            // Keep the input value but don't update the date
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" || e.key === "Delete") {
            if (!inputValue) {
                setSelectedDate(null);
            }
        }
    };

    const handleBlur = () => {
        // If input is empty, clear the date
        if (!inputValue.trim()) {
            setSelectedDate(null);
            return;
        }

        // On blur, if the date is invalid, revert to the last valid date or clear
        try {
            const parsedDate = parse(inputValue, finalDateFormat, new Date());
            if (isValid(parsedDate)) {
                setInputValue(format(parsedDate, finalDateFormat));
                setSelectedDate(parsedDate);
            } else {
                setInputValue(
                    selectedDate ? format(selectedDate, finalDateFormat) : ""
                );
            }
        } catch (error) {
            console.error("Invalid date format:", error);
            setInputValue(
                selectedDate ? format(selectedDate, finalDateFormat) : ""
            );
        }
    };

    return (
        <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onClick={() => !isOpen && setIsOpen(true)}
            readOnly={!allowManualInput}
            className={twMerge(
                "w-full outline-none p-0 m-0 bg-transparent",
                allowManualInput ? "cursor-text" : "cursor-pointer",
                className
            )}
        />
    );
};

/**
 * Calendar component for date selection
 * Supports day, month, and year views
 */
const Calendar = ({ className }: DatePickerCalendarProps) => {
    const {
        isOpen,
        selectedDate,
        currentMonth,
        setCurrentMonth,
        setSelectedDate,
    } = useDatePicker();

    const [calendarView, setCalendarView] = useState<CalendarView>("days");
    const [yearRange, setYearRange] = useState(() => {
        const currentYear = getYear(currentMonth);
        const startYear = Math.floor(currentYear / 10) * 10;
        return { start: startYear, end: startYear + 11 };
    });

    if (!isOpen) return null;

    const handlePrevious = () => {
        if (calendarView === "days") {
            setCurrentMonth(subMonths(currentMonth, 1));
        } else if (calendarView === "months") {
            setCurrentMonth(setYear(currentMonth, getYear(currentMonth) - 1));
        } else if (calendarView === "years") {
            setYearRange((prev) => ({
                start: prev.start - 12,
                end: prev.end - 12,
            }));
        }
    };

    const handleNext = () => {
        if (calendarView === "days") {
            setCurrentMonth(addMonths(currentMonth, 1));
        } else if (calendarView === "months") {
            setCurrentMonth(setYear(currentMonth, getYear(currentMonth) + 1));
        } else if (calendarView === "years") {
            setYearRange((prev) => ({
                start: prev.start + 12,
                end: prev.end + 12,
            }));
        }
    };

    const handleMonthSelect = (monthIndex: number) => {
        setCurrentMonth(setMonth(currentMonth, monthIndex));
        setCalendarView("days");
    };

    const handleYearSelect = (year: number) => {
        setCurrentMonth(setYear(currentMonth, year));
        setCalendarView("months");
    };

    const handleViewChange = () => {
        if (calendarView === "days") setCalendarView("months");
        else if (calendarView === "months") setCalendarView("years");
    };

    return (
        <div
            className={twMerge(
                "absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg",
                "p-4 w-64",
                className
            )}
        >
            <CalendarHeader
                calendarView={calendarView}
                currentMonth={currentMonth}
                yearRange={yearRange}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onViewChange={handleViewChange}
            />

            {calendarView === "days" && (
                <DaysView
                    currentMonth={currentMonth}
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                />
            )}

            {calendarView === "months" && (
                <MonthsView
                    currentMonth={currentMonth}
                    selectedDate={selectedDate}
                    onSelectMonth={handleMonthSelect}
                />
            )}

            {calendarView === "years" && (
                <YearsView
                    yearRange={yearRange}
                    selectedDate={selectedDate}
                    onSelectYear={handleYearSelect}
                />
            )}
        </div>
    );
};

type CalendarView = "days" | "months" | "years";

/**
 * Header component for the calendar
 * Displays navigation buttons and current view
 */
const CalendarHeader = ({
    calendarView,
    currentMonth,
    yearRange,
    onPrevious,
    onNext,
    onViewChange,
}: {
    calendarView: CalendarView;
    currentMonth: Date;
    yearRange: { start: number; end: number };
    onPrevious: () => void;
    onNext: () => void;
    onViewChange: () => void;
}) => (
    <div className="flex items-center justify-between mb-4">
        <button
            onClick={onPrevious}
            className="p-1 hover:bg-gray-100 rounded-full"
            type="button"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
        <button
            onClick={onViewChange}
            className="font-semibold hover:bg-gray-100 rounded-lg px-2 py-1"
            type="button"
        >
            {calendarView === "days" && format(currentMonth, "MMMM yyyy")}
            {calendarView === "months" && format(currentMonth, "yyyy")}
            {calendarView === "years" &&
                `${yearRange.start} - ${yearRange.end - 1}`}
        </button>
        <button
            onClick={onNext}
            className="p-1 hover:bg-gray-100 rounded-full"
            type="button"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    </div>
);

/**
 * Days view component for selecting a specific date
 * Displays a grid of days in the current month
 */
const DaysView = ({
    currentMonth,
    selectedDate,
    onSelectDate,
}: {
    currentMonth: Date;
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
}) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const startDay = getDay(monthStart);
    const daysToFill = Array(startDay).fill(null);

    return (
        <>
            <div className="grid grid-cols-7 gap-1 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div
                        key={day}
                        className="text-center text-sm font-medium text-gray-600"
                    >
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {[...daysToFill, ...daysInMonth].map((day, index) => {
                    if (!day) {
                        return <div key={`empty-${index}`} />;
                    }

                    const isSelected =
                        selectedDate && isSameDay(day, selectedDate);
                    const isCurrentMonth = isSameMonth(day, currentMonth);

                    return (
                        <button
                            key={format(day, "yyyy-MM-dd")}
                            onClick={() => onSelectDate(day)}
                            className={twMerge(
                                "h-8 w-8 rounded-full flex items-center justify-center text-sm",
                                "hover:bg-gray-100",
                                !isCurrentMonth && "text-gray-400",
                                isSelected &&
                                    "bg-blue-600 text-white hover:bg-blue-700"
                            )}
                            type="button"
                        >
                            {format(day, "d")}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

/**
 * Months view component for selecting a specific month
 * Displays a list of months in the current year
 */
const MonthsView = ({
    currentMonth,
    selectedDate,
    onSelectMonth,
}: {
    currentMonth: Date;
    selectedDate: Date | null;
    onSelectMonth: (monthIndex: number) => void;
}) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="grid grid-cols-3 gap-2">
            {months.map((month, index) => {
                const isSelected =
                    selectedDate &&
                    getMonth(selectedDate) === index &&
                    getYear(selectedDate) === getYear(currentMonth);

                return (
                    <button
                        key={month}
                        onClick={() => onSelectMonth(index)}
                        className={twMerge(
                            "p-2 rounded-lg text-sm",
                            "hover:bg-gray-100",
                            isSelected &&
                                "bg-blue-600 text-white hover:bg-blue-700"
                        )}
                        type="button"
                    >
                        {month.slice(0, 3)}
                    </button>
                );
            })}
        </div>
    );
};

/**
 * Years view component for selecting a specific year
 * Displays a list of years in the current range
 */
const YearsView = ({
    yearRange,
    selectedDate,
    onSelectYear,
}: {
    yearRange: { start: number; end: number };
    selectedDate: Date | null;
    onSelectYear: (year: number) => void;
}) => {
    const years = Array.from({ length: 12 }, (_, i) => yearRange.start + i);

    return (
        <div className="grid grid-cols-3 gap-2">
            {years.map((year) => {
                const isSelected =
                    selectedDate && getYear(selectedDate) === year;

                return (
                    <button
                        key={year}
                        onClick={() => onSelectYear(year)}
                        className={twMerge(
                            "p-2 rounded-lg text-sm",
                            "hover:bg-gray-100",
                            isSelected &&
                                "bg-blue-600 text-white hover:bg-blue-700"
                        )}
                        type="button"
                    >
                        {year}
                    </button>
                );
            })}
        </div>
    );
};

/**
 * Compound Component Export
 * Exports the DatePickerRoot component and its child components
 */
const DatePicker = Object.assign(DatePickerRoot, {
    Control,
    Icon,
    Trigger,
    Input,
    Calendar,
});

export default DatePicker;
