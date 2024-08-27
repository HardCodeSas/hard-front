import React from 'react';
import anime1 from '../img/anime1.png';
import anime2 from '../img/anime2.png';
import anime3 from '../img/anime3.png';
import AnimeCard from './AnimeCard';
import './AnimeCatalog.css';

const AnimeCatalog = () => {
  const animes = [
    { id: 1, title: 'Anime 1', img: anime1, seasons: 3, rating: 2.9 },
    { id: 2, title: 'Anime 2', img: anime2, seasons: 2, rating: 5 },
    { id: 3, title: 'Anime 3', img: anime3, seasons: 1, rating: 3 },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {animes.map(anime => (
          <AnimeCard 
            key={anime.id} 
            title={anime.title} 
            img={anime.img} 
            seasons={anime.seasons} 
            rating={anime.rating} 
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeCatalog;
