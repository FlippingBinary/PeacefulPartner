import happy_bg from '../assets/suzana-sousa-IC1_YWQn6so-unsplash-bg.png?w=1920&webp'
import happy_fg from '../assets/suzana-sousa-IC1_YWQn6so-unsplash-fg.png?w=1280&webp'
import hug_bg from '../assets/pexels-the-shaan-photography-11582406-bg.png?w=1920&webp'
import hug_fg from '../assets/pexels-the-shaan-photography-11582406-fg.png?w=1280&webp'
import fight_bg from '../assets/pexels-vera-arsic-984949-bg.png?w=1920&version=1&webp'
import fight_fg from '../assets/pexels-vera-arsic-984949-fg.png?w=1280&webp'
import hands_bg from '../assets/pexels-valentin-antonucci-1378723-bg.png?w=1920&version=1&webp'
import hands_rh from '../assets/pexels-valentin-antonucci-1378723-rh.png?w=1280&webp'
import hands_lh from '../assets/pexels-valentin-antonucci-1378723-lh.png?w=1280&webp'
import { useState, useEffect, useRef } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import styles from './Home.module.css'

function HomePage() {
  const [happyVisibility, setHappyVisibility] = useState(0)
  const [hugVisibility, setHugVisibility] = useState(0)
  const [fightVisibility, setFightVisibility] = useState(0)
  const [handsVisibility, setHandsVisibility] = useState(0)
  const happyRef = useRef<HTMLDivElement>(null)
  const hugRef = useRef<HTMLDivElement>(null)
  const fightRef = useRef<HTMLDivElement>(null)
  const handsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHappyVisibility(Math.max(0, Math.min(1, (window.innerHeight + window.scrollY - (happyRef?.current?.offsetTop ?? 0)) / (happyRef?.current?.clientHeight ?? 500))))
    const handleScroll = () => {
      setHappyVisibility(oldHappyVisibility => {
        if (oldHappyVisibility < 1 && happyRef.current) {
          const newHappyVisibility = Math.max(0, Math.min(1, (window.innerHeight + window.scrollY - happyRef.current.offsetTop) / happyRef.current.clientHeight))
          return newHappyVisibility
        }
        return oldHappyVisibility
      })
      setHugVisibility(oldHugVisibility => {
        if (oldHugVisibility < 1 && hugRef.current) {
          const newHugVisibility = Math.max(0, Math.min(1, (window.innerHeight + window.scrollY - hugRef.current.offsetTop) / hugRef.current.clientHeight))
          return newHugVisibility
        }
        return oldHugVisibility
      })
      setFightVisibility(oldFightVisibility => {
        if (oldFightVisibility < 1 && fightRef.current) {
          const newFightVisibility = Math.max(0, Math.min(1, (window.innerHeight + window.scrollY - fightRef.current.offsetTop) / fightRef.current.clientHeight))
          return newFightVisibility
        }
        return oldFightVisibility
      })
      setHandsVisibility(oldHandsVisibility => {
        if (oldHandsVisibility < 1 && handsRef.current) {
          const newHandsVisibility = Math.max(0, Math.min(1, (window.innerHeight + window.scrollY - handsRef.current.offsetTop) / handsRef.current.clientHeight))
          return newHandsVisibility
        }
        return oldHandsVisibility
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <Stack>
      <Box ref={happyRef} sx={{
        backgroundImage: `url(${happy_bg})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: -2,
        height: '100vh',
        maxHeight: '100vw',
        position: 'relative',
      }}>
        <Typography variant="h1"
          sx={{
            fontFamily: "'Euphoria Script', cursive",
            fontSize: 'clamp(1rem, 10vw, 8rem)',
            padding: '5rem',
            transform: `translateY(${(1 - happyVisibility) * -130}%)`,
            position: 'absolute',
            bottom: '15%',
            left: '0%',
          }}
        >PeacefulPartner</Typography>
        <img src={happy_fg} alt="A woman joyfully rides on a man's back as they both smile and enjoy a lighthearted moment" style={{
          height: '75%',
          maxWidth: '1280px',
          maxHeight: '960px',
          transform: `translateY(${5 + (1 - happyVisibility) * 40}%)`,
          zIndex: -1,
          objectFit: 'contain',
        }} />
      </Box>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Old Standard TT', serif",
            fontSize: "min(3.5vw, 3vh)",
            lineHeight: "2",
            padding: "4rem",
            textAlign: "center",
            maxWidth: '960px',
          }}>
          Welcome to <span className={styles.emphasis}>PeacefulPartner</span>, the conflict mediation app for <span className={styles.emphasis}>couples</span>! We're here to help
          you <span className={styles.emphasis}>build</span> a stronger, <span className={styles.emphasis}>more fulfilling</span> relationship with your partner.
          Did you know that unresolved conflict is one of the biggest factors
          in <span className={styles.emphasis}>relationship breakdowns</span>? Don't let it happen to you! Our app uses
          AI <span className={styles.emphasis}>technology</span> to detect emotions and guide <span className={styles.emphasis}>productive conversations,</span>
          that help you and your partner <span className={styles.emphasis}>resolve conflicts</span> in a healthy way.
        </Typography>
      </Box>
      <Box ref={hugRef} sx={{
        backgroundImage: `url(${hug_bg})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: -2,
        height: '100vh',
        maxHeight: '100vw',
        position: 'relative',
      }}>
        <Typography variant="h1"
          sx={{
            fontFamily: "'Euphoria Script', cursive",
            fontSize: 'clamp(1rem, 10vw, 8rem)',
            padding: '5rem',
            transform: `translateY(${(1 - hugVisibility) * -200}%)`,
            position: 'absolute',
            bottom: '15%',
            left: '0%',
          }}
        >Benefits</Typography>
        <img src={hug_fg} alt="A happy man gently holds a smiling woman from behind as she faces him" style={{
          height: '75%',
          maxWidth: '1280px',
          maxHeight: '960px',
          transform: `translateX(${(1 - hugVisibility) * 40}%) translateY(5%)`,
          zIndex: -1,
          objectFit: 'contain',
        }} />
      </Box>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Old Standard TT', serif",
            fontSize: "min(3.5vw, 3vh)",
            lineHeight: "2",
            padding: "4rem",
            textAlign: "center",
            maxWidth: '960px',
          }}>
          With this app, you'll <span className={styles.emphasis}>gain</span> access to exercises that help you <span className={styles.emphasis}>identify</span>
          your own relationship needs, <span className={styles.emphasis}>improve</span> your listening skills, and <span className={styles.emphasis}>grow</span>
          as a better person. These exercises are designed to help you become
          more <span className={styles.emphasis}>self-aware</span>, empathetic, and <span className={styles.emphasis}>communicative</span>, all of which are essential
          for a <span className={styles.emphasis}>successful</span> relationship. By investing time and effort into your
          <span className={styles.emphasis}>relationship</span>, you'll reap the rewards of a <span className={styles.emphasis}>deeper</span> connection and <span className={styles.emphasis}>greater</span>
          intimacy.
        </Typography>
      </Box>
      <Box ref={fightRef} sx={{
        backgroundImage: `url(${fight_bg})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: -2,
        height: '100vh',
        maxHeight: '100vw',
        position: 'relative',
      }}>
        <Typography variant="h1"
          sx={{
            fontFamily: "'Euphoria Script', cursive",
            fontSize: 'clamp(1rem, 10vw, 8rem)',
            padding: '5rem',
            transform: `translateY(${(1 - fightVisibility) * -200}%)`,
            position: 'absolute',
            bottom: '15%',
            left: '0%',
          }}
        >Resolve Conflicts</Typography>
        <img src={fight_fg} alt="A couple sits on a bench in a seemingly tense moment, as the man holds his head and the woman appears lost in thought with her fingertips touching her forehead" style={{
          height: '75%',
          maxWidth: '1280px',
          maxHeight: '960px',
          transform: `translateY(${(1 - fightVisibility) * 60}%)`,
          zIndex: -1,
          objectFit: 'contain',
        }} />
      </Box>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Old Standard TT', serif",
            fontSize: "min(3.5vw, 3vh)",
            lineHeight: "2",
            padding: "4rem",
            textAlign: "center",
            maxWidth: '960px',
          }}>
          Did you know that couples who don't <span className={styles.emphasis}>resolve conflicts</span>
          are much more likely to experience relationship <span className={styles.emphasis}>dissatisfaction and divorce</span>?
          Studies show that unresolved conflict can have a <span className={styles.emphasis}>significant impact</span>
          on the longevity of a relationship, leading to feelings of <span className={styles.emphasis}>resentment, anger, and frustration</span>.
          Don't let that happen to you!
          Our app is here to help <span className={styles.emphasis}>you and your partner</span>
          communicate effectively, <span className={styles.emphasis}>resolve conflicts</span>,
          and build a stronger, more <span className={styles.emphasis}>fulfilling relationship</span>.
        </Typography>
      </Box>
      <Box ref={handsRef} sx={{
        backgroundImage: `url(${hands_bg})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        zIndex: -2,
        height: '100vh',
        maxHeight: '100vw',
        position: 'relative',
      }}>
        <Typography variant="h1"
          sx={{
            fontFamily: "'Euphoria Script', cursive",
            fontSize: 'clamp(1rem, 10vw, 8rem)',
            padding: '1rem',
            transform: `translateY(${(1 - handsVisibility) * -300}%)`,
            position: 'absolute',
            bottom: '15%',
            width: '100%',
            textAlign: 'right',
            paddingRight: '15%',
          }}
        >Start Now</Typography>
        <img src={hands_lh} alt="The silhouette of an arm" style={{
          maxWidth: '1280px',
          maxHeight: '100%',
          transform: `translateX(${-(1 - Math.max(0.25, handsVisibility)) * 20}%)`,
          zIndex: -1,
          position: 'absolute',
          top: '0',
          left: '0',
          objectFit: 'contain',
        }} />
        <img src={hands_rh} alt="The silhouette of an arm" style={{
          maxWidth: '1280px',
          maxHeight: '100%',
          transform: `translateX(${(1 - Math.max(0.25, handsVisibility)) * 40}%)`,
          zIndex: -1,
          position: 'absolute',
          top: '0',
          left: '0',
          objectFit: 'contain',
        }} />
      </Box>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Old Standard TT', serif",
            fontSize: "min(3.5vw, 3vh)",
            lineHeight: "2",
            padding: "4rem",
            textAlign: "center",
            maxWidth: '960px',
          }}>
          Don't wait until it's <span className={styles.emphasis}>too late</span>.
          Start investing in your relationship <span className={styles.emphasis}>today</span>
          by downloading our <span className={styles.emphasis}>conflict mediation</span> app for couples.
          With our exercises, AI-powered chat feature, and guidance for
          <span className={styles.emphasis}>healthy communication</span>,
          you'll be on your way to a happier, more <span className={styles.emphasis}>satisfying relationship</span> in no time.
          Download now and start building a <span className={styles.emphasis}>stronger bond</span> with your partner.
        </Typography>
      </Box>
    </Stack>
  )
}

export default HomePage
