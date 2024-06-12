import React from 'react';
import WeatherForecastApp from './components/WeatherComponents';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					Real-time Weather Forecast App
				</h1>
			</header>
			<main>
			<BrowserRouter>
      			<Routes>
        			<Route path="" element={<Login />} />  
        			<Route path="/signup" element={<Signup />} /> 
        			<Route path="/Weatherapp" element={<WeatherForecastApp />} /> 
					{/* <Route path="/login" element={<Login />} /> */}
      			</Routes>
    		</BrowserRouter>
			</main>
			<a href='/'>LogOut</a>
			<footer>
				<p>
					© 2024 Weather App Inc.
					All rights reserved.
				</p>
			</footer>
		</div>
	);
}

export default App;
