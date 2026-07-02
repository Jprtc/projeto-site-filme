import { useState } from "react";
import "./App.css";
import Header from "./Widgets/Header/Header";
import logo from "./assets/netflixlogo.png";

export default function App() {
  const [openHelp, setOpenHelp] = useState(false);
  const [language, setLanguage] = useState("pt"); 
  const texts = {
  pt: {
    title: "Informe seus dados para entrar",
    subtitle: "Ou crie uma conta.",
    button: "Continuar",
    help: "Ajuda",
    phone: "Dúvidas? Ligue para 0800 591 8943 (ligação grátis)",
    help1: "Esqueceu o email ou número de celular?",
    help2: "Saiba mais sobre como entrar",

    placeholder: "Email ou número de telefone",

    faq: "Perguntas frequentes",
    cookies: "Preferências de cookies",
    center: "Central de Ajuda",
    company: "Informações corporativas",
    terms: "Termos de Uso",
    privacy: "Privacidade",

    recaptcha:
      "Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.",
  },

  en: {
    title: "Enter your details to sign in",
    subtitle: "Or create an account.",
    button: "Continue",
    help: "Help",
    phone: "Questions? Call 0800 591 8943 (free call)",
    help1: "Forgot email or phone number?",
    help2: "Learn more about signing in",

    placeholder: "Email or phone number",

    faq: "FAQ",
    cookies: "Cookie Preferences",
    center: "Help Center",
    company: "Corporate Information",
    terms: "Terms of Use",
    privacy: "Privacy",

    recaptcha:
      "This page is protected by Google reCAPTCHA to make sure you're not a robot.",
  },
};
  
  return (
  
    <div style={styles.background}>
      <Header />
     <div style={styles.line}></div>
      <div style={styles.overlay}></div>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>{texts[language].title}</h1>
        <div style={styles.subtitle}>
          {texts[language].subtitle}
        </div>

        <input
  style={styles.input}
  placeholder={texts[language].placeholder}
/>

        <button style={styles.button}>{texts[language].button}</button>

        <div style={styles.helpContainer}>
  <a
    href="#"
    style={styles.help}
    onClick={(e) => {
      e.preventDefault();
      setOpenHelp(!openHelp);
    }}
  >
        {texts[language].help} ▼
            </a>

  <div style={styles.helpList}>
    {openHelp && (
      <>
        <div style={styles.item}>{texts[language].help1}</div>
        <div style={styles.item}>{texts[language].help2}</div>  
      </>
    )}
<div style={styles.recaptcha}>
  {texts[language].recaptcha}
</div>
</div>
  </div>
</div>
<div style={styles.footerSpace}></div>
    <footer style={styles.footer}>
     <p style={styles.phone}>
  {texts[language].phone}
      </p>

      <div style={styles.links}>
        <div style={styles.column}>
          <a href="#" style={styles.link}>{texts[language].faq}</a>
          <a href="#" style={styles.link}>{texts[language].cookies}</a>
        </div>

        <div style={styles.column}>
          <a href="#" style={styles.link}>{texts[language].center}</a>
          <a href="#" style={styles.link}>{texts[language].company}</a>
        </div>

        <div style={styles.column}>
          <a href="#" style={styles.link}>{texts[language].terms}</a>
        </div>

        <div style={styles.column}>
          <a href="#" style={styles.link}>{texts[language].privacy}</a>
        </div>
      </div>

    <select
  style={styles.select}
  value={language}
onChange={(e) => setLanguage(e.target.value)}
>
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
    </footer>
      </div>
  );
}
const styles = {
  background: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    fontFamily: "Arial",
    color: "white",
    background:
      "linear-gradient(to bottom, rgba(90, 15, 19, 0.85) 0%, rgba(14, 2, 4, 0.9) 80%, #000 100%)",
  },

line: {
  position: "absolute",
  top: 70,
  left: 0,
  width: "100%",
  height: "1px",
  backgroundColor: " rgba(255,255,255,0.2)",
  zIndex: 9999,
  lineHeight: "50px",
},
  overlay: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))",
  },
 loginBox: {
 position: "relative",
 zIndex: 999,
 width: 400,
 margin: "0 auto",
 padding: 60,
 borderRadius: 6,
  },
  helpContainer: {
  position: "relative",
  display: "inline-block",
},

help: {
  fontSize: 15,
   fontWeight: "bold",
  color: "#b3b3b3",
  textDecoration: "none",
  cursor: "pointer",
  
},

dropdown: {
  position: "absolute",
  top: "20px",
  right: 0,
  background: "#141414",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "4px",
  padding: "10px",
  minWidth: "180px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  zIndex: 999,
},
item: {
  fontSize: "13px",
  color: "#b3b3b3",
  cursor: "pointer",
},

  subtitle: {
  textAlign: "left",
  fontSize: "19px",
  fontWeight: "normal",
  marginBottom: 30,
  color:"#B3B3B3",
},
input: {
  width: "100%",
  padding: "20px",
  marginBottom: "18px",
  borderRadius: "4px",
  background: "#111010",
  border: "1px solid rgba(250, 248, 248, 0.99)",
  color: "#B3B3B3",
  boxSizing: "border-box",
  fontWeight: "bold",
  fontSize: "16px",
},

button: {
  width: "100%",
  padding: "20px",
  marginBottom: "18px",
  borderRadius: "4px",
  background: "#e50914",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
  color: "white",
  boxSizing: "border-box",
  fontSize: "17px",
},
  options: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14,
    marginTop: 10,
    color: "#b3b3b3",
  },

  signup: {
    marginTop: 20,
    fontSize: 14,
    color: "#b3b3b3",
  },
  title:{
   fontWeight: "bold",
   fontFamily: "Arial, sansserif",
   fontWeight:"bold",
  
  },
  recaptcha: {
  fontFamily: "Arial, sans-serif",
  fontSize: "12px",
  color: "#b3b3b3",
  marginTop: "30px",
},
logo:{                    
  position: "absolute", 
  top: 20,
  left:50,
  width: "150px",       
  height: "auto",
  zIndex: 10,
},
footerSpace:{
  height: "300px",
},
footer: {
  backgroundColor: "#474646",
  padding: "40px",
  width: "100%",
   boxSizing: "border-box",
  overflowWrap: "break-word",
},
 phone:{
    color: "#ffffff",
    marginBottom: "30px",
  },

  links: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
    marginBottom: "30px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textDecoration: "underline"
  },

  link: {
    color: "#ffffff",
    fontSize: "14px",
    textDecoration: "none",
  },

  select: {
    background: "transparent",
    color: "#ffffff",
    border: "1px solid #fdf6f6",
    padding: "8px",
  },
};