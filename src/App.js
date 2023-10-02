import "./App.css";
import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [empleadosList, setEmpleados] = useState([]);
  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombres: nombres,
      apellidos: apellidos,
      cargo: cargo,
      telefono: telefono,
      correo: correo,
      direccion: direccion,
      nacimiento: nacimiento,
    }).then(() => {
      getEmpleados();
      alert("Empleado registrado con exito.");
    });
  };

  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados").then((response) => {
      setEmpleados(response.data);
    });
  };

  getEmpleados();

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Directorio de empleados - CARACOL TELEVISIÓN
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombres:
            </span>
            <input
              type="text"
              onChange={(event) => {
                setNombres(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese nombres"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Apellidos:
            </span>
            <input
              type="text"
              onChange={(event) => {
                setApellidos(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese apellidos"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Cargo:
            </span>
            <input
              type="text"
              onChange={(event) => {
                setCargo(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese cargo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Teléfono:
            </span>
            <input
              type="text"
              onChange={(event) => {
                setTelefono(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese número telefónico"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Correo:
            </span>
            <input
              type="text"
              onChange={(event) => {
                setCorreo(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese correo electrónico"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Dirección:
            </span>
            <input
              type="text"
              onChange={(event) => {
                setDireccion(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese dirección"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Fecha de nacimiento:
            </span>
            <input
              type="date"
              onChange={(event) => {
                setNacimiento(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese fecha de nacimiento"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-success" onClick={add}>
            Guardar
          </button>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Correo</th>
            <th scope="col">Dirección</th>
            <th scope="col">Fecha de nacimiento</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleadosList.map((val, key) => {
            return (
              <tr key={val.id}>
                <th>{val.id}</th>
                <td>{val.nombres}</td>
                <td>{val.apellidos}</td>
                <td>{val.cargo}</td>
                <td>{val.telefono}</td>
                <td>{val.correo}</td>
                <td>{val.direccion}</td>
                <td>{val.nacimiento}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-info">
                      Editar
                    </button>
                    <button type="button" className="btn btn-danger">
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
