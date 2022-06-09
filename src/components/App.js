import React from "react";
import Nav from "./Nav";
import ItemList from "./ItemList";
//import Filter from "./Filter";

import hogs from "../porkers_data";
//console.log(hogs)

function App() {

	return (
		<div className="App">
			<Nav />
			<ItemList hogs={hogs} />
		</div>
	);
}

export default App;
