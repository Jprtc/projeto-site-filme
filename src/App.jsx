import { useState } from 'react'
import './App.css'
import Header from './Widgets/Header/header'
import MainBanner from './Widgets/MainBanner/MainBanner'
import CardOferta from './Widgets/CardOferta/CardOferta'
import Footer from './Widgets/Footer/Footer'

function App() {
  const [idioma, setIdioma] = useState('pt');

  const textosHeaderPorIdioma = {
    pt: { botaoEntrar: 'Entrar' },
    en: { botaoEntrar: 'Sign In' },
    es: { botaoEntrar: 'Iniciar sesión' },
    fr: { botaoEntrar: 'Se connecter' },
    de: { botaoEntrar: 'Anmelden' },
    it: { botaoEntrar: 'Accedi' },
    ja: { botaoEntrar: 'ログイン' },
    ko: { botaoEntrar: '로그인' }
  };

  const textosHeader = textosHeaderPorIdioma[idioma] || textosHeaderPorIdioma.pt;

  return (
    <>
      <Header 
        idioma={idioma} 
        setIdioma={setIdioma} 
        textosHeader={textosHeader} 
      />
      <MainBanner idioma={idioma} />
      <CardOferta idioma={idioma} />
      <Footer/>
    </>
  )
}

export default App