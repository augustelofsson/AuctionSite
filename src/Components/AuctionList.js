import React, {useContext, useEffect, useState } from 'react';
import {AuctionContext} from '../contexts/auctionContext';

const AuctionList=()=>{

    const {auctions} = useContext(AuctionContext);
 
    let list = auctions.map(product=>{
        return (<li><h3> {product.Titel} </h3><p>{product.Beskrivning}</p></li>)

    });
    
    return(
        <div> 
            <ul>{list}</ul>
        </div>
    )

}
export default AuctionList;

