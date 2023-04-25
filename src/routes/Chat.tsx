import { useEffect, useRef, useState } from 'react'
import { useExternalScript } from '../ai-sdk/externalScriptsLoader'
import { getAiSdkControls } from '../ai-sdk/loader';
import EmotionBarsComponent from '../components/emotion-bars'
import couple from '../assets/couple-1807617.jpg?w=1280&webp'
import { Typography } from '@mui/material';
import StandardPage from '../components/standard-page';

interface ValueWithTimestamp {
  value: number;
  timestamp: number;
}

function ChatPage() {
  const mphToolsState = useExternalScript("https://sdk.morphcast.com/mphtools/v1.0/mphtools.js");
  const aiSdkState = useExternalScript("https://ai-sdk.morphcast.com/v1.16/ai-sdk.js");
  const [angry, setAngry] = useState<number>(0);
  const [disgust, setDisgust] = useState<number>(0);
  const [fear, setFear] = useState<number>(0);
  const [happy, setHappy] = useState<number>(0);
  const [sad, setSad] = useState<number>(0);
  const [surprise, setSurprise] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  const [_angryHistory, setAngryHistory] = useState<ValueWithTimestamp[]>([]);
  const [_disgustHistory, setDisgustHistory] = useState<ValueWithTimestamp[]>([]);
  const [_fearHistory, setFearHistory] = useState<ValueWithTimestamp[]>([]);
  const [_happyHistory, setHappyHistory] = useState<ValueWithTimestamp[]>([]);
  const [_sadHistory, setSadHistory] = useState<ValueWithTimestamp[]>([]);
  const [_surpriseHistory, setSurpriseHistory] = useState<ValueWithTimestamp[]>([]);
  const [_neutralHistory, setNeutralHistory] = useState<ValueWithTimestamp[]>([]);
  const [mood, setMood] = useState('neutral');

  const timeout = useRef<number | null>(null);
  useEffect(() => {
    function resetTimeout() {
      let to = timeout.current;
      clearTimeout(to ?? 0);
      to = setTimeout(() => {
        setAngryHistory([]);
        setDisgustHistory([]);
        setFearHistory([]);
        setHappyHistory([]);
        setSadHistory([]);
        setSurpriseHistory([]);
        setNeutralHistory([]);
      }, 10000)

      timeout.current = to;
    }

    function bindEvent() {
      window.addEventListener("CY_FACE_EMOTION_RESULT", handleAgeEvent);
    }

    function handleAgeEvent(evt: any) {
      resetTimeout();
      const angry = evt.detail.output.emotion.Angry * 100;
      const disgust = evt.detail.output.emotion.Disgust * 100;
      const fear = evt.detail.output.emotion.Fear * 100;
      const happy = evt.detail.output.emotion.Happy * 100;
      const sad = evt.detail.output.emotion.Sad * 100;
      const surprise = evt.detail.output.emotion.Surprise * 100;
      const neutral = evt.detail.output.emotion.Neutral * 100;
      const max = Math.max(angry, disgust, fear, happy, sad, surprise, neutral);
      if (max === angry) {
        setMood('angry');
      } else if (max === disgust) {
        setMood('disgust');
      } else if (max === fear) {
        setMood('fear');
      } else if (max === happy) {
        setMood('happy');
      } else if (max === sad) {
        setMood('sad');
      } else if (max === surprise) {
        setMood('surprise');
      } else {
        setMood('neutral');
      }
      const now = Date.now();
      setAngryHistory((prevValues) => {
        const newValues = [...prevValues, {value: angry, timestamp: now}];
        setAngry(newValues.reduce((acc, { value }) => acc + value, 0) / newValues.length);
        return newValues.filter(({ timestamp }) => now - timestamp <= 5000 );
      });
      setDisgustHistory((prevValues) => {
        const newValues = [...prevValues, {value: disgust, timestamp: now}];
        setDisgust(newValues.reduce((acc, { value }) => acc + value, 0) / newValues.length);
        return newValues.filter(({ timestamp }) => now - timestamp <= 5000 );
      });
      setFearHistory((prevValues) => {
        const newValues = [...prevValues, {value: fear, timestamp: now}];
        setFear(newValues.reduce((acc, { value }) => acc + value, 0) / newValues.length);
        return newValues.filter(({ timestamp }) => now - timestamp <= 5000);
      });
      setHappyHistory((prevValues) => {
        const newValues = [...prevValues, {value: happy, timestamp: now}];
        setHappy(newValues.reduce((acc, { value }) => acc + value, 0) / newValues.length);
        return newValues.filter(({ timestamp }) => now - timestamp <= 5000);
      });
      setSadHistory((prevValues) => {
        const newValues = [...prevValues, {value: sad, timestamp: now}];
        setSad(newValues.reduce((acc, { value }) => acc + value, 0) / newValues.length);
        return newValues.filter(({ timestamp }) => now - timestamp <= 5000);
      });
      setSurpriseHistory((prevValues) => {
        const newValues = [...prevValues, {value: surprise, timestamp: now}];
        setSurprise(newValues.reduce((acc, { value }) => acc + value, 0) / newValues.length);
        return newValues.filter(({ timestamp }) => now - timestamp <= 5000);
      });
      setNeutralHistory((prevValues) => {
        const newValues = [...prevValues, {value: neutral, timestamp: now}];
        setNeutral(newValues.reduce((acc, { value }) => acc + value, 0) / newValues.length);
        return newValues.filter(({ timestamp }) => now - timestamp <= 5000);
      });
    }
    bindEvent();
  }, []);

  useEffect(() => {
    async function getAiSdk() {
      if (aiSdkState === "ready" && mphToolsState === "ready") {
        const { source, start } = await getAiSdkControls();
        await source.useCamera();
        await start();
      }
    }
    getAiSdk();
  }, [aiSdkState, mphToolsState]);

  return (
    <StandardPage img={couple} title="Couple's Chat">
      <Typography component='ol'
        sx={{
          marginBottom: "10px",
        }}
      >
        <Typography component='li'>Start a mediation session with your partner using the app's mediation feature.</Typography>
        <Typography component='li'>During the session, pay attention to the emotions that you and your partner are expressing.</Typography>
        <Typography component='li'>As the app detects your emotions, it will provide a recommendation prompt to guide the conversation in a constructive and productive direction.</Typography>
        <Typography component='li'>Take the time to listen to your partner's concerns and feelings, and respond with empathy and understanding.</Typography>
        <Typography component='li'>Use the app's recommendation prompts to address specific issues and build stronger, more fulfilling relationships.</Typography>
        <Typography component='li'>Keep an open mind and work together to find solutions that work for both of you.</Typography>
        <Typography component='li'>Repeat the mediation sessions regularly to maintain open communication and address any new issues that arise.</Typography>
      </Typography>
      <Typography
        sx={{
          marginBottom: "10px",
        }}
      >By using the app feature to detect emotions during a mediation session, couples can communicate more effectively, understand each other better, and build stronger relationships.</Typography>
      <EmotionBarsComponent angry={angry} disgust={disgust} fear={fear} happy={happy} sad={sad} surprise={surprise} neutral={neutral} />
      {mood === 'angry' && <Typography>
        It seems like you're feeling angry right now. It's important to remember that anger is a natural emotion, but it's important to express it in a healthy way. Take a moment to breathe deeply and calm down before continuing the conversation. When you're ready, try to focus on the specific issue that's causing your anger, and express your feelings in a constructive way. Remember to use 'I' statements instead of 'you' statements, and try to avoid blaming or attacking your partner. Let's work together to find a resolution that works for both of you.
      </Typography>}
      {mood === 'disgust' && <Typography>
        It looks like you're feeling disgusted right now. Disgust can be a powerful emotion, but it's important to approach the situation with an open mind. Let's take a step back and try to understand why you're feeling this way. Is there a specific behavior or action that's causing your disgust? Try to communicate this in a calm and respectful way, and avoid using judgmental language. Remember, it's okay to disagree and have different opinions, but it's important to listen to each other and find common ground. Let's work together to find a resolution that respects both of your values and beliefs.
      </Typography>}
      {mood === 'fear' && <Typography>
        It seems like you're feeling afraid right now. Fear is a normal and natural emotion, but it's important to address it in a constructive way. Let's take a moment to breathe deeply and calm down before continuing the conversation. When you're ready, try to express your fears in a clear and specific way. It's important to listen to each other and validate each other's feelings. Remember, you're on the same team, and you're here to support each other. Let's work together to find a solution that addresses your fears and concerns, and creates a sense of safety and security for both of you.
      </Typography>}
      {mood === 'happy' && <Typography>
        It looks like you're feeling happy right now. That's great! Let's use this positive energy to strengthen your relationship. Take a moment to express your gratitude and appreciation for your partner. What are some things that they do that make you happy? How can you show them that you appreciate them? Remember, it's important to celebrate the small victories and moments of joy in your relationship. Let's work together to build a strong and happy relationship that brings joy to both of you.
      </Typography>}
      {mood === 'sad' && <Typography>
        I can see that you're feeling sad right now. It's okay to feel this way, and it's important to take the time to address your feelings. Let's take a moment to breathe deeply and calm down before continuing the conversation. When you're ready, try to express your feelings in a clear and specific way. It's important to listen to each other and validate each other's feelings. Remember, you're here to support each other through the ups and downs of life. Let's work together to find a way to address the underlying issue and create a sense of comfort and support for both of you.
      </Typography>}
      {mood === 'surprise' && <Typography>
        It looks like you're feeling surprised right now. Surprise can be a powerful emotion, but it's important to approach it with an open mind. Let's take a moment to clarify what's causing the surprise and why it's happening. It's important to communicate openly and honestly with each other, and to listen to each other's perspectives. Remember, it's okay to have different opinions and experiences, but it's important to work together to find common ground. Let's use this surprise as an opportunity to learn more about each other and to strengthen your relationship.
      </Typography>}
      {mood === 'neutral' && <Typography>
        It seems like you're feeling neutral right now. While it's important to acknowledge and validate all of your emotions, it's also okay to not feel strongly about something. However, it's important to keep the lines of communication open in your relationship, even when you're feeling neutral. Take this opportunity to ask your partner how they're feeling and to listen to their thoughts and concerns. Even when you're not experiencing strong emotions, it's important to maintain a sense of closeness and connection in your relationship. Let's work together to keep the lines of communication open and to strengthen your relationship, even when you're feeling neutral.
      </Typography>}
    </StandardPage>
  )
}

export default ChatPage
