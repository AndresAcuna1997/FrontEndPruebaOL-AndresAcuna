import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "../estilos/loadingStyles.css";

const LoadingScreen = () => {
  return (
    <>
      <div className="fondo">
        <div className="fondo_carga">
          <h1>Estamos preparando todo para tí</h1>
          <BeatLoader color={"white"} loading={true} size={40} />
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
