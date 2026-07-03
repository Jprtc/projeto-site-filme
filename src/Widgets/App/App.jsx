import { Header, LoginForm } from "../index";
import logo from "../../assets/netflixlogo.png";
import { STYLES } from "../../styles/globalStyles";
import "./App.css";

export default function App() {
  return (
    <div style={STYLES.background}>
      <img src={logo} alt="Netflix Logo" style={STYLES.logo} />
      <Header />
      <div style={STYLES.line}></div>
      <div style={STYLES.overlay}></div>
      
      <LoginForm />
    </div>
  );
}
