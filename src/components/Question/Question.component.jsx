import React, { useState } from 'react';
import Choices from '../Choices/Choices.component';
import he from 'he';
import styled from 'styled-components';
import { Line } from 'rc-progress';
import PercentContext from '../../context/PercentContext';
import Particles from 'react-particles-js';

const QuestionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	background-color: #253341;
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
		color: #fff;
		background-color: #1b1b1b;
		padding: 15px;
		border-radius: 15px;
	}

	h3 {
		margin: 0;
		padding: 0;
		color: #fff;
	}
`;

const ProgressBar = styled(Line)`
	position: sticky;
	top: 0;
	width: 100%;
`;

const StyledParticles = styled(Particles)`
	position: fixed;
	z-index: -1;
	width: 100%;
	height: 100%;
`;


const QuestionComponent = ({ questions }) => {
	const [percent, setPercent] = useState(0);

	const addPercent = () => {
		setPercent(percent + 10);
	};

	const colors = [
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'indigo',
		'violet',
	];

	return (
		<div>
			<ProgressBar percent={percent} strokeWidth='2' strokeColor='#00BFFF' />
			{questions.map((item, index) => {
				const {
					category,
					question,
					correct_answer,
					incorrect_answers,
				} = item;
				return (
					<QuestionWrapper
						style={{
							border: `2px solid ${
								colors[Math.floor(Math.random() * colors.length)]
							}`,
						}}
						key={index}
					>
						<h3>{category.toUpperCase()}</h3>
						<p>{he.unescape(question)}</p>
						<StyledParticles
							params={{
								particles: {
									number: {
										value: 25,
									},
									size: {
										value: 3,
									},
								},
							}}
						/>
						<PercentContext.Provider
							value={{ percent: percent, addPercent: addPercent }}
						>
							<Choices
								correctAnswer={correct_answer}
								wrongAnswers={incorrect_answers}
								answers={[correct_answer, ...incorrect_answers]}
								index={index}
							/>
						</PercentContext.Provider>
					</QuestionWrapper>
				);
			})}
		</div>
	);
};

export default QuestionComponent;
