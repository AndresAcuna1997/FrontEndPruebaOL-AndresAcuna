import React from "react";

const ImprimirRegistro = ({
  nombres,
  apellidos,
  identificacion,
  rol,
  estado,
  telefono,
  correo,
}) => {
  return (
    <tr className="datos_tabla">
      <td key={identificacion}>{nombres}</td>
      <td>{apellidos}</td>
      <td>{identificacion}</td>
      <td>{rol}</td>
      <td>{estado}</td>
      <td>{telefono}</td>
      <td>{correo}</td>
      <td>
        <i className="fa fa-pencil color_iconos" />{" "}
        <i className="fa fa-trash-o" />
      </td>
    </tr>
  );
};

export default ImprimirRegistro;
