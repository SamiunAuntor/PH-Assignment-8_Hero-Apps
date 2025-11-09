import React from "react";
import { useLoaderData, useParams } from "react-router";
import AppDetails from "../Components/AppDeatils";
import { AlertCircle } from "lucide-react";


const AppDeatilsPage = () => {
    const apps = useLoaderData();
    const { id } = useParams();
    const app = apps.find((a) => a.id === parseInt(id));

    return (
        <div>
            {app ? <AppDetails app={app} /> : <h1 className="flex flex-col items-center justify-center min-h-screen text-4xl font-bold text-gray-500">
                <AlertCircle className="w-16 h-16 mb-4 text-gray-400" />
                App not found
            </h1>}
        </div>
    );
};

export default AppDeatilsPage;
