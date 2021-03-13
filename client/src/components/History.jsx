import React, {useState, useEffect} from 'react';


export default function History({result})  {
  console.log(result);
  


  {
    if(!result) {
      return "Loading..."
    }
  }

    return (
      <section className="result-container">
        <div className="results">
            <div className="resultados">
                <a> resultados: {console.log(result)} </a> 
            </div>
      </div>
    </section>
    )
}