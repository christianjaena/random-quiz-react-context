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

const StyledButton = styled.button`
	height: 50px;
	width: 100px;
	outline: none;
	border: none;
	background-color: #1b1b1b;
	color: white;
	padding: 10px;
	font-family: Dank Mono;
	font-size: 15px;
	border-radius: 15px;
`
const Score = ({ score, fetchQuestionsOnLoad }) => {
	return (
		<ScoreWrapper>
			<h1>Score: {score} out of 10</h1>
			<StyledButton
				onClick={() => {
					fetchQuestionsOnLoad();
					window.location.reload();
				}}
			>
				Try Again
			</StyledButton>
		</ScoreWrapper>
	);
};

export default Score;
