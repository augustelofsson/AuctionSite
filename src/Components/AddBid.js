import React, {useContext, useState, useEffect} from 'react';
import {BidContext} from '../contexts/BidContext';

const AddBid = (props) => {

const {AddBid, GetBids, bids} = useContext(BidContext);
const [BidAmount, setBidAmount] = useState(0); 
const [Name, setName] = useState('');
const [error, setError] = useState('');


useEffect(() => {
    GetBids(props.value)
}, []);

const setAmount = (e) => {
    setBidAmount(e.target.value);
}
const setUsername = (e) => {
    setName(e.target.value);
}
const checkBid = e => {
    e.preventDefault();
    let highestbid = bids[bids.length - 1].Summa;

    if(highestbid >= BidAmount){
        setError('Budet är för lågt');
    }else{
        const bidData = {
            BudID : 0,
            Summa : BidAmount,
            AuktionID : props.value,
            Budgivare : Name
        }
        AddBid(bidData);
        GetBids(props.value);
        setError('');
    }
}
    return ( <div>
            <div>
            <input type="text" value={Name} onChange={setUsername} placeholder='Namn...' />
            </div>
            <div>
            <input type="number" value={BidAmount} onChange={setAmount} />
            </div>
            <div>
            <button onClick={checkBid}>Lägg bud</button>
            </div>
            <span>{error}</span>
        </div> );
}
 
export default AddBid;