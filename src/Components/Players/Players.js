import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Players.css'

const Players = () => {

        const [countries, setCountries] = useState([]);
            
    useEffect(()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=Spain')
        .then(res => res.json())
        .then(data => setCountries(data.teams))
    },[])
        const [cart, setCart] = useState([]);
    
        const addToCartHandle = (country) => {
       const newCart = [...cart , country];
       setCart(newCart);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row row-cols-1 row-cols-md-3 m-5'>
                       {
                           countries.map(country => <Country
                           country={country}
                           key={country.idTeam}
                           event={addToCartHandle}
                           ></Country>)
                       }
                    </div>
                </div>

                <div className='col-md-3 bg-danger border border-success '>
                    <div className='cart-summay'>
                        <h3>countries summary</h3>
                        <p>Selected Team : {cart.length}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Players;