
import React, { useState } from "react";



const ContadorSegundos = () => {
  const [segundos, setSegundos] = useState(0);
  
  const contarArriba = () => {
      setSegundos(segundos => segundos + 1);
      
      setInterval(()=> {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
      };
      const str = segundos.toString().padStart(6, "0")
  

  return (
    <div className="d-flex justify-content-center m-5">
      <div className="bg-dark text-white m-1 p-2">img</div>  
      <h1 className="bg-dark text-white m-1 p-2" onClick={contarArriba}>{segundos}</h1>
      <h1 className="bg-dark text-white m-1 p-2" onClick={contarArriba}>{str[0]}</h1>
      <h1 className="bg-dark text-white m-1 p-2" onClick={contarArriba}>{str[1]}</h1>
      <h1 className="bg-dark text-white m-1 p-2" onClick={contarArriba}>{str[2]}</h1>
      <h1 className="bg-dark text-white m-1 p-2" onClick={contarArriba}>{str[3]}</h1>
      <h1 className="bg-dark text-white m-1 p-2" onClick={contarArriba}>{str[4]}</h1>
      <h1 className="bg-dark text-white m-1 p-2" onClick={contarArriba}>{str[5]}</h1>
    </div>
  );

};



export default ContadorSegundos;