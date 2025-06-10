export default function Header () {
    return(
        <header className="bg-black text-white p-4">
            <h1 className="text-3xl font-bold">Nike Mockup</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Products</a></li>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}