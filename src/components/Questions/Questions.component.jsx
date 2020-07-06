import React, { useEffect, useState } from 'react';
import Question from '../Question/Question.component';
import Score from '../Score/Score.component';
import ScoreContext from '../../context/ScoreContext';

const QuestionsComponent = () => {
	const [questions, setQuestions] = useState([]);
	const [score, setScore] = useState(0);

	const addScore = () => {
		setScore(score + 1);
	};

	useEffect(() => {
		const questions = async () => {
			const fetchQuestions = await fetch(
				'https://opentdb.com/api.php?amount=10&type=multiple'
			);
			const response = await fetchQuestions.json();
			setQuestions(response.results);
		};
		questions();
	}, []);
	return (
		<div>
			<ScoreContext.Provider value={addScore}>
				<Question questions={questions} />
			</ScoreContext.Provider>
			<Score score={score} />
		</div>
	);
};
export default QuestionsComponent;
