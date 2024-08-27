import React, { useState } from 'react';
import { Button } from 'react-bootstrap';  // Aquí importamos Button
import AddAnimeModal from './AddAnimeModal';

const OtakuListHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1 id="Title">OtakuList</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col d-flex justify-content-end align-items-center">
          <label id="Srch" htmlFor="search" className="me-2">Buscar:</label>
          <input type="text" id="search" className="form-control me-2" style={{ maxWidth: '200px' }} />
          <Button className="btn btn-primary" onClick={handleShow}>+</Button>
        </div>
      </div>
      <AddAnimeModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default OtakuListHeader;
