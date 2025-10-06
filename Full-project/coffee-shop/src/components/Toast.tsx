import { useEffect } from "react";

interface ToastProps {
  onClose: () => void;
}

export default function Toast({onClose }: ToastProps) {
    useEffect(() => {
            const timer = setTimeout(() => {
            onClose(); 
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div id="toast-simple" className="fixed bottom-6 right-6 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 shadow-lg z-[9999] dark:text-slate-800 dark:bg-gray-50/90" role="alert">
            <img className="w-5 h-5 text-blue-600 dark:text-blue-500" aria-hidden="true" src="./coffee.svg" alt="Coffee Icon" />
            <div className="ps-4 text-sm font-normal">Item was added to the order.</div>
        </div>
    );
}