import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';

const AddAnimeModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Nuevo Anime</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formAnimeName">
            <Form.Label>Nombre del Anime</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el nombre del anime" />
          </Form.Group>
          <Form.Group controlId="formCategory" className="mt-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la categoría" />
          </Form.Group>
          <Form.Group controlId="formImage" className="mt-3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Guardar Anime
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AddAnimeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddAnimeModal;
