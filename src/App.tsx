import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import { isUserSignedIn, initFirebaseAuth } from '../src/utils/setupDatabase';
import SignInView from '../src/components/SignInView/SignInView';
import Feed from '../src/components/Feed/Feed';

function App() {
	useEffect(() => {
		initFirebaseAuth();
	});

	return (
		<div className='App'>
			<HashRouter>
				<Routes>
					<Route path='/feed' element={<Feed />}></Route>
					<Route path='/' element={<SignInView />}></Route>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
