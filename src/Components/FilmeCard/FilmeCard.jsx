function FilmeCard({ filme, onAbrirTrailer }) {
  return (
    <div 
      className="card-filme" 
      onClick={() => onAbrirTrailer(filme.trailer)}
    >
      <img src={filme.img} alt={`Filme ${filme.id}`} />
      <span className="numero-grande">{filme.id}</span>
    </div>
  );
}

export default FilmeCard;