import React from 'react';
import IMG1 from "../PNG/Your Images Here (1).png"
import about1 from "../images/about2.svg"
import about2 from "../images/about2.svg"
import trophy from "../images/trophy.svg";
import card1 from "../PNG/buy-home 1 (Traced).png";
import card2 from "../PNG/house (2) 1 (Traced).png";
import card3 from "../PNG/sale 1 (Traced).png";
import { GoArrowRight } from "react-icons/go";
import group1 from "../images/Group 559.svg";
import group2 from "../images/Group 560.svg";
import group3 from "../images/Group 561.svg";
import group4 from "../images/Group 562.svg";
import agent1 from "../PNG/Mask group.png";
import agent2 from "../PNG/Mask group.png";
import agent3 from "../PNG/Mask group.png";
import agent4 from "../PNG/Mask group.png";
import { FiPhone } from "react-icons/fi";
import group5 from "../images/group1.svg"








const About = () => {
  const cardData = [
    {
      imgSrc: card1,
      title: "Buy a Home",
      description:
        "over 1 million+ homes for sale available on the website we can match you with a house you will want to call home",
      additionalInfo: "Find A Home",
    },
    {
      imgSrc: card2,
      title: "Rent a Home",
      description:
        "over 1 million+ homes for sale available on the website we can match you with a house you will want to call home",
      additionalInfo: "Find A Home",
    },
    {
      imgSrc: card3,
      title: "Sell a Home",
      description:
        "over 1 million+ homes for sale available on the website we can match you with a house you will want to call home",
      additionalInfo: "Find A Home",
    },
  ];
  const ItemsData = [
    {
      src: group1,
    },
    {
      src: group2,
    },
    {
      src: group3,
    },
    {
      src: group4,
    },
  ];

  const AgentsData = [
    {
      src: agent1,
      name: "David Wing",
      profession: "Eco Builders",
      contact: "Call: +1 234 567 890",
      experience: "3 Years Experience",
    },
    {
      src: agent2,
      name: "Mike Hue",
      profession: "Eco Builders",
      contact: "Call: +1 234 567 890",
      experience: "4 Years Experience",
    },
    {
      src: agent3,
      name: "Ela Steven",
      profession: "Eco Builders",
      contact: "Call: +1 234 567 890",
      experience: "3 Years Experience",
    },
    {
      src: agent4,
      name: "Billi Butcher",
      profession: "Eco Builders",
      contact: "Call: +1 234 567 890",
      experience: "5 Years Experience",
    },
  ];
  return (
    <div className=' justify-center h-auto flex flex-col'>
      <div className=' flex flex-col md:flex-row gap-8 md:ml-20 w-auto '>
       <div className='flex flex-col mt-20 md:ml-20 relative '>
        <div className='flex justify-center items-center w-max ml-20 md:ml-0'>
          <img src={IMG1} alt="" className='md:w-80 w-60  mt-10 md:mt-0' />
        </div>
        <div className=' bg-white shadow-lg md:-bottom-16 -bottom-14 -left-10 absolute w-40 ml-20 md:ml-0 md:h-48 rounded items-start justify-center flex flex-col gap-1'>
          <div className='ml-2'><img src={trophy} alt="" className='w-10' />
          </div>
          <p className='w-3/4 font-semibold ml-2'>National
Real Estate
Awards</p>
<p className='text-[#7C8893] ml-2'>Analysis</p>
        </div>
       </div>
       <div className='flex flex-col md:mt-24 mt-10'>
        <div className=' flex  flex-col md:justify-start justify-center items-center md:items-start gap-5'>
          <p className=' text-[#0061E0] font-thin  text-lg'>ABOUT US</p>
          <h1 className=' text-[#0D263B] md:text-3xl text-2xl font-bold md:w-3/4 text-center md:text-start'>We're on a Mission to Change
          View of RealEstate Field.</h1>
          <p className='md:w-3/4  text-[#7C8893] text-center md:text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit ux sed eiusmod tempor
          incididunt ut labore et dolore.enim admix minim veniam quis nostrud.</p>
        </div>
        <div className='flex flex-col md:flex-row  mt-10 md:text-start'>
         <div className='flex flex-col justify-center items-center md:justify-start md:items-start  gap-2' >
          <div className=''>
          <img src={about1} alt="" className='' />
          </div>
            <p className=' font-semibold'>Modern Villa</p>
            <p className='text-[#7C8893]  md:w-2/3 text-center md:text-start'>When unknown printer took galley
            of type and scrambled.</p>
         </div>
         <div className='flex flex-col justify-center items-center md:justify-start md:items-start  gap-2' >
          <div className=''>
          <img src={about2} alt="" className='' />
          </div>
            <p className=' font-semibold'>Secure Payment</p>
            <p className='text-[#7C8893]  md:w-2/3 text-center md:text-start'>When unknown printer took galley
            of type and scrambled.</p>
         </div>
        
        </div>
       </div>
      </div>
      <div className='md:mt-24 mt-10 flex flex-col justify-center items-center gap-5 h-auto w-auto '>
        <div className='gap-2 mt-2 '>
          <p className='text-[#0061E0]  font-normal text-center'>OUR SERVICES</p>
          <h2 className='text-[#0D263B] text-3xl font-bold mt-3 md:text-4xl'>Our Main Focus</h2>
        </div> 
        <div className='flex gap-6 flex-col md:flex-row mt-5 cursor-pointer  '>
        {cardData.map((card, index) => (
        <div className="shadow-xl flex flex-col  h-72 w-64 justify-center items-center gap-4 border-b-4 border-solid border-[#0061E0]  " key={index}>
          <div className='rounded-full shadow-lg w-20 h-20 items-center flex justify-center'>
            <img src={card.imgSrc} />
          </div>
          <h1 className='text-center text-xl font-medium hover:text-[#0061E0]'>{card.title}</h1>
          <p className='text-center text-sm text-[#7C8893]'>{card.description}</p>
          <p className='text-center text-[#7C8893] font-medium text-sm flex justify-center items-center gap-5'>{card.additionalInfo}<GoArrowRight /> </p>
        </div>
      ))}
        </div>
      </div>
      <div className='h-auto w-auto mt-20 bg-[#E2EFFF] flex flex-col lg:flex-row justify-center items-center lg:h-60 lg:gap-40 gap-10 '>
         {
          ItemsData.map((item,index)=>(
            <div className='mt-4 mb-4'>
             <img src={item.src} alt="" className='w-24' />
            </div>
          ))
         }
      </div>
      <div className="flex flex-col justify-center items-center md:mt-20 mt-10">
      <div>
        <h1
          className="text-[#0061E0] text-center"
        >
          EXPERTISE IS HERE
        </h1>
        <h2 className="text-[#282828] md:text-3xl text-2xl font-bold mt-2">Our Growing Agents</h2>
      </div>
      <div className="mt-6">
      <div className='flex gap-6 flex-col lg:flex-row mt-5 cursor-pointer  '>
        {AgentsData.map((card, index) => (
        <div className="shadow-xl flex flex-col  h-72 w-56 justify-center items-center bg-white gap-2 " key={index}>
          <div className='  h-40 w-40  items-center flex justify-center relative'>
            <img src={card.src} />
            <div className='absolute text-sm text-[#0061E0] bottom-0 w-32 left-0 bg-[#e1dfdf]'>
             {card.experience}
            </div>
          </div>
         <div className=''>
         <h1 className=' text-lg font-medium hover:text-[#0061E0]'>{card.name}</h1>
          <p className=' text-sm text-[#7C8893]'>{card.profession}</p>
          <p className=' text-[#7C8893] font-medium text-sm gap-2 mt-2 flex'><FiPhone className='text-[#0061E0]' />{card.contact}</p>
         </div>
        </div>
      ))}
        </div>
      </div>
      <div className='bg-[#E2EFFF] mt-20 w-screen flex justify-center items-center md:w-[980px] md:h-40'>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
           <div className=' flex  flex-col md:flex-row justify-center items-center md:gap-5 gap-2'>
            <div className='md:ml-10'>
            <img src={group5} alt="" className='w-16 h-16 '/>
            </div>
             <div className=''>
             <h2 className='text-center md:text-start text-3xl font-semibold '>Become An Agent</h2>
             <p className='text-[#7C8893] text-center md:text-start mt-3'>Agent hen an unknown printer took a galley scramble</p>
             </div>
           </div>
           <div className='flex justify-center items-center mt-5 md:mr-10 ' ><button className='bg-[#0061E0] py-2 px-5 text-white font-thin justify-center items-center'>Join Now</button></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;
