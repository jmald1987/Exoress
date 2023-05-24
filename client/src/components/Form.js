import React, { Fragment, useState } from "react";

const Forms = ({ Links }) => {
  const [name, setName] = useState(Links.name);
  const [URL, setURL] = useState(Links.URL);

  //edit description function

  const updateLink = async e => {
    e.preventDefault();
    try {
      const body = { name,URL };
      const response = await fetch(
        `http://localhost:5000/links/${Links.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
        
      );
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${Links.id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${Links.id}`}
        onClick={() => (setName(Links.name),setURL(Links.URL)) }
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Link</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() =>  (setName(Links.name),setURL(Links.URL))}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => {setName(e.target.value)}}
              />
              <input
                type="text"
                className="form-control"
                value={URL}
                onChange={e => {setURL(e.target.value)}}
              />              
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e =>{updateLink(e)} }
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => (setName(Links.name),setURL(Links.URL))}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Forms;