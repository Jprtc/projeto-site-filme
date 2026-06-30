import { useRef, useState, useEffect } from 'react';
import './FilmesEmAlta.css';
import FilmeCard from '../../Components/FilmeCard/FilmeCard.jsx';
import TrailerModal from '../../Components/TrailerModal/TrailerModal.jsx';
import imgOne from '../../assets/One.jpg';
import imgMagica from '../../assets/Como Magica.jpg';
import imgLei from '../../assets/Lei Ordem.jpg';
import imgLaCasa from '../../assets/La Casa.jpg';
import imgPredador from '../../assets/Jogo Predador.jpg';
import imgMentalista from "../../assets/Mentalista.jpg";
import imgTodoMundoOdeiaChris from "../../assets/Chris.jpg";
import imgRosarioTijeras from "../../assets/RosarioTijeras.jpg";
import imgMaquinaDeGuerra from "../../assets/MaquinaDeGuerra.jpg";
import imgVampire from "../../assets/Vampiro.jpg";

function FilmesEmAlta({ idioma }) {
  const carrosselRef = useRef(null);
  const [trailerAtual, setTrailerAtual] = useState(null);
  
  // Estados para controlar a visibilidade dos botões
  const [mostrarEsquerda, setMostrarEsquerda] = useState(false);
  const [mostrarDireita, setMostrarDireita] = useState(true);

  const textos = {
    pt: { titulo: 'Em alta' },
    en: { titulo: 'Trending Now' },
    es: { titulo: 'Tendencias' },
    fr: { titulo: 'Tendances' },
    de: { titulo: 'Aktuell im Trend' },
    it: { titulo: 'Tendenze' },
    ja: { titulo: ' ' },
    ko: { titulo: ' '}
  };
  
  const t = textos[idioma] || textos['pt'];

  const listaFilmes = [
    { id: 1, img: imgOne, trailer: 'https://www.youtube.com/embed/2QjJMT554Bc' },
    { id: 2, img: imgMagica, trailer: 'https://www.youtube.com/embed/_juCljJ4rzU' },
    { id: 3, img: imgLei, trailer: 'https://www.youtube.com/embed/SRCD6PKwXOQ' },
    { id: 4, img: imgLaCasa, trailer: 'https://www.youtube.com/embed/ANMZvvO-SCk' },
    { id: 5, img: imgPredador, trailer: 'https://www.youtube.com/embed/MX5j-vQjvzk' },
    { id: 6, img: imgMentalista, trailer: 'https://www.youtube.com/embed/_yElO0awlZg?start=4'},
    { id: 7, img: imgTodoMundoOdeiaChris, trailer: 'https://www.youtube.com/embed/mPcVwolQFWA' },
    { id: 8, img: imgRosarioTijeras, trailer: 'https://www.youtube.com/embed/FuERl8skhm0' },
    { id: 9, img: imgMaquinaDeGuerra, trailer: 'https://www.youtube.com/embed/mBenb7O8Hnc' },
    { id: 10, img: imgVampire, trailer: 'https://www.youtube.com/embed/GLjxcX9oMlY' },
  ];

 
  const handleScroll = () => {
    if (carrosselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carrosselRef.current;
      
      setMostrarEsquerda(scrollLeft > 0);
      setMostrarDireita(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  
  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scrollLeft = () => carrosselRef.current.scrollBy({ left: -800, behavior: 'smooth' });
  const scrollRight = () => carrosselRef.current.scrollBy({ left: 800, behavior: 'smooth' });

  return (
    <div className="filmes-em-alta-container">
      <h2 className="titulo-secao">{t.titulo}</h2>
      
      <div className="carrossel-wrapper">
        {mostrarEsquerda && (
          <button className="carrossel-btn left" onClick={scrollLeft}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}
        
        <div 
          className="lista-filmes" 
          ref={carrosselRef} 
          onScroll={handleScroll}
        >
          {listaFilmes.map((filme) => (
            <FilmeCard 
              key={filme.id} 
              filme={filme} 
              onAbrirTrailer={setTrailerAtual} 
            />
          ))}
        </div>
        
        {mostrarDireita && (
          <button className="carrossel-btn right" onClick={scrollRight}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
      </div>

      <TrailerModal 
        url={trailerAtual} 
        onFechar={() => setTrailerAtual(null)} 
      />
    </div>
  );
}

export default FilmesEmAlta;