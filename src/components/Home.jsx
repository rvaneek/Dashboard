import {Routes, Route} from "react-router-dom";
import {People} from "./People.jsx";
import {Navigation} from "./Navigation.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import "./../styles/Home.css"

export function Home() {
	const [users, setUsers] = useState(null);
	const [products, setProducts] = useState(null);
	useEffect(() => {
		axios.get("http://localhost:3000/user")
			.then((response) => setUsers(response.data))
			.catch(() => toast.error("User Data Fetch Failed"))
		
		axios.get("http://localhost:3000/products").then(response => setProducts(response.data)).catch(() => toast.error("Product Data Fetch Failed"))
	}, []);
	
	// console.log(user)
	
	return (<>
		<div className="HomeWrapper">
			<div className="Section1">
				{products !== null ? products.map((obj, index) => {
					return (<div key={index}>
					
					
					</div>)
				}) : ""}
			</div>
			
			<div className={"Section2"}>
				{users !== null ?
					<table className={"UserTable"}>
						<tbody>
						
						{users.map((user, index) => {
							if (index < 10)
								return (<tr>
									<td>{index + 1}.</td>
									<td>
										<img src={user.img} alt=""/>
									</td>
									
									<td>
										<p>{user.name}</p>
									</td>
									
									<td>
										<p>{user.email}</p>
									</td>
									
									<td>
										<button>Update</button>
									</td>
									
									<td>
										<button>Delete</button>
									</td>
								</tr>)
						})}
						</tbody>
					</table>
					: " "}
			</div>
		
		</div>
	</>)
}

