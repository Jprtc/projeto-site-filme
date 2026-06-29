function TrailerModal({ url, onFechar }) {
  if (!url) return console.log("ERROR!"); 

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="fechar-btn" onClick={onFechar}>X</button>
        <iframe 
          src={url} 
          title="Trailer" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default TrailerModal;