import React, { useState } from "react";
import "../estilos/crearUsuario.css";

const CrearUsuario = ({ setCompCargado }) => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [estado, setEstado] = useState("");

  const handleButton = (e) => {
    e.preventDefault();
    setCompCargado(3);
  };
  const handleChangeNombre = (e) => {
    setNombres(e.target.value);
  };
  const handleChangeApellido = (e) => {
    setApellidos(e.target.value);
  };
  const handleChangeIdentificacion = (e) => {
    setIdentificacion(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const handleChangeCorreo = (e) => {
    setCorreo(e.target.value);
  };
  const handleChangeRol = (e) => {
    setRol(e.target.value);
  };
  const handleChangeEstado = (e) => {
    setEstado(e.target.value);
  };

  return (
    <div className="fondo_creacion_formulario">
      <div className="fomulario_creacion">
        <div className="encabezado_fomulario">
          <h2>Agregar nuevo usuario</h2>
          <i className="fa fa-times" onClick={handleButton} />
        </div>
        <div className="crear_formularios_input">
          <form>
            <div className="div_filtros">
              <div className="campo_form">
                <div className="input_individual">
                  <label htmlFor="fname">Nombres</label>
                  <input
                    value={nombres}
                    onChange={handleChangeNombre}
                    type="text"
                  ></input>
                </div>
                <div className="input_individual">
                  <label htmlFor="fname">Apellidos</label>
                  <input
                    value={apellidos}
                    onChange={handleChangeApellido}
                    type="text"
                  ></input>
                </div>
              </div>

              <div className="campo_form">
                <div className="input_individual">
                  <label htmlFor="fname">Identificacion (C.C)</label>
                  <input
                    value={identificacion}
                    onChange={handleChangeIdentificacion}
                    type="number"
                  ></input>
                </div>

                <div className="input_individual">
                  <label htmlFor="fname">Contraseña</label>
                  <input
                    value={password}
                    onChange={handleChangePassword}
                    type="text"
                  ></input>
                </div>
              </div>

              <div className="campo_form">
                <div className="input_individual">
                  <label htmlFor="fname">Telefono</label>
                  <input
                    value={telefono}
                    onChange={handleChangeTelefono}
                    type="number"
                  ></input>
                </div>

                <div className="input_individual">
                  <label htmlFor="fname">Correo electronico</label>
                  <input
                    value={correo}
                    onChange={handleChangeCorreo}
                    type="email"
                  ></input>
                </div>
              </div>

              <div className="campo_form">
                <div className="input_individual">
                  <label htmlFor="fname">Rol asociado</label>
                  <select
                    name="rol_usuario"
                    id="rol"
                    onChange={handleChangeRol}
                  >
                    <option value="Administrador">Administrador</option>
                    <option value="Conductor">Conductor</option>
                    <option value="Recolector">Recolector</option>
                    <option value="Coordinador">Coordinador</option>
                    <option value="Digitador">Digitador</option>
                  </select>
                </div>

                <div className="input_individual">
                  <label htmlFor="fname">Estado</label>
                  <select
                    name="estado_usurio"
                    id="estado"
                    onChange={handleChangeEstado}
                  >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filtros_btns">
              <input type="submit" value="Aceptar" />
              <input type="submit" value="Cancelar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearUsuario;
