import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const AppWrapper = styled.div`
	display: flex;
	height: auto;
	justify-content: center;
	align-items: center;
	font-family: Dank Mono;
`;

ReactDOM.render(
	<Router>
		<AppWrapper>
			<App />
		</AppWrapper>
	</Router>,
	document.getElementById('root')
);
