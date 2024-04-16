import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import wave from "../assets/wave.png"
const Footer = () => {
  return (
    <footer className='max-w-screen flex flex-col p-4 bottom-0 min-h-80  bg-red-800 pb-2 pt-3'
     style={{fontFamily: 'Roboto, sans-serif'}}
    >
      {/* <div className='waves'>
        <div className='wave' id="wave1"></div>
        <div className='wave' id="wave2"></div>
        <div className='wave' id="wave3"></div>
        <div className='wave' id="wave4"></div>
    </div> */}
    <div className='flex justify-between '>
  
     <div className='flex items-center'>
      <FaFacebookF style={{color:'white',margin:10,cursor:'pointer',fontSize:25}}
         onMouseOver={(e) => (e.target.style.color = '#55acee')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
      />
      <FaLinkedinIn style={{color:'white',margin:10,cursor:'pointer',fontSize:28}}
        onMouseOver={(e) => (e.target.style.color = '#0077b5')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
      />
      <SiGmail style={{color:'white',margin:10,cursor:'pointer',fontSize:28}}
         onMouseOver={(e) => (e.target.style.color = '#dd4b39')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
      />
      <FaWhatsapp 
        style={{color:'white',margin:10,cursor:'pointer',fontSize:32}}
         onMouseOver={(e) => (e.target.style.color = '#25d366')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
      />
      </div>
      {/* <div className='text-white'  style={{
          borderLeft: '1px solid white', // Add a vertical line here
          paddingLeft: '10px', // Add some padding to separate the line from the text
          fontWeight: 500,
          cursor: 'pointer',
          fontSize:20
        }}
        onMouseOver={(e) => (e.target.style.color = '#be3144')}
        onMouseOut={(e) => (e.target.style.color = 'white')}
        >SignOut</div> */}
    </div>
    {/* <hr /> */}
    <p className='text-white text-sm m-auto' style={{opacity:'0.75'}}>Copyright @ LNMIIT</p>
    <style>{
        `
        .wave{
         position: absolute;
         top: -100px;
         left: 0;
         width: 100%;
         height: 100px;
         border:2px solid red;
         {/* background-color:#f00; */}
         background-image: url(${wave});
         background-size:1000px 100px;
         }
        `
    }
    </style>
    </footer>
  )
}

export default Footer
