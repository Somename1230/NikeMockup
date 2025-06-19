import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="bg-neutral-800 text-white p-7 text-lg pt-9">
        <nav className="flex justify-between items-center lg:px-20 px-0 relative">

          {/* Logo */}
            <svg className="sm:w-40 w-30 mb-3 absolute left-1/2 transform -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg" viewBox="135.5 361.38 1000 356.39">
            <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z"/>
                </svg>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-12">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Locate</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>

          {/* Hamburger (mobile) */}
          <button 
            className="lg:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* SHOP button (desktop) */}
          <button className="">SHOP</button>

          {/* Sidebar Drawer (mobile) */}
          <div className={`fixed top-0 left-0 h-full w-64 bg-neutral-900 text-white p-6 transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <ul className="flex flex-col space-y-6 mt-20">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Locate</a></li>
              <li><a href="#" className="hover:underline">Legal</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><button className="mt-6">SHOP</button></li>
            </ul>
          </div>

          {/* Optional backdrop */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </nav>
      </header>
    </div>
  );
}
