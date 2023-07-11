import React from 'react';

const People = ({people}) => {

    return (
        <div>
            <h2>{people.name}</h2>
            <img src={people.image} alt={people.name}/>
            <h3>{people.agency}</h3>
            <a href={people.wikipedia}>Wiki</a>
        </div>
    );
}

export default People