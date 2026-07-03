import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header({ idioma, setIdioma, textosHeader }) {
  return (
    <header className={styles['header-container']}>
      <div className={styles['logo-wrapper']}>
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" 
            className={styles['header-logo']}
          />
        </a>
      </div>
      <div className={styles['header-botoes']}>
        <select 
          className={styles['idioma-select']}
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
        >
          <option value="pt">🌐 Português</option>
          <option value="en">🌐 English</option>
          <option value="es">🌐 Español</option>
          <option value="fr">🌐 Français</option>
          <option value="de">🌐 Deutsch</option>
          <option value="it">🌐 Italiano</option>
          <option value="ja">🌐 日本語</option>
          <option value="ko">🌐 한국어</option>
        </select>
        <Link to="/Login" className={styles['botao-entrar']}>
          {textosHeader.botaoEntrar}
        </Link>
      </div>
    </header>
  );
}

export default Header;