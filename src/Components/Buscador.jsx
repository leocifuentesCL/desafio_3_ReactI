const Buscador = ({ terminoBusqueda, onChanges }) => {
    return (
      <input
        style={{ width: "320px" }}
        className="form-control mb-3 mx-left text-center"
        type="text"
        placeholder="Busca un colaborador"
        value={terminoBusqueda}
        onChange={onChanges}
      />
    );
  };

  export default Buscador;
