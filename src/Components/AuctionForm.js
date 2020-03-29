import React, {useContext, useEffect, useState } from 'react';
import {AuctionContext} from '../contexts/auctionContext';


const AuctionForm = ()=>{
 
const{handleAdd} = useContext(AuctionContext)
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [startDate, setStarDate] = useState('');
const [endDate, setEndDate] = useState('');
const [estimate, setEstimate]= useState('');

const [showhide, setShowHide] = useState(false);


const UpdateTitle =(e)=>{
 setTitle(e.target.value);
}
const UpdateDescription =(e)=>{
    setDescription(e.target.value);
}
const UpdateStartdate =(e)=>{
    setStarDate(e.target.value);
}
const UpdateEnddate =(e)=>{
    setEndDate(e.target.value);
}
const UpdateEstimate =(e)=>{
    setEstimate(e.target.value);
}
const addAuction = e => {
    e.preventDefault();

    const obj = {AuktionID:0 , Titel: title , Beskrivning : description, StartDatum:startDate,
        SlutDatum : endDate,
        Utropspris : estimate,
        SkapadAv: 'Asma Rizwan'};
        handleAdd(obj)
}

const showAuction = e => {
    e.preventDefault();
    setShowHide(!showhide);
}

  

   return(<React.Fragment>
             <button onClick={showAuction} >Add</button>
       
        {showhide && <form  >
            <input type = "text" name ="titel" value={title} onChange={UpdateTitle}/>
            <input type = "text" name ="beskrivning" value={description} onChange={UpdateDescription}/>
            <input type = "text" name ="StartDatum" value={startDate} onChange={UpdateStartdate}/>
            <input type = "text" name ="SlutDatum" value={endDate} onChange={UpdateEnddate}/>
            <input type = "text" name ="Utropspris" value={estimate} onChange={UpdateEstimate}/>
        
            <button onClick ={addAuction}>  Submit</button>
            
        </form>}
        </React.Fragment>

    )
}


export default AuctionForm;