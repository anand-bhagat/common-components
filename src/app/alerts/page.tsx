import AlertDialog from "@/components/Alert/AlertDialog";
import AlertExamples from "@/examples/AlertExamples";

const AlertsPage = () => {
   
    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Alert Component
            </h1>
            <p className="text-center text-gray-700 mb-12">
                Explore different types of alerts and their functionalities.
            </p>
            <AlertExamples />
            <AlertDialog />
        </div>
    );
};

export default AlertsPage;
