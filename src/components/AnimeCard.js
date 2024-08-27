import React, { useState } from 'react'; // Importa useState aquí
import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import AnimeModal from './AnimeModal';

const AnimeCard = ({ title, img, seasons, rating }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {`Número de temporadas: ${seasons}`}
    </Tooltip>
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<i key={i} className="fas fa-star text-warning"></i>); // estrella llena
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>); // media estrella
      } else {
        stars.push(<i key={i} className="far fa-star text-muted"></i>); // estrella vacía
      }
    }
    return stars;
  };

  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card" onClick={handleShow}>
            <img src={img} className="card-img-top" alt={title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title">
                {title}
                <div>{renderStars(rating)}</div>
              </h5>
            </div>
          </div>
        </div>
      </OverlayTrigger>

      <AnimeModal show={show} handleClose={handleClose} anime={{ title, img, rating }} />
    </>
  );
};

AnimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  seasons: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default AnimeCard;
