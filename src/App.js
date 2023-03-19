import React from "react";
import { Qr } from "./images";
const App = () => {
  return (
    <div className=" bg-[#d6e2f0] h-screen items-center flex justify-center">
      <div className="boxContainer max-w-[330px] bg-[#ffffff] p-[15px] rounded-[20px] shadow-[20px_30px_50px_rgba(100,198,255,0.2)]">
        <div className=" justify-center flex">
          <img src={Qr} alt="qrCode" className=" w-[300px] rounded-[20px]" />
        </div>

        <div className=" text-center">
          <h1 className=" text-[#1f3251] font-[700] text-[22px] py-[20px]">
            Improve your front-end skills by building projects
          </h1>
          <p className=" text-[#7b879d] font-[400] text-[15px] pb-[20px] px-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>

      <div className=" absolute bottom-0 flex justify-center text-[11px] p-[20px]">
        Challenge by &nbsp;
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className=" text-[#3e52a3]"
        >
          Frontend Mentor
        </a>
        . Coded by &nbsp;
        <a
          href="https://github.com/jaythecree8tor"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-[#3e52a3]"
        >
          Jordan Femi-Bella
        </a>
        .
      </div>
    </div>
  );
};

export default App;
