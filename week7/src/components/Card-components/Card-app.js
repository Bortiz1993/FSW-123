import React, { useEffect, useState} from 'react';
import CardList from './CardList';



function CardApp() {
    const [cards, setCards] = useState ([]);

    const cardRequest = async () => {
        const URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Code Talker'
    const response = await fetch(URL);
    const responseJson = await response.json()

    
    if(responseJson){
        setCards(responseJson.data)
    }
    console.log(responseJson.data[0].card_images)
    };

    useEffect(() => {
        cardRequest();
    }, []);

   


    return (
<div className='Main-Card-Box'>
<div className='row'>
        <CardList cards={cards}/>
</div>

</div>
    )
}

export default CardApp;