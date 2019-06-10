import React, { Component } from 'react';
import './App.css';
import CreditCard from './components/CreditCard';
const renderCardNumber = (number) => {
  number = number.toString();
  let resultStr = ''
  for(let i =0; i < number.length; i += 4) {
    resultStr += number.slice(i, i + 4) + ' '
  }
  return resultStr;
}
const renderValidThru=(nbr)=>
{
  let res=nbr.slice(0,2)+'/'+ nbr.slice(2);
   return res;
}
const renderClientName =(ch)=>
{
   const res=ch.toUpperCase();
   return res;
}
class App extends Component {
 constructor(props)
   {
     super(props)
     this.state={
                  cardNumber :'',
                  clientName :'',
                  validThru :''
                }
   }
   handleNumber = (event) => {
     if ((event.target.value.length <= 16  )&& (!(isNaN(event.target.value))))
       {  this.setState({
                         cardNumber : event.target.value
                       });
       }
   }
   handleName = (event1) => {
    if((event1.target.value.length <= 10  ) && (isNaN(event1.target.value)))
       {  this.setState({
                         clientName : event1.target.value
                        });
       }
  }
  handleValidThru = (event2) => {
    if ((event2.target.value.length <=4  ) && (!(isNaN(event2.target.value))))
       {  this.setState({
                         validThru : event2.target.value
                       });
       }
  }
  render() {
    return (
          <div className='credit-card-with-form'>
             <div className='credit-card-form'>
                <input type='text' onChange={(e1) => this.handleNumber(e1)} value = {this.state.cardNumber}></input>
                <input type='text' onChange={(e2) =>this.handleName(e2)} value = {this.state.clientName}></input>
                <input type='text' onChange={(e3) =>this.handleValidThru(e3)} value = {this.state.validThru}></input>
             </div>   
            <CreditCard cardNumber= {renderCardNumber(this.state.cardNumber.padEnd(16,"*"))}
                   validThru={renderValidThru(this.state.validThru)}
                   clientName={renderClientName(this.state.clientName)} />
          </div>

    );
  }
}

export default App;
