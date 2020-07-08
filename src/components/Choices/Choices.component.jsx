import React, { useState, useContext, useEffect } from 'react';

// Styled Components Imports
import ChoicesWrapper from '../../styled-components/ChoicesWrapper.styledcomponent';

// Context Imports
import ScoreContext from '../../context/ScoreContext';
import PercentContext from '../../context/PercentContext';

// Utility Imports
import _ from 'lodash';
import he from 'he';

const ChoicesComponent = ({ correctAnswer, answers }) => {
	const [isAnswersShown, setAnswersShown] = useState(false);
	const [choices, setChoices] = useState([]);

	const percent = useContext(PercentContext);
	const score = useContext(ScoreContext);

	const mapNumsToLetters = {
		1: 'a',
		2: 'b',
		3: 'c',
		4: 'd',
	};

	useEffect(() => {
		setChoices(_.shuffle(answers));
	}, []);

	const pickAnswer = (answer, index) => {
		setAnswersShown(true);
		percent.addPercent();
		if (answer === correctAnswer) {
			score.addScore();
			correctAnswerSoundEffect();
		} else {
			wrongAnswerSoundEffect();
		}
	};

	const wrongAnswerSoundEffect = () => {
		document.getElementById('wrong-answer').play();
	};

	const correctAnswerSoundEffect = () => {
		document.getElementById('correct-answer').play();
	};

	const showAnswer = item => {
		return correctAnswer === item
			? { backgroundColor: '#458728', pointerEvents: 'none' }
			: { backgroundColor: '#BD2A2A', pointerEvents: 'none' };
	};

	return (
		<div>
			{choices.map((item, idx) => {
				return (
					<ChoicesWrapper
						key={idx}
						onClick={() => pickAnswer(item)}
						style={isAnswersShown ? showAnswer(item) : null}
					>
						{mapNumsToLetters[idx + 1].toUpperCase()}.{he.unescape(item)}
					</ChoicesWrapper>
				);
			})}
		</div>
	);
};

export default ChoicesComponent;
