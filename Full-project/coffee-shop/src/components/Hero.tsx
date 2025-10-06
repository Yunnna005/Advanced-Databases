export default function Hero() {
    return (
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
            <img
                src="/coffee-beans.jpg"
                alt="Coffee Beans Background"
                className="absolute inset-0 w-full h-full object-cover blur-md scale-105 z-0"
            />
            <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 text-white">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Freshly Brewed Moments</h1>
                <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">Wake up your senses with our handcrafted coffee, made from ethically sourced beans and brewed to perfection.</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"> 
                </div> 
            </div>
        </section>
    );
}