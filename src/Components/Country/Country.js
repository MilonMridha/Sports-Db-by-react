import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Country = (props) => {
    const {country, event} = props;
    const {strTeamBadge, strCountry, strDescriptionEN, strGender} = country;
    return (
        <div>
            <div className="card mt-4">
  <img src={strTeamBadge} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name: {strCountry}</h5>
    <p className="card-text">Gender : {strGender}</p>
    <p className="card-text">{strDescriptionEN.slice(0,150)}</p>
    
    <button onClick={() => event(country)} href="/" className="btn btn-success">Add To Cart <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
  </div>
</div>
        </div>
    );
};

export default Country;