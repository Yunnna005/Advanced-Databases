export default function MenuItem({title, description,price, imageUrl}: {title: string, description: string, price: number, imageUrl: string}) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-200">
            <a href="#">
                <img className="w-full h-6 md:h-32 lg:h-56 rounded-t-lg object-coverg" src={imageUrl} alt={title} />
            </a>
            <div className="p-5 text-left">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-900">{title}</h5>
                <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">{description}</p>
                <p className="mb-3 font-meduim text-lg text-slate-800 dark:text-slate-800">€{price.toFixed(2)}</p>
                <button type="button" className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to Order</button>
            </div>
        </div>
    );
}