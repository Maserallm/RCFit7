import React from "react";

function Protected({logout}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }} className="jumbotron">
            <h1>Welcome to the Protected Page</h1>
            <button className="btn-primary logoutBtn" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Protected;
