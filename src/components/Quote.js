import React from 'react';
import Quotes from '../data/Quotes.json' 
//import Rainbow from '../hoc/Rainbow'

const Quote = (props) => {
    const getId = Math.floor(Math.random()*Quotes.length);
    const data = Quotes[getId];
    // console.log(Quotes.length);
    // console.log(getId);
    // console.log(data);
    return (
        //<div class="container auto blue-text">
        <div className="card-panel center blue lighten-5 z-depth-1">
        <h5> {data.quote}</h5>
        <p className = 'right'> {data.author}</p>
           
        </div>
    )
}

// Wrapped component
//export default Rainbow(About)
export default Quote;