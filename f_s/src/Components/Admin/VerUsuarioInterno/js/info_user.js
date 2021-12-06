import React from "react";
import "../css/info_user.css";
import Button_delete from "./btn_edit_del";
import { useParams } from "react-router-dom";
import { getAccount } from "./data";

function Info_user() {
  let params = useParams();
  let accounts = getAccount(parseInt(params.userID, 10));
  return (
    <div class="card container h-80 p-3 bg-white rounded-4">
      <img
        src="https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          <strong>Info user</strong>
        </h5>
        <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>Name: </strong> {accounts.name}
        </li>
        <li class="list-group-item">
          <strong>CC: </strong> {accounts.cc}
        </li>
        <li class="list-group-item">
          <strong>Contact: </strong> {accounts.contact}
        </li>
        <li class="list-group-item">
          <strong>Fecha de nacimiento: </strong> {accounts.due}
        </li>
        <li class="list-group-item">
          <strong>Descripción: </strong> {accounts.description}
        </li>
      </ul>
      <div class="card-body">
        <Button_delete />
      </div>
    </div>
  );
}

export default Info_user;
