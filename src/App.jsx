import AccessAlarm from '@mui/icons-material/AccessAlarm'
import HomeIcon from '@mui/icons-material/Home'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { pink } from '@mui/material/colors'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles'

import './App.css'

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {

  return (
    <>
      <ModeToggle />
      <div>lppduy</div>

      <Typography variant='body2' color='text.secondary'>FRONTEND PRACTICE</Typography>

      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>

      <br />

      <AccessAlarm />
      <ThreeDRotation />

      <HomeIcon />
      <HomeIcon color='primary' />
      <HomeIcon color='secondary' />
      <HomeIcon color='success' />
      <HomeIcon color='action' />
      <HomeIcon color='disabled' />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
