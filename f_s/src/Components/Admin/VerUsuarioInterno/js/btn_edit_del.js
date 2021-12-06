import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAccounts, deleteAccounts } from "./data";

function Button_delete() {
  const style = {
    margin: "0.5em",
    listStyle: "none",
  };
  let params = useParams();
  let navigate = useNavigate();
  let account = getAccounts(parseInt(params.userID, 10));
  return (
    <div>
      <button
        style={style}
        className="btn btn-success"
        onClick={() => {
          //deleteAccounts(account.cc);
          navigate("/Admin-user-int");
        }}
        to={``} // Esto para redireccionar a la edición del usuario
      >
        Editar
      </button>

      <button
        style={style}
        className="btn btn-danger"
        onClick={() => {
          deleteAccounts(account.cc);
          navigate("/Admin-user-int");
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Button_delete;
