import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GameImage} from './Gameimage.jsx'
import { CharacterNames } from './components/CharacterNames.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameImage />
    <CharacterNames/>
    <App />
  </StrictMode>,
)
