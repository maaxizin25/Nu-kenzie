import myImg from "../../assets/imgMain.png";
import logoNu from "../../assets/logoNu.svg";
import "./style.css";

export const HomePage = ({ page }) => {
  return (
    <>
      <div className="container-home">
        <img src={logoNu} alt="Nu Kenzie" />
        <div className="div-nu">
          <h2>Centralize o controle das suas finanças</h2>
          <p>de forma rápida e segura</p>
          <button onClick={() => page(true)}>Iniciar</button>
        </div>
      </div>
      <div>
        <img className="img-container" src={myImg} alt="" />
      </div>
    </>
  );
};
