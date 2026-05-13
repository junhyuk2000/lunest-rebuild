import '../style/home.css'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div>
       <section id="section1">
        <div className="cloud cloud1">
          <img src="/images/index/cloud1.png" alt="cloud1" />
        </div>
        <div className="cloud cloud2">
          <img src="/images/index/cloud2.png" alt="cloud2" />
        </div>
        <div className="cloud cloud3">
          <img src="/images/index/cloud3.png" alt="cloud3" />
        </div>
        <div className="cloud cloud4">
          <img src="/images/index/cloud4.png" alt="cloud4" />
        </div>
        <div className="hero-text">
          <p className="floating-text">
            Lunest는 아무도 방해하지 않는 나만의 밤을 위해 만들어졌어요.
          </p>
        </div>
      </section>
      <Carousel/>
    </div>
)
}