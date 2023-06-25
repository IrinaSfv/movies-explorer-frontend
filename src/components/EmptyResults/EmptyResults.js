import React from 'react';

function EmptyResults({ title }) {
    return (
        <div className="cards__text-container">
            <h2 className="cards__text">{title}</h2>
        </div>
    );
}

export default EmptyResults;