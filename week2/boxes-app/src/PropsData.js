

function PropsData(props) {

  //  const bgColorR = {
   //     background: "red",
   //     width: "175px"
//}
    return (
        <div className = "MainProps" style = {
            {
                backgroundColor: props.bgColor, width: props.width
            }
        } > 
        <h3 >{props.title}</h3>
        <h4>{props.subTitle}</h4>
        <h5>{props.description}</h5>
        </div>
    );
}

// const bgColorO = {
//     background: "orange",
//     width: "175px"
// }

// function PropsData2({title, subTitle, description}){

//     return (
//     <div className = "MainProps" style = {bgColorO}>
//     <h3>{title}</h3>
//     <h4>{subTitle}</h4>
//     <h5>{description}</h5>
//     </div>
//     );
// }

// const bgColorY = {
//     background: "Yellow",
//     width: "175px"
// }
// function PropsData3({title, subTitle, description}){

//     return (
//     <div className = "MainProps" style = {bgColorY}>
//     <h3>{title}</h3>
//     <h4>{subTitle}</h4>
//     <h5>{description}</h5>
//     </div>
//     );
// }

// const bgColorG = {
//     background: "green",
//     width: "175px"
// }
// function PropsData4({title, subTitle, description}){

//     return (
//     <div className = "MainProps" style= {bgColorG}>
//     <h3>{title}</h3>
//     <h4>{subTitle}</h4>
//     <h5>{description}</h5>
//     </div>
//     );
// //}




export default  PropsData

  