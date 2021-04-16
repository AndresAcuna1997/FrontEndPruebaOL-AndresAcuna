import React from "react";
import "../estilos/tablaStyles.css";
import img_perfil from "../imagenes/img_perfil.png";
import ImprimirRegistro from "./ImprimirRegistro";

const TablaDeDatos = ({ setCompCargado, registros }) => {
  console.log(registros);

  const handleButton = () => {
    setCompCargado(4);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="fondo_tablas">
        <div className="container_padre">
          <div className="main_menu">
            <ul>
              <li className="menu_item titulo">
                <i className="fa fa-circle"></i>OLSoftware
              </li>
              <li className="menu_item">
                <i className="fa fa-map" />
                Programacion
              </li>
              <li className="menu_item">
                <i className="fa fa-list-ul" />
                Gestion de operaciones
              </li>
              <li className="menu_item">
                <i className="fa fa-tasks" />
                Perfiles
              </li>
              <li className="menu_item">
                <span className="fa">R</span>Roles
              </li>
              <li className="menu_item">
                <span className="fa">U</span>Usuarios
              </li>
              <li className="menu_item">
                <i className="fa fa-file" />
                Reportes
              </li>
            </ul>
          </div>
          <div className="tablas_container">
            <div className="tabla_top">
              <div>
                <h2 className="color_iconos">
                  {" "}
                  <i className="fa fa-bars icon color_iconos"></i> Prueba
                  Front-end
                </h2>
              </div>
              <div className="logout">
                <ul className="logout_lista">
                  <li>
                    <img src={img_perfil} alt="imagen_perfil" />
                  </li>
                  <li>
                    <p>Andres Felipe Garcia Castro</p>
                  </li>
                  <li>
                    <i className="fa fa-sign-out color_iconos" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="tabla_mid">
              <div className="tabla_datos">
                <div className="seccion_superior">
                  <h2 className="color_iconos">
                    {" "}
                    <i className="fa fa-users icon color_iconos"></i>Usuarios
                    existentes
                  </h2>
                  <button onClick={handleButton}>Crear</button>
                </div>
                <div className="seccion_tabla">
                  <table>
                    <tbody>
                      <tr className="indicadores_table">
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Identificacion (C.C)</th>
                        <th>Rol asociado</th>
                        <th>Estado</th>
                        <th>Telefono</th>
                        <th>Correo electronico</th>
                        <th>Accion</th>
                      </tr>
                      {registros.map((registro) => (
                        <ImprimirRegistro
                          nombres={registro.nombres}
                          apellidos={registro.apellidos}
                          identificacion={registro.identificacion}
                          rol={registro.rol}
                          estado={registro.estado}
                          telefono={registro.telefono}
                          correo={registro.correo}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="paginacion_tabla">
                  <ul>
                    <li>
                      <i className="fa fa-fast-backward" />
                    </li>
                    <li>
                      <i className="fa fa-backward" />
                    </li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>
                      <i className="fa fa-step-forward" />
                    </li>
                    <li>
                      <i className="fa fa-fast-forward" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tabla_filtros">
                <form>
                  <h2 className="color_iconos">
                    {" "}
                    <i className="fa fa-user-plus icon color_iconos"></i>Filtrar
                    búsqueda
                  </h2>
                  <div className="div_filtros">
                    <label htmlFor="fname">Nombres</label>
                    <input type="text"></input>

                    <label htmlFor="fname">Apellidos</label>
                    <input type="text"></input>

                    <label htmlFor="fname">Identificacion (C.C)</label>
                    <input type="text"></input>

                    <label htmlFor="fname">Rol asociado</label>
                    <select name="rol_usuario" id="rol">
                      <option value="Administrador">Administrador</option>
                      <option value="Conductor">Conductor</option>
                      <option value="Recolector">Recolector</option>
                      <option value="Coordinador">Coordinador</option>
                      <option value="Digitador">Digitador</option>
                    </select>

                    <label htmlFor="fname">Estado</label>
                    <select name="estado_usurio" id="estado">
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                    </select>

                    <label htmlFor="fname">Contraseña</label>
                    <input type="text"></input>

                    <label htmlFor="fname">Telefono</label>
                    <input type="text"></input>

                    <label htmlFor="fname">Correo electronico</label>
                    <input type="text"></input>
                  </div>
                  <div className="filtros_btns">
                    <input
                      type="submit"
                      value="Filtrar"
                      onClick={handleSubmit}
                    />
                    <input
                      type="submit"
                      value="Limpiar"
                      onClick={handleSubmit}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="tabla_bottom">
              <p>OLSofware - 2018</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablaDeDatos;
