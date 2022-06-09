import React from "react";
import Nav from "./Nav";
import ItemList from "./ItemList";
import DisplayTiles from "./DisplayTiles";
import Filter from "./Filter";

import hogs from "../porkers_data";
console.log(hogs)

function App() {
	
	// const eachHog = hogs.map((hogObj) => {
	// 	return (<ItemList name={hogObj.name} image={hogObj.image} />
	// 	)
	// })
	
	return (
		<div className="App">
			<Nav />
			<ItemList hogs={hogs} />
		</div>
	);
}

export default App;
