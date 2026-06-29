import "./App.css";
import Footer from "./Widgets/Footer/Footer";
import Header from "./Widgets/Header/header";
import MainBanner from "./Widgets/MainBanner/MainBanner";
import PerguntasFrequentes from "./Widgets/PerguntasFrequentes/PerguntasFrequentes";
import FilmesEmAlta from "./Widgets/FilmesEmAlta/FilmesEmAlta";

function App() {
  return (
    <div className="app-container">
      <Header />
      <MainBanner />
      <FilmesEmAlta />
      <PerguntasFrequentes />
      <Footer />
    </div>
  );
}

export default App;
