import { ImageList, ImageListItem, ImageListItemBar, Link, Typography, useMediaQuery, useTheme } from "@mui/material"
import shaanSrc from '../assets/pexels-the-shaan-photography-11582406.jpg?ar=3:2&w=430px&webp'
import valentinSrc from '../assets/pexels-valentin-antonucci-1378723.jpg?ar=3:2&w=430px&webp'
import veraSrc from '../assets/pexels-vera-arsic-984949.jpg?ar=3:2&w=430px&webp'
import sousaSrc from '../assets/suzana-sousa-IC1_YWQn6so-unsplash.jpg?ar=3:2&w=430px&webp'
import chatSrc from '../assets/couple-1807617.jpg?ar=3:2&w=430px&webp'
import chernayaSrc from '../assets/pexels-ksenia-chernaya-7301159.jpg?ar=3:2&w=430px&webp'
import shkrabaSrc from '../assets/pexels-antoni-shkraba-5475786.jpg?ar=3:2&w=430px&webp'
import abdelghaffarSrc from '../assets/pexels-mohamed-abdelghaffar-771742.jpg?ar=3:2&w=430px&webp'
import StandardPage from "../components/standard-page"

const itemData = [
  {
    src: sousaSrc,
    title: 'Love Smile',
    author: 'Suzana Sousa',
    photoLink: 'https://unsplash.com/photos/IC1_YWQn6so',
    authorLink: 'https://unsplash.com/@suferreira',
  },
  {
    src: shaanSrc,
    title: 'Smiling Couple Looking at Each Other',
    author: 'the Shaan photography',
    photoLink: 'https://www.pexels.com/photo/smiling-couple-looking-at-each-other-11582406/',
    authorLink: 'https://www.pexels.com/@shaan/',
  },
  {
    src: valentinSrc,
    title: 'Two Person Holding Pinkies',
    author: 'Valentin Antonucci',
    photoLink: 'https://www.pexels.com/photo/two-person-holding-pinkies-1378723/',
    authorLink: 'https://www.pexels.com/@valentinantonucci/',
  },
  {
    src: veraSrc,
    title: 'Woman And Man Sitting on Brown Wooden Bench',
    author: 'Vera Arsic',
    photoLink: 'https://www.pexels.com/photo/woman-and-man-sitting-on-brown-wooden-bench-984949/',
    authorLink: 'https://www.pexels.com/@vera-arsic-304265/',
  },
  {
    src: chatSrc,
    title: 'Couple Restaurant Dating Drink',
    author: 'sasint',
    photoLink: 'https://pixabay.com/photos/couple-restaurant-dating-drink-1807617/',
    authorLink: 'https://pixabay.com/users/sasint-3639875/',
  },
  {
    src: chernayaSrc,
    title: 'Close-up of Man Using Smartphone',
    author: 'Ksenia Chernaya',
    photoLink: 'https://www.pexels.com/photo/close-up-of-man-using-smartphone-7301159/',
    authorLink: 'https://www.pexels.com/@kseniachernaya/',
  },
  {
    src: shkrabaSrc,
    title: 'Man in Gray Hoodie Using Black Laptop Computer',
    author: 'Antoni Shkraba',
    photoLink: 'https://www.pexels.com/photo/man-in-gray-hoodie-using-black-laptop-computer-5475786/',
    authorLink: 'https://www.pexels.com/@shkrabaanthony/',
  },
  {
    src: abdelghaffarSrc,
    title: 'Man in Black Jacket',
    author: 'Mohamed Abdelgaffar',
    photoLink: 'https://www.pexels.com/photo/man-in-black-jacket-771742/',
    authorLink: 'https://www.pexels.com/@moh-adbelghaffar/',
  },
];

function CreditsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StandardPage title="Photo Credits">
      <Typography sx={{
        marginBottom: '1rem'
      }}>
        We believe that photography is a powerful medium that can inspire, inform,
        and entertain, and we are grateful for the talented photographers who have
        generously allowed us to use their work in our app. On this page, you'll
        find a collection of stunning photos accompanied by the names of the photographers
        who captured them, as well as the captions they provided for each image.
      </Typography>
      <Typography sx={{
        marginBottom: '1rem'
      }}>
        We've also included links to their websites and original image sources,
        so you can learn more about their work and support them directly. Thank
        you for taking the time to appreciate the artistry of these talented photographers!
      </Typography>
      <ImageList cols={isMobile ? 1 : 2}>
        {itemData.map((item) => (
          <ImageListItem key={item.src}>
            <Link
              href={item.photoLink}
              target="_blank"
              rel="noreferrer"
              sx={{
                textDecoration: 'none',
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                style={{
                  maxWidth: '100%',
                }}
              />
            </Link>
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: <Link
                href={item.authorLink}
                target="_blank"
                rel="noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: 'text.primary',
                }}
              >{item.author}</Link></span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </StandardPage>
  )
}

export default CreditsPage
