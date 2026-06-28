import styles from "./Cards.module.css";
import tv from "./Icons/tv.svg";
import downloadseta from "./Icons/downloadseta.svg";
import telescopio from "./Icons/telescopio.svg";
import carinha from "./Icons/carinha-sorrindo.svg";

const motivos = [
  {
    titulo: "Aproveite na TV",
    descricao: "Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
    icone: tv
  },
  {
    titulo: "Baixe séries para assistir offline",
    descricao: "Salve seus títulos favoritos e sempre tenha algo para assistir.",
    icone: downloadseta
    
  },
  {
    titulo: "Assista onde quiser",
    descricao: "Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.",
    icone: telescopio
    
  },
  {
    titulo: "Crie perfis para crianças",
    descricao: "Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.",
    icone: carinha
  },
];

function Cards() {
  return (
  <section className={styles.motivos}>
  <h2>Mais motivos para assinar</h2>

  <div className={styles.cards}>
    {motivos.map((item, index) => (
      <div className={styles.card} key={index}>
        <h3>{item.titulo}</h3>
        <p>{item.descricao}</p>
        <img src={item.icone} alt={item.titulo} className={
          item.titulo === "Assista onde quiser"
      ? `${styles.icone} ${styles.telescopio}`
      : styles.icone
  } />
      </div>
    ))}
  </div>
</section>
  );
}

export default Cards;