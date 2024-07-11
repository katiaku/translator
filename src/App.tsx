import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore';

function App() {

  const { fromLanguage, setFromLanguage } = useStore();
  return (
    <div className='App'>
      <h1>Translator</h1>
      <button onClick={() => {
        setFromLanguage("es")
      }}>Change To Spanish</button>
      {fromLanguage}
    </div>
  )
}

export default App
