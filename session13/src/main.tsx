import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TodoApp from './component/demo/TodoApp.tsx'

createRoot(document.getElementById('root')!).render(
    // <App />
    <TodoApp/>
)
