import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import LoginForm from './LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 sm:p-6 md:p-10 relative overflow-hidden">
      
      {/* --- Background Aesthetic Elements (Glows) --- */}
      {/* মোবাইলে গ্লো গুলো একটু ছোট করা হয়েছে */}
      <div className="absolute top-[-5%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

      {/* Main Container: flex-col (mobile) md:flex-row (desktop) */}
      <div className="max-w-[1150px] w-full bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row relative z-10">
        
        {/* --- Left Side: Dark Glass Overlay --- */}
        {/* m-3 (mobile) m-4 (desktop) এবং প্যাডিং অ্যাডজাস্ট করা হয়েছে */}
        <div className="w-full md:w-[45%] bg-gray-900 m-3 md:m-4 rounded-[2rem] md:rounded-[3.5rem] relative flex flex-col justify-between p-8 md:p-12 overflow-hidden shadow-2xl min-h-[300px] md:min-h-full">
          
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
          
          {/* Decorative Glow inside Left Side */}
          <div className="absolute top-1/4 -right-20 w-48 md:w-64 h-48 md:h-64 bg-primary/20 rounded-full blur-[60px] md:blur-[80px]"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl flex items-center justify-center border border-white/10 shadow-xl">
                <FaShieldAlt className="text-white" size={16} />
              </div>
              <span className="text-white font-black uppercase tracking-[0.4em] text-[8px] md:text-[9px]">Secure Portal</span>
            </div>
            
            {/* ফন্ট সাইজ মোবাইলের জন্য ছোট করা হয়েছে: text-3xl (mobile) md:text-6xl (desktop) */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white italic leading-[1.1] tracking-tighter uppercase mb-4 md:mb-6">
              Empowering <br /> 
              The <span className="text-primary">Next</span> <br /> 
              Generation.
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[8px] md:text-[10px] max-w-xs leading-relaxed">
              Experience the most advanced academic management system for modern educators.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-4 mt-8 md:mt-0">
             <div className="h-[1px] w-8 md:w-12 bg-gray-700"></div>
             <p className="text-gray-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Established 2026</p>
          </div>
        </div>

        {/* --- Right Side: Login Form --- */}
        <div className="w-full md:w-[55%] p-8 sm:p-12 md:p-20 flex flex-col justify-center bg-transparent">
          <div className="max-w-[400px] mx-auto w-full">
            
            {/* Header for Form side */}
            <div className="mb-8 md:mb-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-gray-900">Sign In</h3>
              <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2 leading-relaxed">
                Please enter your credentials to continue
              </p>
            </div>
            
            <LoginForm />
            
            {/* Subtle Footer inside Form Side */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-100 flex justify-between items-center opacity-40 grayscale">
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">© 2026 EduSystem</span>
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest hover:text-primary cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;