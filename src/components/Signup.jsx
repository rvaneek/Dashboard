import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {useNavigate} from "react-router-dom";

export function Signup() {
	const navigate = useNavigate();
	const [data, setData] = useState(null)
	const email = useRef();
	const password = useRef();
	
	useEffect(() => {
		if (localStorage.getItem("token")) {
			toast.success("Login Found")
			setTimeout(() => navigate("/dashboard"), 3000)
		}
		
		axios.get("http://localhost:3000/admin").then((res) => {
			setData(res.data)
		}).catch((e) => toast.error("Data fetch failed."));
	}, []);
	
	return (<>
		<div className="Login_Wrapper">
			<form onSubmit={(e) => {
				e.preventDefault()
				console.log(email.current.value.toLowerCase())
				const found = data.filter((obj) => obj.email === email.current.value.toLowerCase() && obj.password === password.current.value)
				console.log(found)
				if (found.length > 0) {
					toast.success("Login Successful");
					setTimeout(() => navigate("/dashboard"), 1000)
					localStorage.setItem("token", JSON.stringify(found[0]))
				}
				
			}}>
				
				<input ref={email} type="text" placeholder="Email address"/>
				<input ref={password} type="password" placeholder="Password"/>
				<input type="submit" value="Login"/>
			
			</form>
		</div>
	</>)
}