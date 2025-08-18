import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { OpenedFileContextProvider } from './contexts/opened-file-context/OpenedFileContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OpenedFileContextProvider>
      <App />
    </OpenedFileContextProvider>
  </StrictMode>,
)
