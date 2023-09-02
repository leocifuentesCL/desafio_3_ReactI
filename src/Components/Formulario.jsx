import { useState } from "react";

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const NAME_REGEX = /^[\w\s]+ [\w\s]+$/;
const TELEFONO_REGEX = /^\+569\d{8}$/;
const EDAD_REGEX = /^[0-9-]+$/;

const Formulario = ({ agregarColaborador, setAlerta }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nuevoColaborador.nombre.trim() ||
      !nuevoColaborador.correo.trim() ||
      !nuevoColaborador.edad.trim() ||
      !nuevoColaborador.cargo.trim() ||
      !nuevoColaborador.telefono.trim()
    ) {
      setAlerta({
        mensaje: "Para agregar colaborador ingrese todos los datos solicitados",
        tipo: "warning",
      });
      return;
    }

    if (!NAME_REGEX.test(nuevoColaborador.nombre)) {
      setAlerta({
        mensaje: "El nombre debe contener al menos un nombre y un apellido",
        tipo: "danger",
      });
      return;
    }

    if (!EMAIL_REGEX.test(nuevoColaborador.correo)) {
      setAlerta({
        mensaje: "Ingrese un correo válido",
        tipo: "danger",
      });
      return;
    }

    if (!EDAD_REGEX.test(nuevoColaborador.edad)) {
      setAlerta({
        mensaje: "Ingrese edad válida (ej: 28)",
        tipo: "danger",
      });
      return;
    }

    if (!TELEFONO_REGEX.test(nuevoColaborador.telefono)) {
      setAlerta({
        mensaje: "Ingrese un teléfono válido (ej: +56912345678)",
        tipo: "danger",
      });
      return;
    }

    agregarColaborador(nuevoColaborador);

    setNuevoColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    setAlerta({
      mensaje: "Se ha agregado colaborador exitosamente",
      tipo: "success",
    });
  };

  return (
    <form
      className="d-flex flex-column form-group gap-3"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control text-center"
        type="text"
        name="nombre"
        placeholder="Nombre del colaborador"
        value={nuevoColaborador.nombre}
        onChange={handleChange}
      />
      <input
        className="form-control text-center"
        type="text"
        name="correo"
        placeholder="Correo del colaborador"
        value={nuevoColaborador.correo}
        onChange={handleChange}
      />
      <input
        className="form-control text-center"
        type="text"
        name="edad"
        placeholder="Edad del colaborador"
        value={nuevoColaborador.edad}
        onChange={handleChange}
      />
      <input
        className="form-control text-center"
        type="text"
        name="cargo"
        placeholder="Cargo del colaborador"
        value={nuevoColaborador.cargo}
        onChange={handleChange}
      />
      <input
        className="form-control text-center"
        type="tel"
        name="telefono"
        placeholder="Teléfono del colaborador"
        value={nuevoColaborador.telefono}
        onChange={handleChange}
      />
      <button className="btn btn-info text-black" type="submit">
        Agregar colaborador
      </button>
    </form>
  );
};

export default Formulario;
