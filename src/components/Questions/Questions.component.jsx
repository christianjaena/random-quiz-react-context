import React, { useEffect, useState } from 'react';
import Question from '../Question/Question.component';
import Score from '../Score/Score.component';
import ScoreContext from '../../context/ScoreContext';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import PercentContext from '../../context/PercentContext';

const LoaderWrapper = styled(Loader)`
	margin-top: 300px;
`;

const QuestionsComponent = () => {
	const [questions, setQuestions] = useState([]);
	const [score, setScore] = useState(0);

	const [isLoaded, setIsLoaded] = useState(false);
	const [percent, setPercent] = useState(0);

	const addPercent = () => {
		setPercent(percent + 10);
	};

	const addScore = () => {
		setScore(score + 1);
	};

	const fetchQuestionsOnLoad = async () => {
		const fetchQuestions = await fetch(
			'https://opentdb.com/api.php?amount=10&type=multiple'
		);
		const response = await fetchQuestions.json();
		setQuestions(response.results);
		setIsLoaded(true);
	};

	useEffect(() => {
		fetchQuestionsOnLoad();
	}, []);

	return isLoaded ? (
		<div>
			<PercentContext.Provider value={{percent: percent, addPercent: addPercent}}>
				<ScoreContext.Provider value={addScore}>
					<Question questions={questions} />
				</ScoreContext.Provider>
				<Score
					score={score}
					fetchQuestionsOnLoad={fetchQuestionsOnLoad}
				/>
			</PercentContext.Provider>
		</div>
	) : (
		<LoaderWrapper
			type='Grid'
			color='#00BFFF'
			height={100}
			width={100}
			timeout={3000}
		/>
	);
};
export default QuestionsComponent;
