import React from 'react';
// import './Card.css';


const Card = ({name,email,id}) => {
    // const {name,email,id} = props;
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200*200`}></img>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
