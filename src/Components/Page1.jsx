import Shoe1 from '../assets/pictures/Shoe.webp';

export default function Page1() {
    return(
<div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

  {/* Glows */}
  <div className="absolute w-150 h-150 bg-blue-500 opacity-15 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
  <div className="absolute w-80 h-80 bg-cyan-500 opacity-15 blur-3xl rounded-full top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2 z-0"></div>

  {/* Text slightly above the shoe */}
  <h1 className="  whitespace-nowrap top-1/2 -translate-y-1/2 lg:-mt-40 absolute z-20 text-white text-[18vw] text-center left-1/2 -translate-x-1/2">
    NIKE AIR
  </h1>

  {/* Shoe Image centered */}
<img
  src={Shoe1}
  alt="Nike Shoe"
  className="absolute z-10 w-[120vw] sm:w-[80vw] max-w-370 top-[57%] left-1/2 -translate-x-1/2 -translate-y-1/2"
/>

</div>


    )
}