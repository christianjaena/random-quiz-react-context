import React, { useEffect, useState } from 'react';
import Question from '../Question/Question.component';
import Score from '../Score/Score.component';
import ScoreContext from '../../context/ScoreContext';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled(Loader)`
	margin-top:300px; 
`;

const QuestionsComponent = () => {
	const [questions, setQuestions] = useState([]);
	const [score, setScore] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);

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
			<ScoreContext.Provider value={addScore}>
				<Question questions={questions} />
			</ScoreContext.Provider>
			<Score score={score} fetchQuestionsOnLoad={fetchQuestionsOnLoad} />
		</div>
	) : (
			<LoaderWrapper
				type='Puff'
				color='#00BFFF'
				height={100}
				width={100}
				timeout={3000}
			/>
	);
};
export default QuestionsComponent;
