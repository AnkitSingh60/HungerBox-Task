import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const [details, setDetails] = useState(getData()); //Storing all data and getting the data from localStorage
  const [name, setName] = useState(""); //Name field state
  const [mobile, setMobile] = useState(""); //Mob field state
  const [email, setEmail] = useState(""); //Email field state
  const user = localStorage.getItem("data");

  //Submit event handler
  const handleSubmit = (e) => {
    e.preventDefault();

    let detail = {
      name,
      mobile,
      email,
    };
    // console.log('detail:', detail)
    setDetails([...details, detail]);
    setName("");
    setMobile("");
    setEmail("");
  };

  const deleteInfo = (mobile) => {
    // console.log(heyy kiddo);
    const filterUser = details.filter((ele, indx) => {
      return ele.mobile !== mobile;
    });
    setDetails(filterUser);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(details));
  }, [details]);

  return (
    <div className="mainDiv">
      <div className="container">
        <div className="box1">
          <form onSubmit={handleSubmit}>
            <div className="heading1">
              <h3>Employee List</h3>
            </div>
            <label className="label"> Name*</label>
            <div className="inputDiv">
              <input
                className="input"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label className="label"> Mobile No.*</label>
            <div className="inputDiv">
              <input
                className="input"
                type="number"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <label className="label"> Email ID*</label>
            <div className="inputDiv">
              <input
                className="input"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btnSubmit">
              Add
            </button>
          </form>
        </div>
        <div className="userDiv">
          {details.length > 0 && (
            <User details={details} deleteInfo={deleteInfo} />
          )}
        </div>
        {details.length < 1 && <h2 className="h2">Data not found</h2>}
      </div>
    </div>
  );
}

const getData = () => {
  const data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default App;
