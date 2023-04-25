import { Box, Stack, Typography } from "@mui/material"
import shkrabaSrc from '../assets/pexels-antoni-shkraba-5475786.jpg?w=960px&webp'

function PolicyPage() {
  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{
        maxWidth: '960px',
        margin: '0 auto',
      }}
    >
      <Box sx={{
        padding: '3rem',
        height: '100vh',
        maxHeight: '100vw',
        backgroundImage: `url(${shkrabaSrc})`,
        backgroundSize: 'cover',
      }}>
        <Typography variant="h1" >
          Privacy Policy
        </Typography>
      </Box>
      <Box>
        <Typography>
          At our website, we take your privacy seriously. We want you to feel safe
          and secure while browsing our pages. Therefore, we want to assure you
          that we do not collect any personal data or information, except for the
          standard usage logs that are collected by our web host. These logs are
          used solely for analyzing website traffic and improving our website's
          performance. We do not share or sell any of this information to third
          parties. If you have any concerns or questions about our privacy policy,
          please feel free to contact us.
        </Typography>
      </Box>
    </Stack>
  )
}

export default PolicyPage
