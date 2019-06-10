import React from "react";
 const CreditCard = ({cardNumber,validThru,clientName})=>
{
    return (
      <div className="credit-card">
         <div className="credit-card-contnent">
            <h1 className="credit-card-title">CREDIT CARD</h1>
            <div className="credit-card-chip"/>
            <div className="credit-card-text">
                <h1 className="credit-card-cardnumber">{cardNumber}</h1>
                <h1 className="credit-card-validthru">{validThru}</h1>
                <h1 className="credit-card-cardholder">{clientName}</h1>
            </div>
            <div className="credit-card-logo"> 
                <img src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg"/>
             </div>
         </div> 
      </div>
  );
}       


export default CreditCard ;