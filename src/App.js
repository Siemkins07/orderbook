
import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'

function App() {

  const url = 'https://api.bitbay.net/rest/trading/'
  const [min24h, setMin24h] = useState([])
  const [max24h, setmax24h] = useState([])

  useEffect(() => {
    const getStats = async () => {
      const response = await fetch(`${url}stats/BTC-PLN`)
      const json = await response.json()
      const {l, h } = json.stats
      setMin24h(l)
      setmax24h(h)
     }
     getStats()
 }, [])


  return (
    <div className="app">
      <Header />
      <Main min={min24h} max={max24h} url={url} />
      <Footer/>
    </div>
  );
}

export default App;
