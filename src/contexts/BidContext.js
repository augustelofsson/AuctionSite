import React,{createContext, useState} from 'react'



const API_URL = 'http://nackowskis.azurewebsites.net/api/';
const GROUP_NUM = 2230;

const BidContext = createContext();




export const BidContextProvider = (props) =>  {

    const [bids, setBids] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const GetBids = async (id) => {
        fetch(`${API_URL}bud/${GROUP_NUM}/${id}`)
        .then(res => res.json())
        .then(data => {
            setIsLoading(false);
            setBids(data);
        });
    }

    const AddBid = async (bidData) => {
        fetch(`${API_URL}bud/${GROUP_NUM}/${bidData.AuktionID }`, {
            method: 'POST',
            body : JSON.stringify(bidData)
        })  
        setBids(bidData.AuktionID);       
    }
    const HasBids = async (auctionID) => {

    }

    const GetHighestBid = async (AuktionID) => {
        const bids = await GetBids(AuktionID);
        const highestBid = bids[bids.lenght - 1]
        return highestBid.Summa;
    }

    
return <BidContext.Provider value={{bids, isLoading, GetBids, GetHighestBid, AddBid}}>
    {props.children}
</BidContext.Provider>

}
export default BidContextProvider;