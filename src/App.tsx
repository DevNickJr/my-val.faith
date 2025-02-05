import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Hero } from "./components/Hero";
import { BiVolume, BiVolumeMute } from "react-icons/bi";
import { FcLeft } from "react-icons/fc";
import { End } from "./components/End";
import Love1 from '/love1.svg'
import Love2 from '/love2.svg'
import Love3 from '/love3.svg'
import Love4 from '/love4.svg'
import Love6 from '/love6.svg'
import Love7 from '/love7.svg'
// const pickupLines = [
//   "Are you a {interest}? Because you've coded your way into my heart!",
//   "Hey {name}, if you were a book, you'd be my favorite chapter!",
//   "Is your name {name}? Because every moment with you feels like a hit song!",
// ];


export default function ValentineApp() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

    const [muted, setMuted] = useState(true)
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

    
    // useEffect(() => {
    //   userCl()
    //   if (!mounted) return setMounted(true)
    //   const timeout = setTimeout(() => {  
    //     console.log('playing')
    //     if (audioRef.current) {
    //       console.log('playing 2')
    //       audioRef.current.play()
    //       audioRef.current.muted = false
    //       setMuted(false)
    //     }
    //   }, 2000)

    //   return () => clearTimeout(timeout)
    // }, [mounted])

  return (
    <div className="h-[100dvh] relative">
      {
        step === 0 ?
        <Hero />
        :
        step === 1 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">Hey Babe </span>😊</p>
            <img className="h-[200px] md:h-fi" src={Love1} alt="Love 1"/>
            <span className="font-poppins text-lg font-medium">I hope your day is as amazing as you are</span>
          </div>
        </>
        :
        step === 2 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">Uhmmm....</span>🫠</p>
            <img className="h-[200px] md:h-fi" src={Love2} alt="Love 2"/>
            <span className="font-poppins text-lg font-medium">Every time I see you, your smile makes my whole day brighter. I honestly think the world is a better place with you in it.</span>
          </div>
        </>
        :
        step === 3 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">For real though....</span> 🤔</p>
            <img className="h-[200px] md:h-fi" src={Love7} alt="Love 7"/>
            <span className="font-poppins text-lg font-medium"> How did I get so lucky to have the hottest, sweetest, and most amazing girlfriend ever</span>
          </div>
        </>
        :
        step === 4 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">Valentines Day is coming up</span></p>
            <img className="h-[200px] md:h-fi" src={Love3} alt="Love 3"/>
            <span className="font-poppins text-lg font-medium">... and I'd love to spend some time with you. Just you, me, and a little bit of magic 😉 </span>
          </div>
        </>
        :
        step === 5 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">I was thinking</span>❤️</p>
            <img className="h-[200px] md:h-fi" src={Love4} alt="Love 4"/>
            <span className="font-poppins text-lg font-medium">How about we grab dinner and make this Valentine's one to remember? No pressure, just a good time. </span>
          </div>
        </>
        :
        step === 6 ?
        <>
          <div className="flex flex-col h-full gap-4 items-center w-full justify-center text-center p-5">
            <p className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter font-love"><span className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent ">Funny Enough </span></p>
            <img className="h-[200px] md:h-fi" src={Love6} alt="Love 6"/>
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
              step < 7 &&
            <Button onClick={() => step > 7 ? 7 : setStep(prev => prev+1)} className="rounded-full cursor-pointer">{step===6 ? "Yes, I'd Love that" : "Continue"}</Button>
            }
            {
              !!step &&
            <FcLeft className="rounded-full cursor-pointer" onClick={() => setStep(prev => prev > 0 ? prev-1 : 0)} />
            }
          </div>
          <audio src="/perfect.mp3" ref={audioRef} autoPlay loop muted>
              Your browser does not support the audio element.
          </audio>
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
