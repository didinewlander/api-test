import { Link, Outlet } from "react-router-dom"
import { Unplug } from 'lucide-react';
import App from "@/App";

function Navigator() {
    return (
        <>
            <nav className="bg-gray-800 select-none">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex items-center gap-2">
                                <h1 className="flex items-center gap-2 text-white font-bold text-xl">מעבדת API<Unplug /></h1>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <Link to={"/"} className="flex items-center gap-2 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">דף הבית</Link>
                                    <Link to={"/file-upload"} className="flex items-center gap-2 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">העלאת קובץ</Link>
                                    <Link to={"/media-stream"} className="flex items-center gap-2 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">הזרמת מדיה</Link>
                                    <Link to={"/messaging"} className="flex items-center gap-2 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">שליחת הודעה</Link>
                                    <a href={"http://localhost:3000/api-docs/"} className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">דוקומנטציה בשרת</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex p-4 font-rubik">
                <App />

                <Outlet />
            </div>
        </>)
}

export default Navigator