
//when item is clicked, display other details about the hog

const Item = ({name, image, specialty, weight, greased, metal}) => {
    
    console.log(metal)

    const handleClick = () => {
        console.log("clicked!")
        
        return(
            <ul>
                <li>specialty: {specialty}</li>
                <li>weight: {weight}</li>
                <li>greased: {greased}</li>
                <li>metal: {metal}</li>
            </ul>
        )
    }
    
    return (
        <div onClick={handleClick} className="ui eight wide column" style={{padding: "5px", outline: "#3B0B0B dotted thick"}}>
            <h3>{name}</h3>
            <img className="tileImg" src={image} alt={name}/>
        </div>
    )
}

export default Item