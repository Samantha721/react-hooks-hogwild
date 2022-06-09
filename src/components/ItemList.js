import React from "react"
import Item from "./Item"

// const ItemList = ({name, image}) => {
//     return(
//         <div>
//             <p>{name}</p>
//             <img src={image} alt="" />
//         </div>
//     )
// }

const ItemList = (props) => {
    //console.log(props.hogs)
    const hogs = props.hogs
    console.log(hogs)
    
    const eachHog = hogs.map((hog) => {
        return (hog)
    })


    return(
        <ul>
        </ul>    
    )
}

//* <Item name={hog.name} image={hog.image}/>


export default ItemList