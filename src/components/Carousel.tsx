import { useState, useEffect, useRef } from 'react'
import '../style/home.css'
const slides = [
  '/images/index/slide1.jpg',
  '/images/index/slide2.jpg',
  '/images/index/slide3.jpg',
]
const clonedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function Carousel() {
    const [index, setIndex] = useState(1);
    const [isTransition, setIsTransition] = useState(true);
    const [isDelay, setIsDelay] = useState(false);
    const intervalRef = useRef<number | null>(null);

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setIndex((prev)=> prev + 1)
        }, 3000)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    },[])

    useEffect(()=>{
        if(index === clonedSlides.length - 1) {
            setTimeout(() => {
                setIsTransition(false)
                setIndex(1)
            }, 300);
            setTimeout(() => {
                setIsTransition(true)
            }, 400);
        } else if(index === 0) {
            setTimeout(() => {
                setIsTransition(false)
                setIndex(clonedSlides.length - 2)
            }, 300);
        }
    },[index])

    const stopAuto = () => {
        if(intervalRef.current) clearInterval(intervalRef.current)
    }
    const startAuto = () => {
        intervalRef.current = setInterval(() => {
            setIndex((prev)=> prev + 1)
        }, 3000)
    }

    const moveSlide = (direction: number) => {
        if(isDelay) return
        setIsDelay(true)
        setIndex(prev => prev + direction)
        setTimeout(() => {
            setIsDelay(false)
        }, 400);
    }



    return (
        <section id='section2'>
            <div className='slide'
                onMouseOver={stopAuto}
                onMouseLeave={startAuto}
            >
                <div className='slide-box'
                    style={{
                        transform: `translateX(-${index * 100}vw)`,
                        transition: isTransition ? '0.3s' : 'none',
                    }}>
                    {clonedSlides.map((src,i)=>(
                        <div className='inner' key={i}>
                            <img src={src} alt={`slide${i}`} />
                        </div>
                    ))}
                </div> 
                <div className='left_btn'>
                    <button onClick={() => moveSlide(-1) }>
                            <img src="/images/index/left_btn.png" alt="이전" />
                    </button>
                </div>
                <div className='right_btn'>
                    <button onClick={() => moveSlide(1)}>
                        <img src="/images/index/right_btn.png" alt="다음" />
                    </button>
                </div>             
                <div className="indicator">
                    {slides.map((_,i)=>(
                        <div
                            key={i}
                            className={`ellipse ${index - 1 === i ? 'choice' : ''}`}
                            onClick={() => setIndex( i + 1 )}
                        />
                    ))}
                </div>  
            </div>
        </section>
    )
}