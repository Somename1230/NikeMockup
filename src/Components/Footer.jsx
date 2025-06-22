import { useNavigate } from 'react-router-dom';

export default function Footer() {

  const navigate = useNavigate();
  
return(

<footer className="bg-black text-white py-8 px-4 relative">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    {/* Left side (logo or text) */}
    <div className="text-lg font-semibold">YourCompany ©NIKE</div>

    {/* Right side (links) */}
    <div className="flex space-x-6 text-sm">
      <button className="hover:underline" onClick={() => navigate('/contact')}>Privacy Policy</button>
      <button className="hover:underline" onClick={() => navigate('/contact')}>Terms of Service</button>
      <button className="hover:underline" onClick={() => navigate('/contact')}>Contact</button>
    </div>
  </div>
</footer>
    )
}