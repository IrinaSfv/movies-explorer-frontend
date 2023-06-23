import React from 'react';
import Header from '../../components/Header/Header'
import Movies from '../../components/Movies/Movies'
import Footer from '../../components/Footer/Footer'

function MoviesPage({ loggedIn, savedMovies, onSaveMovie, onDeleteMovie, searchQuery, filteredMovies, isCheckboxActive, onSearch, onFilter, isShortsActive }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Movies
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        searchQuery={searchQuery}
        filteredMovies={filteredMovies}
        isCheckboxActive={isCheckboxActive}
        onSearch={onSearch}
        onFilter={onFilter}
        isShortsActive={isShortsActive}
      />
      <Footer />
    </>
  );
}

export default MoviesPage;