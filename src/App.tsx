import './App.css'
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/navigation-bar'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PageFooter from './components/page-footer'

interface AppProps {
  outlet?: JSX.Element
}

// This typescript function accepts a React component as a parameter
function App({ outlet }: AppProps) {
  const [darkMode, setDarkMode] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  const darkTheme = createTheme({
    typography: {
      h1: {
        fontFamily: "'Euphoria Script', cursive",
      },
      h2: {
        fontFamily: "'Euphoria Script', cursive",
      },
      h3: {
        fontFamily: "'Euphoria Script', cursive",
      },
      h4: {
        fontFamily: "'Euphoria Script', cursive",
      },
      h5: {
        fontFamily: "'Euphoria Script', cursive",
      },
      h6: {
        fontFamily: "'Euphoria Script', cursive",
      },
      body1: {
        fontFamily: "'Old Standard TT', serif",
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode
        ? {}
        : {
          primary: {
            main: '#ffb380',
          },
          secondary: {
            main: '#3ea6ff',
          },
        }),
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: 'calc( 100vh - 10rem )' }}>
        <NavigationBar onToggleDarkMode={handleToggleDarkMode} />
        {outlet ? outlet : <Outlet />}
      </Box>
      <PageFooter />
    </ThemeProvider>
  )
}

export default App
