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
	font-family: Dank Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
		'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
`;

ReactDOM.render(
	<Router>
		<AppWrapper>
			<App />
		</AppWrapper>
	</Router>,
	document.getElementById('root')
);
