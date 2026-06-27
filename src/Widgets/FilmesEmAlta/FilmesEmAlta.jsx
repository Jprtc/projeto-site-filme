import { useRef, useState } from 'react';
import './FilmesEmAlta.css';
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

  const textos = {
    pt: { titulo: 'Em alta' },
    en: { titulo: 'Trending Now' },
    es: { titulo: 'Tendencias' },
    fr: { titulo: 'Tendances' },
    de: { titulo: 'Aktuell im Trend' },
    it: { titulo: 'Tendenze' },
    ja: { titulo: ' ' },
    ko: { titulo: ' ' }
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

  const scrollLeft = () => carrosselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  const scrollRight = () => carrosselRef.current.scrollBy({ left: 400, behavior: 'smooth' });

  return (
    <div className="filmes-em-alta-container">
      <h2 className="titulo-secao">{t.titulo}</h2>
      
      <div className="carrossel-wrapper">
        <button className="carrossel-btn left" onClick={scrollLeft}>&#10094;</button>

        <div className="lista-filmes" ref={carrosselRef}>
          {listaFilmes.map((filme) => (
            <div key={filme.id} className="card-filme" onClick={() => setTrailerAtual(filme.trailer)}>
              <img src={filme.img} alt={`Filme ${filme.id}`} />
              <span className="numero-grande">{filme.id}</span>
            </div>
          ))}
        </div>

        <button className="carrossel-btn right" onClick={scrollRight}>&#10095;</button>
      </div>

      {trailerAtual && (
        <div className="modal-overlay" onClick={() => setTrailerAtual(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="fechar-btn" onClick={() => setTrailerAtual(null)}>X</button>
            <iframe 
              src={trailerAtual} 
              title="Trailer"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilmesEmAlta;