import Shoe1 from '../assets/pictures/Shoe.webp';
import Award from '../assets/pictures/Award!.webp';

export default function Page1() {
    return(
<div className="h-screen flex items-center justify-center overflow-hidden bg-black">

  {/* Glows */}
  <div className="absolute sm:h-150 sm:w-150 w-80 h-110  bg-blue-500 opacity-15 blur-3xl rounded-full top-80 sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
  <div className="absolute sm:h-80 sm:w-80 w-50 h-50 bg-cyan-500 opacity-15 blur-3xl rounded-full top-80 sm:top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2 z-0"></div>

  {/* Text slightly above the shoe */}
  <h1 className="transform scale-y-130 whitespace-nowrap sm:top-[40%] top-[35%] -translate-y-1/2 absolute z-20 text-white text-[18vw] text-center left-1/2 -translate-x-1/2">
    NIKE AIR
  </h1>

  {/* Shoe Image centered */}
<div className="relative overflow-hidden w-full h-[100vh]">
  <img 
    src={Shoe1}
    alt="Nike Shoe"
    className="absolute z-10 w-100 sm:w-[80vw] max-w-370 sm:top-[50%] top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
  />
</div>


<img
  src={Award}
  alt="award"
  className="invisible md:visible absolute left-30 bottom-61 lg:bottom-55 lg:w-50 w-30"
></img>

<div className="absolute sm:right-30 bottom-[20%] flex space-x-1 items-stretch">
  <div className="w-2 bg-white"></div>
  <div className="w-1 bg-white"></div>
  <div className="w-1 bg-white"></div>

  <div className="text-white sm:text-smxl text-sm w-63 flex items-center pl-2">
    The Nike Air Force line is a highly popular and versatile sneaker, praised for its comfort, style, and durability. It's known for its clean, classic design that can be dressed up or down.
  </div>
</div>

<div className="bar absolute bottom-[15%]"></div>
<div className="text-white absolute bottom-[3%] text-4xl font-bold transform scale-y-130">JUST DO IT</div>
</div>


    )
}