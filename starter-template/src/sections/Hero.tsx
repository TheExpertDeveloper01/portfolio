import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg'

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`,
      }}
      ></div>
      <div className="w-[620px] h-[620px] hero-ring"></div>
      <div className="w-[820px] h-[820px] hero-ring"></div>
      <div className="w-[1020px] h-[1020px] hero-ring"></div>
      <div className="w-[1220px] h-[1220px] hero-ring"></div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="w-24 h-24" // Adjusted to properly size the image
            alt="Shafi on his mac!"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 w-2.5 h-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
        Building Exceptional User Experiences!
      </h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">
        I specialise in transforming designs into functional, scalable, high-performing applications. Let's discuss your next project!
      </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown className="w-4 h-4" /> {/* Corrected to properly size the arrow */}
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">Let's connect!</span>
        </button>
      </div>
    </div>
  );
};


// import memojiImage from '@/assets/images/memoji-computer.png';
// import Image from 'next/image';
// import ArrowDown from '@/assets/icons/arrow-down.svg'

// export const HeroSection = () => {
//   return (
//   <div className="py-32 md:py-48">
//     <div className="container">
//       <div className="flex flex-col items-center">
//       <Image 
//       src={memojiImage} 
//       className="size-[100px]" 
//       alt="Shafi on his mac!" 
//       />
//       <div className ="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
//         <div className="bg-green-500 size-2.5 rounded-full"></div>
//         <div className="text-sm font-medium">Available for new projects</div>
//       </div>
//     </div>
//     </div>
//     <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences!</h1>
//     <p className= "mt-4 text-center text-white/60">
//       I specialise in transforming designs into functional, scalable, high-performing applications. Let's discuss your next project!
//     </p>
//     <div className="flex flex-col items-center mt-8 gap-4">
//       <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
        
//         <span className="font-semibold">Explore My Work</span>
//         <ArrowDown className="size=4"/>
//       </button>
//       <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
//         <span>👋</span>
//         <span className="font-semibold">Let's connect!</span>
//       </button>

//     </div>

//   </div>
//   );
// };
