import React from "react";
import "./Login.scss";
import logo from "../../assets/statics/logo.png";
import Icons from "../../utils/icons/svgIcons";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-login">
      <div className="left-side">
        <p className="left-side--title">Registrate o inicia sesión</p>
        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <input type="email" placeholder="Correo" />
          </div>
          <div className="input-form">
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="input-form">
            <input type="password" placeholder="Repite la contraseña" />
          </div>
          <div className="input-form">
            <button>Registrate</button>
          </div>
        </form>
        <div className="login-group">
          <button className="button-login">
            <div className="button-login--content">
              <Icons name="github" fill="#24292e" />
              GitHub
            </div>
          </button>
          <button className="button-login">
            <div className="button-login--content">
              <Icons name="google" />
              Google
            </div>
          </button>
          <button className="button-login">
            <div className="button-login--content">
              <Icons name="twitter" fill="#00acee" />
              Twitter
            </div>
          </button>
          <button className="button-login">
            <div className="button-login--content">
              <Icons name="facebook" fill="#3b5998" />
              Facebook
            </div>
          </button>
        </div>
      </div>
      <div className="right-side">
        <img src={logo} alt="Logo dfloresdev" />
        <p>
          Desarrollado por{" "}
          <a
            href="https://dflores.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            David Flores
          </a>
        </p>
        <p>
          <strong>Anywhere:</strong> dfloresdev
        </p>
      </div>
    </div>
  );
};

export default Login;
