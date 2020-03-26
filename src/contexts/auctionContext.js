import React, { createContext, useEffect } from 'react';

const AuctionContext = createContext();

export const AuctionProvider = () => {
    const [auctions, setAuctions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // FUNKTIONER!

    useEffect(() => {
        
    }, [auctions, isLoading])

    return <AuctionContext.Provider value={{ auctions, setAuctions }} />
}

export default AuctionContext;
