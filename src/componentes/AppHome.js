import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import LoginScreen from "./LoginScreen";
import TablaDeDatos from "./TablaDeDatos";
import CrearUsuario from "./CrearUsuario";

const AppHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await (await fetch("/data.json")).json();
    setData(data);
  };

  const [compCargado, setCompCargado] = useState(1);

  return (
    <>
      {compCargado === 1 ? (
        <LoginScreen setCompCargado={setCompCargado} />
      ) : compCargado === 2 ? (
        <LoadingScreen />
      ) : compCargado === 3 ? (
        <TablaDeDatos setCompCargado={setCompCargado} registros={data} />
      ) : compCargado === 4 ? (
        <CrearUsuario setCompCargado={setCompCargado} />
      ) : (
        window.alert("Error de carga")
      )}
    </>
  );
};

export default AppHome;
