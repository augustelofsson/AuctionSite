import React, { useState, useEffect } from 'react';
import AddBid from './AddBid';
import BidList from './BidList';


const AuctionDetailed = (props) => {

    const date = Date.now();
    const [isOpen, setIsOpen] = useState(true);

    
    useEffect(() => {
        const auctionEndDate = Date.parse(props.SlutDatum)
        if(date < auctionEndDate){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    }, [])
    
    
    
    return ( <div>
        <h3>{props.values.Titel}</h3>
        <h4>{props.values.Beskrivning}</h4>
        <p>Utropspris: {props.values.Utropspris}</p>
        <p>StartDatum: {props.values.StartDatum}</p>
        <p>SlutDatum: {props.values.SlutDatum}</p>
        {isOpen ? 
        <div>
            <p>Status: Öppen</p>
            <div>
            <AddBid value={props.AuktionID}/>
            </div>
        </div> 
        :
        <div>
            <p>Status: Avslutad</p>
        </div>
        }
        <div>
            <BidList value={props.AuktionID}/>
        </div>
    </div> );
}
 
export default AuctionDetailed;