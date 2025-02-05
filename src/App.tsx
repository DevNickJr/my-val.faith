import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Hero } from "./components/Hero";
import { BiLeftArrow, BiVolume, BiVolumeMute } from "react-icons/bi";
import { FcLeft } from "react-icons/fc";
import { CoolMode } from "./components/ui/cool-mode";
import { End } from "./components/End";
// const pickupLines = [
//   "Are you a {interest}? Because you've coded your way into my heart!",
//   "Hey {name}, if you were a book, you'd be my favorite chapter!",
//   "Is your name {name}? Because every moment with you feels like a hit song!",
// ];


export default function ValentineApp() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

    const [muted, setMuted] = useState(false)
    const [step, setStep] = useState(0)
    
    const mute = () => {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play()
        }
        if (audioRef.current.muted) {
          setMuted(false)
          audioRef.current.muted = false
          return
        }
        setMuted(true)
        audioRef.current.muted = true
      }
    }
  // const [name, setName] = useState("");
  // const [interest, setInterest] = useState("");
  // const [pickupLine, setPickupLine] = useState("");

  // const handleGenerate = async () => {
  //   if (name && interest) {
  //     setPickupLine(await generateLine(name, interest));
  //   }
  // };

  return (
    <div className="h-screen max-h-screen relative">
      {
        step === 0 ?
        <Hero />
        :
        step === 1 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">Hey Babe </span>😊</p>
            <img className="h-[200px] md:h-fi" src="/love1.svg" alt="Love 1"/>
            <span className="font-poppins text-lg font-medium">I hope your day is as amazing as you are</span>
          </div>
        </>
        :
        step === 2 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">Uhmmm....</span>🫠</p>
            <img className="h-[200px] md:h-fi" src="/love2.svg" alt="Love 2"/>
            <span className="font-poppins text-lg font-medium">Every time I see you, your smile makes my whole day brighter. I honestly think the world is a better place with you in it.</span>
          </div>
        </>
        :
        step === 3 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">For real though....</span> 🤔</p>
            <img className="h-[200px] md:h-fi" src="/love7.svg" alt="Love 7"/>
            <span className="font-poppins text-lg font-medium"> How did I get so lucky to have the hottest, sweetest, and most amazing girlfriend ever</span>
          </div>
        </>
        :
        step === 4 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">Valentines Day is coming up</span></p>
            <img className="h-[200px] md:h-fi" src="/love3.svg" alt="Love 3"/>
            <span className="font-poppins text-lg font-medium">... and I'd love to spend some time with you. Just you, me, and a little bit of magic 😉 </span>
          </div>
        </>
        :
        step === 5 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">I was thinking</span>❤️</p>
            <img className="h-[200px] md:h-fi" src="/love4.svg" alt="Love 4"/>
            <span className="font-poppins text-lg font-medium">How about we grab dinner and make this Valentine's one to remember? No pressure, just a good time. </span>
          </div>
        </>
        :
        step === 6 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">Funny Enough </span></p>
            <img className="h-[200px] md:h-fi" src="/love6.svg" alt="Love 6"/>
            <span className="font-poppins text-lg font-medium">I hear saying yes to this message brings good luck for the whole year. Just saying. 😉❤️</span>
          </div>
        </>
        :
        <End />
        
      }
      <>
          {/* <div className="flex justify-between gap-12 items-center absolute top-0 left-0 w-full p-10">
            <Button onClick={() => setStep(prev => prev > 0 ? prev-1 : 0)} className="">Prev</Button>
            <Button onClick={() => setStep(prev => prev+1)} className="">Next</Button>
          </div> */}
          <div className="flex flex-col justify-center gap-3 items-center absolute bottom-2 left-0 w-full p-10">
            {/* <Button onClick={() => setStep(prev => prev > 0 ? prev-1 : 0)} className="">Prev</Button> */}
            {
              step < 6 ? 
            <Button onClick={() => step > 7 ? 7 : setStep(prev => prev+1)} className="rounded-full cursor-pointer">{step===6 ? "Yes, I'd Love that" : "Continue"}</Button>
            : step === 6 ? 
              <Button onClick={() => step > 7 ? 7 : setStep(prev => prev+1)} className="rounded-full cursor-pointer">Yes, I'd Love that</Button>
            : <></>
            }
            <FcLeft className="rounded-full cursor-pointer" onClick={() => setStep(prev => prev > 0 ? prev-1 : 0)} />
          </div>
          <audio src="/perfect.mp3" ref={audioRef} autoPlay loop muted>
              Your browser does not support the audio element.
          </audio>
          <iframe src="silence.mp3" allow="autoplay" id="audio" style={{ visibility: "hidden" }}></iframe>
          <div onClick={mute} className="flex justify-center items-center absolute bottom-8 left-8 p-3 bg-gray-50 rounded-full cursor-pointer">
            {
              muted ? 
                <BiVolumeMute className="text-2xl" />
              :
                <BiVolume className="text-2xl" />
            }
          </div>
        </>
    </div>
  );
}
