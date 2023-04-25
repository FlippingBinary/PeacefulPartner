import { Typography } from '@mui/material'
import chernayaSrc from '../assets/pexels-ksenia-chernaya-7301159.jpg?w=960px&webp'
import StandardPage from '../components/standard-page'

function GrowPage() {
  return (
    <StandardPage img={chernayaSrc} title="Individual Growth">
        <Typography>Come back soon to see our growth resources!</Typography>
    </StandardPage>
  )
}

export default GrowPage
