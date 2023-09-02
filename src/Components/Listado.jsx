import Table from "react-bootstrap/Table";

const Listado = ({ colaboradores, deleteItem }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td className="fix-text-overflow">{colaborador.nombre}</td>
            <td className="fix-text-overflow">{colaborador.correo}</td>
            <td className="fix-text-overflow">{colaborador.edad}</td>
            <td className="fix-text-overflow">{colaborador.cargo}</td>
            <td className="fix-text-overflow">{colaborador.telefono}</td>
            <td>
              <i
                className="fa-solid fa-trash-can-arrow-up text-danger mx-4"
                onClick={() => deleteItem(colaborador.id)}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
