import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import LogoAF from '../img/LogoAF.png';
import LogoCrunchy from '../img/LogoCrunchy.png';
import EditSeasonModal from './EditSeasonModal';

const AnimeModal = ({ show, handleClose, anime }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleEditShow = (season) => {
    setSelectedSeason(season);
    setShowEditModal(true);
  };

  const handleEditClose = () => setShowEditModal(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" centered className="custom-modal">
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title>{anime.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <div className="d-flex">
            <div className="anime-image-container" style={{ marginRight: '20px', textAlign: 'center' }}>
              <img 
                src={anime.img} 
                alt={anime.title} 
                style={{ width: '300px', height: 'auto', objectFit: 'cover', marginBottom: '20px' }} 
              />
              <Form.Group controlId="formImage" className="mt-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
            <div style={{ flex: 1 }}>
              <h5>Calificación: {anime.rating}/5</h5>
              <Form className="mt-3">
                <Form.Group controlId="formDescription">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Ingrese una descripción del anime" />
                </Form.Group>
              </Form>
              <div className="mt-4">
                <h5>Temporadas</h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Calificación</th>
                      <th>Enlaces</th>
                      <th>Editar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Temporada 1</td>
                      <td>4/5</td>
                      <td>
                        <Button variant="link" onClick={() => alert('Ir a AnimeFLV')}>
                          <img src={LogoAF} alt="AnimeFLV" style={{ width: '24px', marginRight: '4px' }} />
                        </Button>
                        <Button variant="link" onClick={() => alert('Ir a Crunchyroll')}>
                          <img src={LogoCrunchy} alt="Crunchyroll" style={{ width: '24px', marginRight: '4px' }} />
                        </Button>
                      </td>
                      <td>
                        <Button variant="link" onClick={() => handleEditShow({ name: 'Temporada 1', rating: 4, linkAF: '', linkCrunchy: '' })}>
                          <i className="bi bi-pencil-square" style={{ fontSize: '1.2rem' }}></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Temporada 2</td>
                      <td>5/5</td>
                      <td>
                        <Button variant="link" onClick={() => alert('Ir a AnimeFLV')}>
                          <img src={LogoAF} alt="AnimeFLV" style={{ width: '24px', marginRight: '4px' }} />
                        </Button>
                        <Button variant="link" onClick={() => alert('Ir a Crunchyroll')}>
                          <img src={LogoCrunchy} alt="Crunchyroll" style={{ width: '24px', marginRight: '4px' }} />
                        </Button>
                      </td>
                      <td>
                        <Button variant="link" onClick={() => handleEditShow({ name: 'Temporada 2', rating: 5, linkAF: '', linkCrunchy: '' })}>
                          <i className="bi bi-pencil-square" style={{ fontSize: '1.2rem' }}></i>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="primary" className="mt-2" onClick={() => handleEditShow(null)}>
                  Agregar Temporada
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
      <EditSeasonModal 
        show={showEditModal} 
        handleClose={handleEditClose} 
        season={selectedSeason} 
      />
    </>
  );
};

AnimeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  anime: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default AnimeModal;
