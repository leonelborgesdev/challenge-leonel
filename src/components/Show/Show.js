import React, { useState, useEffect } from "react";

import { Create } from "../Create/Create";
import {
  changePagina,
  getAllPersons,
  getPersonByAttrib,
  getPersonByLimit,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { DropdownButton } from "../DropdownButton/DropdownButton.js";
import arrow from "../../assets/arrow.svg";
import "./Show.css";

export const Show = () => {
  const { personas, personas_table, attribFilter, ult_doc } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPersons());
  }, []);
  const [state, setState] = useState(false);
  const handleAbrirModal = () => {
    setState(state === true ? false : true);
  };
  const [campo, setCampo] = useState({ value: "", campo: "" });
  const handlefilter = (e) => {
    const { value } = e.target;
    setCampo({
      value: value,
      campo: attribFilter,
    });
    if (value) {
      dispatch(getPersonByAttrib(attribFilter, value));
    } else {
      dispatch(getAllPersons());
    }
  };
  const handlePaginado = () => {
    if (!ult_doc) {
      dispatch(getAllPersons());
    }
    dispatch(getPersonByLimit(ult_doc));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container_search">
              <DropdownButton />
              <input type={"text"} onChange={handlefilter} />
              <div className="d-grid gap-2">
                <button
                  className="btn btn-success mt-2 mb-2"
                  onClick={handleAbrirModal}
                >
                  AGREGAR
                </button>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr className="header_table">
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Razon Social</th>
                  <th>Nit</th>
                  <th>Telefono</th>
                  <th>Codigo</th>
                </tr>
              </thead>
              <tbody>
                {personas.map((persona, index) => (
                  <React.Fragment key={index}>
                    <tr key={persona.id}>
                      <td>{index + 1}</td>
                      <td>{persona.nombre}</td>
                      <td>{persona.razon_social}</td>
                      <td>{persona.nit}</td>
                      <td>{persona.telefono}</td>
                      <td>{persona.codigo}</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <button className="button_bajar" onClick={handlePaginado}>
              {ult_doc ? (
                <img src={arrow} alt={"image"} />
              ) : (
                <span>Resetear Paginacion</span>
              )}
            </button>
          </div>
        </div>
      </div>
      <Create state={state} handleAbrirModal={handleAbrirModal} campo={campo} />
    </>
  );
};
