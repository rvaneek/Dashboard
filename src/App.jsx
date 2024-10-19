import {useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import {Signup} from "./components/Signup.jsx";
import {ToastContainer} from "react-toastify";
import {Dashboard} from "./components/Dashboard.jsx";

function App() {
	const [count, setCount] = useState(0)
	
	
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<Signup/>}/>
					<Route path="/Dashboard" element={<Dashboard/>}/>
				</Routes>
				<ToastContainer theme={"dark"}/>
			</BrowserRouter>
		</>
	)
}

export default App
