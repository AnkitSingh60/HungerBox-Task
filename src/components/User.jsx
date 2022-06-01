import React from "react";

const User = ({ details, deleteInfo }) => {
//   console.log("details:", details);
  return details.map((data) => (
    <div className="infoDiv" key={data.mobile}>
      <div className="upperDiv">
        <div className="nameL">
          <p className="label">Name</p>
          <h3 className="text">{data.name}</h3>
        </div>
        <div className="mobR">
          <p className="label">Mobile No.</p>
          <h3 className="text">{data.mobile}</h3>
        </div>
      </div>

      <div className="lower">
        <div className="emailL">
          <p className="label">Email</p>
          <h3 className="text">{data.email}</h3>
        </div>
        <button onClick={() => deleteInfo(data.mobile)} className="btnDel">
          Delete
        </button>
      </div>
      <hr />
    </div>
  ));
};

export default User;
