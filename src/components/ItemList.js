import React from "react"
import Item from "./Item"

const ItemList = (props) => {
    console.log(props)
    console.log(props.hogs)
    const hogs = props.hogs
    //console.log(hogs)
    
    const eachHog = hogs.map((hog) => {
        return (
            <Item 
                key={hog.name} 
                name={hog.name} 
                image={hog.image}
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                medal={hog["highest medal achieved"]}
            />
        )
    })

    return (
        <div className="PigList">
            <label>
                <input type="checkbox" />
                Only show hogs that are greased
            </label>

            <br></br>
            
            <select name="filter" style={{margin:"20px", padding: "10px"}}>
                <option value="All">Filter by category</option>
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>

            <br></br>
            
            <div className="ui grid container">
                {eachHog}
            </div>  
        </div>
    ) 
}

export default ItemList