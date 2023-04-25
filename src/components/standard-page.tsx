import { Box, Stack, Typography } from '@mui/material'

interface ChildProps {
  img?: string;
  title: string;
  children?: React.ReactNode;
}

function StandardPage({ img, title, children }: ChildProps) {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        alignItems: 'center',
      }}
    >
      {/* use the img, if it is provided, otherwise just create a title without the Box */}
      {img && (
        <Box sx={{
          padding: '3rem',
          width: '100vw',
          maxWidth: '100%',
          height: '100vh',
          maxHeight: '100vw',
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
        }}>
          <Typography variant="h1">{title}</Typography>
        </Box>
      )}
      {!img && (
        <Typography variant="h1">{title}</Typography>
      )}
      <Box sx={{
        padding: '3rem',
        maxWidth: '960px',
        width: '100%',
      }}>
        {children}
      </Box>
    </Stack>
  )
}

export default StandardPage

