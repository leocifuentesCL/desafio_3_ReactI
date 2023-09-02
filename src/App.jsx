import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Listado from "./Components/Listado";
import Formulario from "./Components/Formulario";
import Buscador from "./Components/Buscador";
import Alerta from "./Components/Alerta";
import BaseColaboradores from "./BaseColaboradores";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: "", tipo: "" });
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const agregarColaborador = (colaborador) => {
    colaborador.id = +colaboradores[colaboradores.length - 1].id + 1;
    setColaboradores([...colaboradores, colaborador]);
  };

  const deleteItem = (id) => {
    const listFilter = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(listFilter);
  };
  const handlerTerminoBusqueda = (e) => {
    setTerminoBusqueda(e.target.value);
  };
  const filterOfColaboradores = colaboradores.filter(
    (colabodador) =>
      colabodador.nombre
        .toLowerCase()
        .includes(terminoBusqueda.toLowerCase()) ||
      colabodador.correo
        .toLowerCase()
        .includes(terminoBusqueda.toLowerCase()) ||
      colabodador.edad.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      colabodador.cargo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      colabodador.telefono.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <div className="container-none px-4">
      <h1 className="text-center p-3">Lista de colaboradores</h1>
      <Buscador
        terminoBusqueda={terminoBusqueda}
        onChanges={handlerTerminoBusqueda}
      />
      <div className="row">
        <div className="col-lg-8 col-12">
          <Listado
            colaboradores={filterOfColaboradores}
            deleteItem={deleteItem}
            data-spy="scroll"
          />
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <div>
            <h2 className="p-4">Agregar colaborador</h2>
            <Formulario
              agregarColaborador={agregarColaborador}
              colaboradores={colaboradores}
              setAlerta={setAlerta}
            />
            <Alerta alerta={alerta} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
