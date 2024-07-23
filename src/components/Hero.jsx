import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-40 object-contain' />
        <div className="flex gap-3">
            <button
              type='button'
              onClick={() =>
                window.open("https://github.com/pranav17052003/Saaransh", "_blank")
              }
              className='black_btn'
            >
              GitHub
            </button>
            <button
              type='button'
              onClick={() =>
                window.open("https://ptgpranav.github.io/Portfolio1/", "_blank")
              }
              className='black_btn'
            >
              Portfolio
            </button>
        </div>
        
      </nav>

      <h1 className='head_text'>
      Unleash the Power of Summarized Reading with <br className='max-md:hidden' />
        <span className='green_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Tired of wading through long articles? Meet <span className="green_gradient">Saaransh</span>, your open-source article summarizer that magically condenses lengthy reads into bite-sized, crystal-clear summaries. Simplify your reading and save time with Saaransh!
      </h2>
    </header>
  );
};

export default Hero;
