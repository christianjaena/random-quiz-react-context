import React, { createContext, useState } from 'react';

export const STATE = createContext({
	isLoaded: null,
	percent: 0,
	score: 0,
	addPercent: () => {},
	tryAgain: () => {},
	addScore: () => {},
	fetchQuestionsOnLoad: () => {}
});

const ContextProvider = ({ children }) => {
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
	};

	return (
		<STATE.Provider
			value={{
				isLoaded,
				percent,
				score,
				questions,
				addPercent,
				tryAgain,
				addScore,
				fetchQuestionsOnLoad,
			}}
		>
			{children}
		</STATE.Provider>
	);
};

export default ContextProvider;
