import {Routes, Route} from "react-router-dom";
import {People} from "./People.jsx";
import {Navigation} from "./Navigation.jsx";
import {useEffect, useState} from "react";
import {Home} from "./Home.jsx";
import "./../styles/Dashboard.css"

export function Dashboard() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("token")))
	}, []);
	
	// console.log(user)
	if (user)
		return (<>
			<div className={"DashboardWrapper"}>
				
				<Navigation user={user}/>
				<div className={"contentWrapper"}>
					<Routes>
						<Route path="/" element={<Home/>}/>
					</Routes>
				</div>
			</div>
		</>)
	else {
		return (<>
			<h1>Not logged in</h1>
		</>)
	}
}

