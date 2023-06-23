import React from 'react';
import Header from '../../components/Header/Header'
import SavedMovies from '../../components/SavedMovies/SavedMovies'
import Footer from '../../components/Footer/Footer'

function SavedMoviesPage({ loggedIn, savedMovies, onDeleteMovie }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SavedMovies savedMovies={savedMovies} onDeleteMovie={onDeleteMovie} />
      <Footer />
    </>
  );
}

export default SavedMoviesPage;