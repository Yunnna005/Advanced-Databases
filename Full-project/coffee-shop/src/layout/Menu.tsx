import MenuItem from "./Menu-item";

export default function Menu() {
    return (
        <section id="menu" className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl text-slate-800 font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Our Menu</h1>
        <p className="mb-8 text-lg text-slate-700 font-normal lg:text-xl sm:px-16 xl:px-48">Explore our diverse menu of expertly crafted coffee beverages, from classic espresso to innovative seasonal specials, all made with the finest ethically sourced beans.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <MenuItem
            title="Americano"
            description="Espresso blended with hot water for a smooth, bold taste and a clean finish."
            price={2.5}
            imageUrl="/americano.jpg"
            />

            <MenuItem
            title="Americano with Milk"
            description="Espresso mixed with hot water and a splash of milk for a softer, balanced flavor."
            price={3.0}
            imageUrl="/americano-milk.jpg"
            />

            <MenuItem
            title="Cappuccino"
            description="Espresso topped with steamed milk and a thick layer of foam for a rich, velvety texture."
            price={3.5}
            imageUrl="/cappuccino.jpg"
            />

            <MenuItem
            title="Cocao"
            description="Smooth cocoa blended with steamed milk for a deep, chocolate flavor."
            price={3.5}
            imageUrl="/cocao.jpg"
            />

            <MenuItem
            title="Cortado"
            description="Equal parts espresso and steamed milk for a strong yet smooth balance of flavor."
            price={3.5}
            imageUrl="/cortado.jpg"
            />

            <MenuItem
            title="Espresso"
            description="A single shot of pure espresso, rich in aroma with a full-bodied, intense flavor."
            price={3.0}
            imageUrl="/espresso.jpg"
            />

            <MenuItem
            title="Hot Chocolate"
            description="Creamy steamed milk mixed with rich cocoa for a sweet, comforting drink."
            price={3.5}
            imageUrl="/hot-chocolate.jpg"
            />

            <MenuItem
            title="Latte"
            description="Espresso blended with steamed milk and topped with a light layer of foam for a smooth, creamy taste."
            price={3.5}
            imageUrl="/latte.jpg"
            />

        </div>
        </section>
    );
}