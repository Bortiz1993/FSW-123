import React, { useEffect, useState} from 'react';
import CardList from './CardList';
import SearchInput from './SearchInput';
import AddCards from './AddCards';
import RemoveCard from './RemoveCard';
import DeckBoxTitle from './DeckBoxTitle';

function CardApp() {
    const [cards, setCards] = useState ([]);
    const [searchValue, setSearchValue] = useState('');
    const [savedCards, setSavedCards] = useState([]);

    function handleChange (value){
       setSearchValue(value)
       cardRequest(value)

    }

    

    const cardRequest = async (searchValue) => {
        console.log(searchValue)
    const URL = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${searchValue}`
    const response = await fetch(URL);
    const responseJson = await response.json()

    
    if(responseJson.data){
        console.log(responseJson)
        
        setCards(responseJson.data)
        console.log(responseJson.data[0].card_images)
    }
    
    };

    //function cardRequestArchetype

    const addCard = (card) => {
        const newSavedCards = [...savedCards, card];
        setSavedCards(newSavedCards);
    };

    const RemoveCards = (card) => {
        const newSavedCards = savedCards.filter(
            (savedCards) => savedCards.id !== card.id
        

        );
        setSavedCards(newSavedCards);
       
    }


    useEffect(() => {
        cardRequest("Code Talker");
    }, [searchValue]);


    return (
<div className='Main-Card-Box'>
<div className='row'>
<DeckBoxTitle title='Card Inventory'/>

</div>
<div className='row'>

<SearchInput searchValue={searchValue} setSearchValue={handleChange}/>
</div>
<div className='row, cardRow'>
<CardList cards={cards} Component={AddCards} handleClick={addCard}/>
</div>

<div className='row'>
<DeckBoxTitle title='DeckBox'/>

</div>
<div className='row, savedCardsBox'>
<CardList cards={savedCards} Component={RemoveCard} handleClick={RemoveCards} />
</div>
 

</div>

    )
}

export default CardApp;