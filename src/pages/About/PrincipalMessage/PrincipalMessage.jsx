import React from 'react';

const PrincipalMessage = () => {
  return (
    <section className="py-20 px-4 bg-base-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side with Accent Shadow */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000" 
                alt="Principal" 
                className="w-full h-auto rounded-[2.5rem] object-cover shadow-2xl"
              />
            </div>
            {/* The Accent Box behind the image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary rounded-[2.5rem] -z-0 hidden md:block"></div>
          </div>

          {/* Content Side */}
          <div className="flex-[1.5] space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">
                Leadership Message
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-base-content leading-tight">
                A Message from the <br /> 
                <span className="text-primary italic">Principal's Desk.</span>
              </h2>
            </div>

            <div className="w-20 h-2 bg-secondary rounded-full mx-auto lg:mx-0"></div>

            <div className="relative">
              {/* Quote Icon Background */}
              <span className="absolute -top-10 -left-6 text-9xl text-base-content/5 font-serif pointer-events-none">“</span>
              
              <p className="text-lg md:text-xl text-base-content/80 leading-relaxed italic font-medium">
                "Welcome to Novus Horizon School. Since our inception, we have been committed to providing a holistic learning experience. Our goal is not just to produce students with high grades, but to build individuals with strong moral values and a global perspective. We invite you to be a part of our journey towards excellence."
              </p>
            </div>

            {/* Principal Signature */}
            <div className="pt-6 border-l-4 border-primary pl-6 inline-block text-left">
              <h4 className="text-2xl font-black text-base-content">Dr. Sarah Jenkins</h4>
              <p className="text-base-content/60 font-bold uppercase tracking-widest text-sm">
                Principal, Novus Horizon School
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;