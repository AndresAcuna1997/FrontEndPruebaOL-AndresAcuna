import React, { useState } from "react";
import "../estilos/home.css";

const LoginScreen = ({ setCompCargado }) => {
  const [user, setUser] = useState("Usuario");
  const [pass, setPass] = useState("Constaseña");


  const handleChangeUsuario = (texto) => {
    setUser(texto.target.value);
  };
  const handleChangePassword = (texto) => {
    setPass(texto.target.value);
  };
  const handlesButton = (e) => {
    e.preventDefault();
    if (
      pass === "" ||
      user === "" ||
      pass === "Constaseña" ||
      user === "Usuario"
    ) {
      window.alert("Ingrese sus datos");
    } else {
      setCompCargado(2);

      setTimeout(() => {
        setCompCargado(3);
      }, 3500);
    }
  };
  const vaciarCampoUser = () => {
    if (user === "Usuario") {
      setUser("");
    }
  };
  const vaciarCampoPass = () => {
    if (pass === "Constaseña") {
      setPass("");
    }
  };
  return (
    <>
      <div className="fondo">
        <div className="login_page">
          <div className="text_logincreen">
            <h1 className="subheader">Aplicacion OLSoftware</h1>
            <p>Prueba práctica Front-end senior</p>
          </div>
          <div className="login_container">
            <form className="formulario_login">
              <h2>Inicio de Sesión</h2>
              <div className="inputs_formulario ">
                <div className="input_icons input_usuario">
                  <i className="fa fa-user icon"></i>
                  <input
                    className="input_campo"
                    type="text"
                    value={user}
                    onClick={vaciarCampoUser}
                    onChange={handleChangeUsuario}
                  ></input>
                </div>
                <div className="input_icons">
                  <i className="fa fa-lock icon"></i>
                  <input
                    className="input_campo"
                    type="password"
                    value={pass}
                    onClick={vaciarCampoPass}
                    onChange={handleChangePassword}
                  ></input>
                </div>
              </div>
              <input
                type="submit"
                value="Iniciar Sesion"
                onClick={handlesButton}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
