import React from 'react';
import Choices from '../Choices/Choices.component';
import he from 'he';
import styled from 'styled-components';

const QuestionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	background-color: #fff;

	-webkit-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);
	padding: 20px;
	border-radius: 20px;
	margin: 20px;
	margin-bottom: 50px;
	p {
		word-break: break-word;
		font-size: 18px;
		background-color: #e9ebee;
		padding: 15px;
		border-radius: 15px;
	}

	h3 {
		margin: 0;
		padding: 0;
	}
`;

const QuestionComponent = ({ questions }) => {
	return (
		<div>
			{questions.map((item, index) => {
				const {
					category,
					question,
					correct_answer,
					incorrect_answers,
				} = item;
				return (
					<QuestionWrapper key={index}>
						<h3>{category}</h3>
						<p>{he.unescape(question)}</p>
						<Choices
							correctAnswer={correct_answer}
							wrongAnswers={incorrect_answers}
							answers={[correct_answer, ...incorrect_answers]}
							index={index}
						/>
					</QuestionWrapper>
				);
			})}
		</div>
	);
};

export default QuestionComponent;
