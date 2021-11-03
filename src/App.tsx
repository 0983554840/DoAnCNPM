import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './route';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div>
			<Router></Router>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{/* Same as */}
			<ToastContainer />
		</div>
	);
}

export default App;
