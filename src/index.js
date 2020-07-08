import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';


const AppWrapper = styled.div`
	display: flex;
	height: auto;
	justify-content: center;
	align-items: center;
	font-family: Dank Mono;
`;

ReactDOM.render(
	<AppWrapper>
		<App />
	</AppWrapper>,
	document.getElementById('root')
);
