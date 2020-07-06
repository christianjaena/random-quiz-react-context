import React from 'react';
import styled from 'styled-components';

const ScoreWrapper = styled.div`
	text-align: center;
	border-radius: 15px;
	background-color: #fff;
	padding: 20px 0;
	margin-bottom: 20px;
	border: 2px solid black;
`;

const Score = ({ score }) => {
	return (
		<ScoreWrapper>
			<h1>Score: {score} out of 10</h1>
			<p>Refresh to answer new questions!</p>
		</ScoreWrapper>
	);
};

export default Score;
