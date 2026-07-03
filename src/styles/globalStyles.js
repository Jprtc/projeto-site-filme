export const STYLES = {
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
    backgroundColor: "rgba(255,255,255,0.2)",
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

  logo: {
    position: "absolute",
    top: 20,
    left: 50,
    width: "150px",
    height: "auto",
    zIndex: 10,
  },

  loginBox: {
    position: "relative",
    zIndex: 999,
    width: 400,
    margin: "0 auto",
    padding: 60,
    borderRadius: 6,
  },

  title: {
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    fontSize: "32px",
  },

  subtitle: {
    textAlign: "left",
    fontSize: "19px",
    fontWeight: "normal",
    marginBottom: 30,
    color: "#B3B3B3",
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

  recaptcha: {
    fontFamily: "Arial, sans-serif",
    fontSize: "12px",
    color: "#b3b3b3",
    marginTop: "30px",
  },

  footerSpace: {
    height: "300px",
  },

  footer: {
    backgroundColor: "#474646",
    padding: "40px",
    width: "100%",
    boxSizing: "border-box",
    overflowWrap: "break-word",
  },

  phone: {
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
    textDecoration: "underline",
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
