import React, { Fragment, useEffect, useState } from "react";
import {UpdateLink} from "./Forms"



const Table = (props) => {
  const [data, setData] = useState([]);

 

  //delete todo function

  const DeleteLink = async id => {
    try {
      const DeleteLink = await fetch(`http://localhost:8000/links/${id}`, {
        method: "DELETE"
      });
    
      setData(data.filter(link => link.id !== id));
    } catch (err) {
      console.error(err.message);
      
    }
  
  };

  const getLinks = async () => {
    try {
      const response = await fetch("http://localhost:8000/links");
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLinks();
    
  }, []);

  

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
          <th>ID</th>
            <th>Name</th>
            <th>URL</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map(link => (
            <tr key={link.id}>
              <td>{link.id}</td>
              <td>{link.name}</td>
              <td><a href={link.url}>{link.url}</a></td>
              <td>                
                {/* <button
                  className="btn btn-danger"
                  onClick={() => {UpdateLink}}
                >
                  Edit
                </button> */}
                broken
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
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;