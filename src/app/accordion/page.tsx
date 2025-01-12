import AccordionExamples from "@/examples/AccordionExamples";

const AccordionPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-8">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Accordion Component
                </h1>
                <p className="text-center text-gray-700 mb-12">
                    Explore different types of accordions and their functionalities.
                </p>
                <AccordionExamples />
            </div>
        </div>
    );
};

export default AccordionPage; 