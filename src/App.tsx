import './App.css'
import { Desktop } from './views/desktop/Desktop'
import { OpenedFileContext } from './contexts/opened-file-context/OpenedFileContext'
import { useContext } from 'react'

function App() {

  const of_context = useContext(OpenedFileContext)

  if(of_context?.file_list) {
    return (
        <Desktop>
        </Desktop>
    )
  } else {
    return (
      <div>
        <h1>No data to display apparently</h1>
      </div>
    )
  }
}

export default App
