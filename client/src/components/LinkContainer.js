import React, { Fragment, useState } from "react";

const LinkContainer = () => {
  const [name , setName, URL, setURL] = useState("");
  

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name, URL };
      const response = await fetch("http://localhost:8000/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response)
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Link List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={URL}
          onChange={e => setURL(e.target.value)}
        />        
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default LinkContainer;