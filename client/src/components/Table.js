import React, { Fragment, useEffect, useState } from "react";

import Forms from "./Form";

const Table = (props) => {
  const [name, setName] = useState("");
  const [URL, setURL] = useState("");
 

  //delete todo function

  const DeleteLink = async id => {
    try {
      const DeleteLink = await fetch(`http://localhost:8000/links/${id}`, {
        method: "DELETE"
      });
      setURL(URL.filter(URL => links.id !== id));
      setName(name.filter(name => links.id !== id));
    } catch (err) {
      console.error(err.message);
      
    }
  
  };

  const getLinks = async () => {
    try {
      const response = await fetch("http://localhost:8000/links");
      const jsonData = await response.json();
      setURL(jsonData);
      setName(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect(() => {
  //   getLinks();
  // }, []);

  // console.log(Links);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {/* {links.map(link => (
            <tr key={link.id}>
              <td>{link.name}</td>
              <td>
                <updateLink link={link} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => DeleteLink(link.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;