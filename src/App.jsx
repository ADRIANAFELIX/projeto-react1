import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meu primeiro site"/>
      <Bio />
      <Cards />
      <Footer content="Feito por Adriana, com ajuda da Simara." />
    </div>
  )
}

export default App
