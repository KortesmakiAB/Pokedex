import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, exp }) => {
    return (
        <div className="Pokecard">
            <h4> { name }</h4>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
            <span>Type: { type }</span>
            <span>Experience: { exp }</span>
        </div>
    );
};

export default Pokecard;