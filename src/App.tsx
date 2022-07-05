import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import SignInView from '../src/components/SignInView/SignInView';
import Feed from '../src/components/Feed/Feed';

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<Routes>
					<Route path='/' element={<SignInView />}></Route>
					<Route path='/feed' element={<Feed />}></Route>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
