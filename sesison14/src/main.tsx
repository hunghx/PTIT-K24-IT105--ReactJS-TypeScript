import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Root from './Root.tsx'
import Form from './Form.tsx'
import Timer from './Timer.tsx'

createRoot(document.getElementById('root')!).render(
  <Timer/>
)
