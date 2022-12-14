import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterAttrib } from "../../redux/actions";
import "./DropdownButton.css";

export const DropdownButton = () => {
  const { attribFilter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [attrib] = useState([
    { name: "nombre" },
    { name: "razon_social" },
    { name: "nit" },
    { name: "telefono" },
    { name: "codigo" },
  ]);
  const handleChangeAttrib = (e) => {
    const { id } = e.target;
    dispatch(changeFilterAttrib(id));
  };
  return (
    <div className="header_lista">
      <ul className="lista_select">
        <li>
          <h3>{attribFilter.toUpperCase()}</h3>
          <ul>
            {attrib.map((obj) => {
              return (
                <React.Fragment key={obj.name}>
                  {obj.name !== attribFilter && (
                    <li key={obj.name}>
                      <h3 id={obj.name} onClick={handleChangeAttrib}>
                        {obj.name.toUpperCase() === "RAZON_SOCIAL"
                          ? "RAZON SOCIAL"
                          : obj.name.toUpperCase()}
                      </h3>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};
