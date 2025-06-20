import ShoeGrid from '../assets/pictures/ShoeGrid!.webp';

export default function Page2() {
    return(
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

            <img src={ShoeGrid}
            className="w-200"
            />

            <div className="text-white absolute top-15 w-100 text-center ">
                Nike’s invincible features our
                softest,most responsive foam. So you
                can keep doing what you love. 
            </div>
            
<a href="#_" className="absolute px-6 py-3 font-bold text-black group">
    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
    <span className="relative">SHOP</span>
</a>

<div className="bar absolute bottom-30"></div>

</div>

    )
}