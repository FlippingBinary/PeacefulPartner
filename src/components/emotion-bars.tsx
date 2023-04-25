import { Box, CircularProgress, CircularProgressProps, Stack, circularProgressClasses } from "@mui/material";

// Define an interface for the props like angry and disgust that this component will accept
interface EmotionBarsProps {
  angry: number;
  disgust: number;
  fear: number;
  happy: number;
  sad: number;
  surprise: number;
  neutral: number;
}

const EmotionBarsComponent = ({angry, disgust, fear, happy, sad, surprise, neutral}: EmotionBarsProps) => {
  function FacebookCircularProgress(props: CircularProgressProps) {
    return (
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          }}
          size={40}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant="determinate"
          disableShrink
          sx={{
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={40}
          thickness={4}
          {...props}
        />
      </Box>
    );
  }

  return (
    <Stack direction="row" justifyContent="space-between">
      <FacebookCircularProgress variant="determinate" value={angry} color="error" />
      <FacebookCircularProgress variant="determinate" value={disgust} color="success" />
      <FacebookCircularProgress variant="determinate" value={fear} color="secondary" />
      <FacebookCircularProgress variant="determinate" value={happy} color="warning" />
      <FacebookCircularProgress variant="determinate" value={sad} color="info" />
      <FacebookCircularProgress variant="determinate" value={surprise} color="primary" />
      <FacebookCircularProgress variant="determinate" value={neutral} color="inherit" />
    </Stack>
  );
};

export default EmotionBarsComponent;

