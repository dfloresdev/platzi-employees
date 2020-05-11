import React from "react";
import "./Login.scss";
import logo from "../../assets/statics/logo.png";
import Icons from "../../utils/icons/svgIcons";
import { connect } from "react-redux";
import { googleLoginAction, logOutAction } from "../../redux/userDuck";

const Login = ({ googleLoginAction, fetching, loggedIn, logOutAction }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function loginGoogle() {
    googleLoginAction();
  }

  function logOut() {
    logOutAction();
  }

  return (
    <div className="container-login">
      {!loggedIn && (
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
            <button className="button-login" onClick={loginGoogle}>
              <div className="button-login--content">
                <Icons name="google" />
                {fetching ? <p> conectando...</p> : <p>Google</p>}
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
      )}
      {loggedIn && (
        <div className="left-side">
          <form onSubmit={handleSubmit}>
            <div className="input-form">
              <button onClick={logOut}>Cerrar sesión</button>
            </div>
          </form>
        </div>
      )}
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

const mapStateToProps = (state) => {
  return {
    fetching: state.user.fetching,
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { googleLoginAction, logOutAction })(
  Login,
);
