import './App.css'
import { DarkLightModeProvider } from './components/DarkLightMode/DarkLightMode'
import DisplayBody from './components/Display/DisplayBody'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
        <DarkLightModeProvider>
          <DisplayBody />
        </DarkLightModeProvider>
    </div>
  )
}

export default App
