import React from "react";
import "./Footer.css";
import { useState } from "react";

  

  const textos = {
    pt: {
      descricao: "Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.",
      botao: "Vamos lá >",
      duvida: "Dúvidas? Ligue para 0800 591 8943",
      links: [
        "Perguntas frequentes",
        "Central de Ajuda",
        "Conta",
        "Media Center",
        "Relações com investidores",
        "Carreiras",
        "Resgatar cartão pré-pago",
        "Comprar cartão pré-pago",
        "Formas de assistir",
        "Termos de Uso",
        "Privacidade",
        "Preferências de cookies",
        "Informações corporativas",
        "Entre em contato",
        "Teste de velocidade",
        "Avisos legais",
        "Só na Netflix"
      ],
      marca: "Netflix Brasil",
      aviso: "Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô."
    },
    en: {
      descricao: "Ready to watch? Enter your email to create or restart your membership.",
      botao: "Get Started >",
      duvida: "Questions? Call 0800 591 8943",
      links: [
        "FAQ",
        "Help Center",
        "Account",
        "Media Center",
        "Investor Relations",
        "Jobs",
        "Redeem Gift Card",
        "Buy Gift Card",
        "Ways to Watch",
        "Terms of Use",
        "Privacy",
        "Cookie Preferences",
        "Corporate Information",
        "Contact Us",
        "Speed Test",
        "Legal Notices",
        "Only on Netflix"
      ],
      marca: "Netflix Brazil",
      aviso: "This page is protected by Google reCAPTCHA to ensure you're not a robot."
    },
    es: {
      descricao: "¿Quieres ver algo ya? Escribe tu correo para crear o reiniciar tu suscripción.",
      botao: "Empezar >",
      duvida: "¿Tienes dudas? Llama al 0800 591 8943",
      links: [
        "Preguntas frecuentes",
        "Centro de ayuda",
        "Cuenta",
        "Centro de prensa",
        "Relaciones con inversores",
        "Empleo",
        "Canjear tarjeta de regalo",
        "Comprar tarjeta de regalo",
        "Formas de ver",
        "Términos de uso",
        "Privacidad",
        "Preferencias de cookies",
        "Información corporativa",
        "Contáctanos",
        "Prueba de velocidad",
        "Avisos legales",
        "Exclusivo en Netflix"
      ],
      marca: "Netflix Brasil",
      aviso: "Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot."
    }
  };

function Footer() {
  const [idioma, setIdioma] = useState("pt");
  const texto = textos[idioma] || textos.portugues;

  return (
    <>
     <div className="form-topo">
        <p>{texto.descricao}</p>
        <div className="campo-email">
          <input type="email" placeholder="Email" />
          <button>{texto.botao}</button>
        </div>
      </div>
    <footer className="rodape">
      <div className="container-rodape">
        <p className="contato">{texto.duvida}</p>
        <div className="grid-links">
          {texto.links.map((link, i) => (
            <a key={i} href="#" className="link">{link}</a>
          ))}
        </div>
         <select
          className="seletor-idioma"
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <p className="marca">{texto.marca}</p>
         <p className="aviso-captcha">{texto.aviso}</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;