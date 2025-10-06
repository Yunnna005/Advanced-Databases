export default function Footer() {
    return (
        <footer className="bg-white shadow-sm dark:bg-stone-800 m-4 md:m-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="./coffee.svg" className="h-8" alt="Flowbite Logo" />
                        <h2 className=" text-2xl font-semibold dark:text-white">Coffee Shop</h2>
                    </div>
                    <h6 className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">Advanced Databases Project</h6>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 All Rights Reserved.</span>
            </div>
        </footer>
    );
}