import styles from "./Login.module.css";
import logo from "../assets/logo-netflix(1).webp";



function Login() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="Netflix" className={styles.logo} />
      </header>

      <main className={styles.loginBox}>
        <h1>Entrar</h1>

        <input type="email" placeholder="Email ou número de celular" />
        <input type="password" placeholder="Senha" />

        <button>Entrar</button>

        <p>OU</p>

        <button>Usar um código de acesso</button>

        <a href="#">Esqueceu a senha?</a>

        <label>
          <input type="checkbox" />
          Lembre-se de mim
        </label>

        <p>
          Novo por aqui? <a href="#">Assine agora.</a>
        </p>

        <small>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô.
        </small>
      </main>
    </div>
  );
}
export default Login