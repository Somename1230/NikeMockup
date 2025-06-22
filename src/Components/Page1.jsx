
export default function Page1() {
    return(
<div className="h-screen flex items-center justify-center overflow-hidden bg-black">

<div className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    src="/video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  <div className="absolute inset-0 bg-black/40 z-[1]" />
</div>

  <h1 className="transform scale-y-130 whitespace-nowrap sm:top-[40%] top-[35%] -translate-y-1/2 absolute z-20 text-white text-[18vw] text-center left-1/2 -translate-x-1/2">
    NIKE AIR
  </h1>

<div className="text-white absolute sm:left-30 bottom-[20%] flex z-20 w-80 text-center">
      <h1>Emmy for Year's Best Commercial (2021): Nike's "You Can't Stop Us" ad, highlighting athletic unity, won this prestigious award. </h1>
</div>

<div className="absolute sm:right-30 bottom-[20%] flex space-x-1 items-stretch z-20">
  <div className="w-2 bg-white"></div>
  <div className="w-1 bg-white"></div>
  <div className="w-1 bg-white"></div>

  <div className="text-white sm:text-xl text-sm w-63 flex items-center pl-2">
    The Nike Air Force line is a highly popular and versatile sneaker, praised for its comfort, style, and durability. It's known for its clean, classic design that can be dressed up or down.
  </div>
</div>

<div className="bar absolute bottom-[15%] z-20"></div>
<div className="text-white absolute bottom-[3%] text-4xl font-bold transform scale-y-130 z-30">JUST DO IT</div>

<div className="absolute bottom-20 w-full h-50 bg-gradient-to-b from-transparent to-black "/>
<div className="absolute w-full h-20 bg-black bottom-0"></div>


</div>


    )
}