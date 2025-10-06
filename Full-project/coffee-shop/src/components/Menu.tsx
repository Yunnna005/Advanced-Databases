import MenuItem from "../components/Menu-item";

export default function Menu() {
    return (
        <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl text-slate-800 font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Our Menu</h1>
        <p className="mb-8 text-lg text-slate-700 font-normal lg:text-xl sm:px-16 xl:px-48">Explore our diverse menu of expertly crafted coffee beverages, from classic espresso to innovative seasonal specials, all made with the finest ethically sourced beans.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <MenuItem
                title="Americano"
                description="A strong and bold coffee shot, perfect for a quick pick-me-up."
                price={2.5}
                imageUrl="/americano.jpg"
            />
            <MenuItem
                title="Americano with Milk"
                description="A concentrated coffee brewed by forcing hot water through finely-ground coffee."
                price={3.0}
                imageUrl="/americano-milk.jpg"
            />
            <MenuItem
                title="Cappuccino"
                description="A rich and creamy coffee drink made with espresso and steamed milk."
                price={3.5}
                imageUrl="/cappuccino.jpg"
            />
            <MenuItem
                title="Cocao"
                description="A rich and creamy coffee drink made with espresso and steamed milk."
                price={3.5}
                imageUrl="/cocao.jpg"
            />
            <MenuItem
                title="Cortado"
                description="A rich and creamy chocolate drink made with steamed milk."
                price={3.5}
                imageUrl="/cortado.jpg"
            />
            <MenuItem
                title="Espresso"
                description="A rich and creamy coffee drink made with espresso and steamed milk."
                price={3.5}
                imageUrl="/espresso.jpg"
            />
            <MenuItem
                title="Hot Chocolate"
                description="A rich and creamy chocolate drink made with steamed milk."
                price={3.5}
                imageUrl="/hot-chocolate.jpg"
            />
            <MenuItem
                title="Latte"
                description="A rich and creamy coffee drink made with espresso and steamed milk."
                price={3.5}
                imageUrl="/latte.jpg"
            />
        </div>
        </section>
    );
}