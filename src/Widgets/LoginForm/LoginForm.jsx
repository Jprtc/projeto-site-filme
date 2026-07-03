import { useState } from "react";
import { TEXTS, LANGUAGES } from "../../constants";
import { STYLES } from "../../styles/globalStyles";

export default function LoginForm() {
  const [openHelp, setOpenHelp] = useState(false);
  const [language, setLanguage] = useState(LANGUAGES.PT);
  const texts = TEXTS;

  return (
    <>
      <div style={STYLES.loginBox}>
        <h1 style={STYLES.title}>{texts[language].title}</h1>
        <div style={STYLES.subtitle}>
          {texts[language].subtitle}
        </div>

        <input
          style={STYLES.input}
          placeholder={texts[language].placeholder}
        />

        <button style={STYLES.button}>{texts[language].button}</button>

        <div style={STYLES.helpContainer}>
          <a
            href="#"
            style={STYLES.help}
            onClick={(e) => {
              e.preventDefault();
              setOpenHelp(!openHelp);
            }}
          >
            {texts[language].help} ▼
          </a>
        </div>

        <div style={STYLES.recaptcha}>
          {texts[language].recaptcha}
        </div>
      </div>

      <div style={STYLES.footerSpace}></div>

      <footer style={STYLES.footer}>
        <p style={STYLES.phone}>
          {texts[language].phone}
        </p>

        <div style={STYLES.links}>
          <div style={STYLES.column}>
            <a href="#" style={STYLES.link}>{texts[language].faq}</a>
            <a href="#" style={STYLES.link}>{texts[language].cookies}</a>
          </div>

          <div style={STYLES.column}>
            <a href="#" style={STYLES.link}>{texts[language].center}</a>
            <a href="#" style={STYLES.link}>{texts[language].company}</a>
          </div>

          <div style={STYLES.column}>
            <a href="#" style={STYLES.link}>{texts[language].terms}</a>
          </div>

          <div style={STYLES.column}>
            <a href="#" style={STYLES.link}>{texts[language].privacy}</a>
          </div>
        </div>

        <select
          style={STYLES.select}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </footer>
    </>
  );
}
