import React, { useEffect, useState } from "react";
import Axios from "axios";

export default () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/user")
      .then(function (response) {
        setData(response.data);
        // console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [0]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {Data.map((val) => {
        return (
          <ul key={val._id}>
            <li>
              <strong>First Name:</strong> {val.firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {val.lastName}
            </li>
            <li>
              <strong>Email:</strong> {val.email}
            </li>
            <li>
              <strong>Password:</strong> {val.password}
            </li>
            <hr />
          </ul>
        );
      })}
    </div>
  );
};
