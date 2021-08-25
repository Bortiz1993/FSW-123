
function CardList(props){
return (
    <div>
        {props.cards.map((card, index) => (
           <div className= 'card-image-container'>
           <img src={card.card_images} key={index} alt='card'></img>
           </div> 
        ))}
    </div>
)
}

export default CardList;