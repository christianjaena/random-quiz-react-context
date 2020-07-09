import React, { useEffect, useState } from 'react';

// Component Imports
import Question from '../Question/Question.component';
import Score from '../Score/Score.component';

// Styled Components Imports
import LoaderWrapper from '../../styled-components/LoaderWrapper.styledcomponent';

// Context Imports
import ScoreContext from '../../context/ScoreContext';
import PercentContext from '../../context/PercentContext';


const QuestionsComponent = () => {
	const [questions, setQuestions] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [score, setScore] = useState(0);
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

	const tryAgain = () => {
		setQuestions([]);
		setPercent(0);
		setScore(0);
		setIsLoaded(false);
		fetchQuestionsOnLoad();
	}

	useEffect(() => {
		fetchQuestionsOnLoad();
	}, []);

	return isLoaded ? (
		<div>
			<PercentContext.Provider value={{ percent, addPercent, tryAgain }}>
				<ScoreContext.Provider value={{ score, addScore }}>
					<Question questions={questions} />
					<Score/>
				</ScoreContext.Provider>
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
