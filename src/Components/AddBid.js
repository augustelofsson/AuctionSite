import React, {useContext, useState, useEffect} from 'react';
import {BidContext} from '../contexts/BidContext';

const AddBid = (props) => {

const {AddBid, GetHighestBid, GetBids, bids} = useContext(BidContext);
const [BidAmount, setBidAmount] = useState(0); 
const [Name, setName] = useState('');
const [error, setError] = useState('');

useEffect(() => {
     GetBids(props.AuktionID)
    console.log(bids)
    
}, []);

const setAmount = (e) => {
    setBidAmount(e.target.value);
}
const setUsername = (e) => {
    setName(e.target.value);
}
const checkBid = (e) => {
    e.preventDefault();
    let highestbid = bids[bids.length - 1].Summa;

    if(highestbid >= BidAmount){
        setError('Budet är för lågt');
    }else{
        const bidData = {
            BudID : 0,
            Summa : BidAmount,
            AuktionID : props.AuktionID,
            Budgivare : Name
        }
        AddBid(bidData);
        GetBids(props.AuktionID);
        setError('');
    }
}
    return ( <div>
            <label>Namn:</label>
            <input type="text" value={Name} onChange={setUsername}></input>
            <input type="number" value={BidAmount} onChange={setAmount}></input>
            <button onClick={checkBid}>Lägg bud</button>
            <br></br>
            <span>{error}</span>
        </div> );
}
 
export default AddBid;