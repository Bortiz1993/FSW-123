

function CardList(props){
    const Component = props.Component;
    
return (
    <div className='card-list-box '>
        {props.cards.map((card, index) => (
           <div className= 'card-image-box'>
           <img src={card.card_images[0].image_url} key={index} alt='card'/>
           {console.log(card.card_images[0].image_url)}
           <div onClick={() => props.handleClick(card)} className='overlay'>
               <Component/>
                         </div>
           </div> 
        ))}
    </div>
)

}

export default CardList;