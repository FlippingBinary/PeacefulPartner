import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Home.css'
import happy_bg from '../assets/suzana-sousa-IC1_YWQn6so-unsplash-bg.png?w=1920&webp'
import happy_fg from '../assets/suzana-sousa-IC1_YWQn6so-unsplash-fg.png?w=1920&version=1&webp'
import hug_bg from '../assets/pexels-the-shaan-photography-11582406-bg.png?w=1920&webp'
import hug_fg from '../assets/pexels-the-shaan-photography-11582406-fg.png?w=1280&webp'
import fight_bg from '../assets/pexels-vera-arsic-984949-bg.png?w=1920&webp'
import fight_fg from '../assets/pexels-vera-arsic-984949-fg.png?w=1280&webp'
import hands_bg from '../assets/pexels-valentin-antonucci-1378723-bg.png?w=1920&version=1&webp'
import hands_rh from '../assets/pexels-valentin-antonucci-1378723-rh.png?w=1280&webp'
import hands_lh from '../assets/pexels-valentin-antonucci-1378723-lh.png?w=1280&webp'
import { Ref, useRef } from 'react'

function Home() {
  // const [count, setCount] = useState(0)
  const ref = useRef<IParallax>() as Ref<IParallax>

  return (
    <Parallax pages={8} ref={ref} style={{
      height: 'calc(100vh - 50px)',
    }}>
      <ParallaxLayer offset={0} factor={2}
        style={{
          backgroundImage: `url(${happy_bg})`,
          backgroundSize: 'cover',
          filter: 'blur(10px)',
          width: '110vw',
          marginLeft: '-15px',
          marginTop: '-50px'
        }} />
      <ParallaxLayer offset={0.25} speed={0.25} style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
        <img src={happy_fg} alt="A woman joyfully rides on a man's back as they both smile and enjoy a lighthearted moment" style={{
          width: '100%',
          maxWidth: '1280px'
        }} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.75} className="section-title-left">
        <h1>PeacefulPartner</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={1} className="section-body">
        <p className="section-text">
          Welcome to <span className="text-emphasis">PeacefulPartner</span>, the conflict mediation app for <span className="text-emphasis">couples</span>! We're here to help
          you <span className="text-emphasis">build</span> a stronger, <span className="text-emphasis">more fulfilling</span> relationship with your partner.
          Did you know that unresolved conflict is one of the biggest factors
          in <span className="text-emphasis">relationship breakdowns</span>? Don't let it happen to you! Our app uses
          AI <span className="text-emphasis">technology</span> to detect emotions and guide <span className="text-emphasis">productive conversations,</span>
          that help you and your partner <span className="text-emphasis">resolve conflicts</span> in a healthy way.
        </p>
      </ParallaxLayer>
      <ParallaxLayer offset={2} factor={2}
        style={{
          backgroundImage: `url(${hug_bg})`,
          backgroundSize: 'cover',
          filter: 'blur(2px)',
          width: '110vw',
          marginLeft: '-15px',
        }} />
      <ParallaxLayer offset={2.25}>
        <ParallaxLayer offset={-1} speed={-0.25} horizontal
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <img src={hug_fg} alt="A happy man gently holds a smiling woman from behind as she faces him" style={{
            width: '100%',
            maxWidth: '1280px'
          }} />
        </ParallaxLayer>
      </ParallaxLayer>
      <ParallaxLayer offset={2.4} speed={-0.25} className="section-title-right">
        <h1>Benefits</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={3} className="section-body">
        <p className="section-text">
          With this app, you'll <span className="text-emphasis">gain</span> access to exercises that help you <span className="text-emphasis">identify</span>
          your own relationship needs, <span className="text-emphasis">improve</span> your listening skills, and <span className="text-emphasis">grow</span>
          as a better person. These exercises are designed to help you become
          more <span className="text-emphasis">self-aware</span>, empathetic, and <span className="text-emphasis">communicative</span>, all of which are essential
          for a <span className="text-emphasis">successful</span> relationship. By investing time and effort into your
          <span className="text-emphasis">relationship</span>, you'll reap the rewards of a <span className="text-emphasis">deeper</span> connection and <span className="text-emphasis">greater</span>
          intimacy.
        </p>
      </ParallaxLayer>
      <ParallaxLayer offset={4} factor={2}
        style={{
          backgroundImage: `url(${fight_bg})`,
          backgroundSize: 'cover',
          filter: 'blur(2px)',
          width: '110vw',
          marginLeft: '-15px',
        }} />
      <ParallaxLayer offset={4.5} speed={0.25}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <img src={fight_fg} alt="A couple sits on a bench in a seemingly tense moment, as the man holds his head and the woman appears lost in thought with her fingertips touching her forehead" style={{
          width: '100%',
          maxWidth: '1280px'
        }} />
      </ParallaxLayer>
      <ParallaxLayer offset={4.4} speed={-0.25} className="section-title-left">
        <h1>Resolve Conflicts</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={5} className="section-body">
        <p className="section-text">
          Did you know that couples who don't <span className="text-emphasis">resolve conflicts</span>
          are much more likely to experience relationship <span className="text-emphasis">dissatisfaction and divorce</span>?
          Studies show that unresolved conflict can have a <span className="text-emphasis">significant impact</span>
          on the longevity of a relationship, leading to feelings of <span className="text-emphasis">resentment, anger, and frustration</span>.
          Don't let that happen to you!
          Our app is here to help <span className="text-emphasis">you and your partner</span>
          communicate effectively, <span className="text-emphasis">resolve conflicts</span>,
          and build a stronger, more <span className="text-emphasis">fulfilling relationship</span>.
        </p>
      </ParallaxLayer>
      <ParallaxLayer offset={6} factor={2}
        style={{
          backgroundImage: `url(${hands_bg})`,
          backgroundSize: 'cover',
        }} />
      <ParallaxLayer offset={6} style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
        <ParallaxLayer factor={1.5} horizontal speed={-0.1} offset={-0.75} id="hands-lh">
          <img src={hands_lh} alt="The silhouette of an arm" style={{
            width: '70%',
            maxWidth: '1280px'
          }} />
        </ParallaxLayer>
        <ParallaxLayer factor={1.5} horizontal speed={0.25} offset={1.25} id="hands-rh">
          <img src={hands_rh} alt="The silhouette of an arm" style={{
            width: '70%',
            maxWidth: '1280px'
          }} />
        </ParallaxLayer>
      </ParallaxLayer>
      <ParallaxLayer offset={6.4} speed={-0.25} className="section-title-right">
        <h1>Start Now</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={7} className="section-body">
        <p className="section-text">
          Don't wait until it's <span className="text-emphasis">too late</span>.
          Start investing in your relationship <span className="text-emphasis">today</span>
          by downloading our <span className="text-emphasis">conflict mediation</span> app for couples.
          With our exercises, AI-powered chat feature, and guidance for
          <span className="text-emphasis">healthy communication</span>,
          you'll be on your way to a happier, more <span className="text-emphasis">satisfying relationship</span> in no time.
          Download now and start building a <span className="text-emphasis">stronger bond</span> with your partner.
        </p>
        {/* <div className="action-buttons"> */}
        {/*   <Button large={true} intent="primary" icon="rocket" text="Get Started" */}
        {/*     style={{ */}
        {/*       borderRadius: '100px', */}
        {/*     }} /> */}
        {/*   <Button large={true} intent="success" icon="log-in" text="Login" */}
        {/*     style={{ */}
        {/*       borderRadius: '100px', */}
        {/*     }} /> */}
        {/* </div> */}
      </ParallaxLayer>
    </Parallax>
  )
}

export default Home
