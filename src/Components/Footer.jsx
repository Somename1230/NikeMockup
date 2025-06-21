export default function Footer() {
return(

<footer className="bg-black text-white py-8 px-4 relative">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    {/* Left side (logo or text) */}
    <div className="text-lg font-semibold">YourCompany ©NIKE</div>

    {/* Right side (links) */}
    <div className="flex space-x-6 text-sm">
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Terms of Service</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>
  </div>
</footer>
    )
}