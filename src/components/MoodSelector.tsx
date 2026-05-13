// import { useState } from 'react'
import '../style/moodselector.css'

const moodCards = [
  { label: '기분좋아요', img: '/images/index/smile.svg' },
  { label: '슬퍼요', img: '/images/index/sad.svg' },
  { label: '화나요', img: '/images/index/angry.svg' },
]

export default function MoodSelector() {
    

    return(
        <section id='section4'>
            <div>
                <h3 className='question'>오늘의 기분은?</h3>
            </div>
            <ul className='select-box'>
                {moodCards.map((card)=>(
                    <li 
                        key={card.label}
                        className='select-card'
                    >
                        <img src={card.img} alt={card.label} />
                        {card.label}
                    </li>
                ))}
            </ul>
        </section>
    )

}