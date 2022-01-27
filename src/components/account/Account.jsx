import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  let navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/home");
    window.location.reload(false);
  }
  return (
    <>
      <button onClick={() => logout()}>
        {" "}
        <h1>Log out</h1>
      </button>
    </>
  );
};

export default Account;
