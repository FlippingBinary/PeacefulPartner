import StandardPage from '../components/standard-page'
import abdelghaffarSrc from '../assets/pexels-mohamed-abdelghaffar-771742.jpg?w=960px&webp'

function ProfilePage() {
  return (
    <StandardPage img={abdelghaffarSrc} title="Profile">
      It is not currently possible to modify your profile.
    </StandardPage>
  )
}

export default ProfilePage
