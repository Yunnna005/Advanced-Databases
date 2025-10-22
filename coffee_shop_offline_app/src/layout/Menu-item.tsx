interface MenuItemProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function MenuItem({title, description,price, imageUrl}: MenuItemProps) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-200">
            <img className="w-full h-6 md:h-32 lg:h-56 rounded-t-lg object-coverg" src={imageUrl} alt={title} />
            <div className="p-5 text-left">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-900">{title}</h5>
                <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">{description}</p>
                <p className="mb-3 font-meduim text-lg text-slate-800 dark:text-slate-800">€{price.toFixed(2)}</p>
            </div>
        </div>
    );
}