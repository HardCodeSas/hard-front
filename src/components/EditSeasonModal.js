import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';

const EditSeasonModal = ({ show, handleClose, season }) => {
  const isEdit = season !== null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? 'Editar Temporada' : 'Agregar Temporada'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formSeasonName">
            <Form.Label>Nombre de la Temporada</Form.Label>
            <Form.Control type="text" defaultValue={isEdit ? season.name : ''} placeholder="Ingrese el nombre de la temporada" />
          </Form.Group>
          <Form.Group controlId="formSeasonRating" className="mt-3">
            <Form.Label>Calificación</Form.Label>
            <Form.Control type="number" max="5" min="0" defaultValue={isEdit ? season.rating : ''} placeholder="Ingrese la calificación (0 a 5)" />
          </Form.Group>
          <Form.Group controlId="formLinkAF" className="mt-3">
            <Form.Label>Link AnimeFLV</Form.Label>
            <Form.Control type="url" defaultValue={isEdit ? season.linkAF : ''} placeholder="Ingrese el enlace de AnimeFLV" />
          </Form.Group>
          <Form.Group controlId="formLinkCrunchy" className="mt-3">
            <Form.Label>Link Crunchyroll</Form.Label>
            <Form.Control type="url" defaultValue={isEdit ? season.linkCrunchy : ''} placeholder="Ingrese el enlace de Crunchyroll" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          {isEdit ? 'Guardar Cambios' : 'Agregar Temporada'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

EditSeasonModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  season: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    linkAF: PropTypes.string,
    linkCrunchy: PropTypes.string,
  }),
};

export default EditSeasonModal;
