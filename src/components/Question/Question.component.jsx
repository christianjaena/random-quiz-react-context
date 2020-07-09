import React, { useContext } from 'react';

// Component Imports
import Choices from '../Choices/Choices.component';

// Styled Components Imports
import QuestionWrapper from '../../styled-components/QuestionWrapper.styledcomponent';
import ProgressBar from '../../styled-components/ProgressBar.styledcomponent';
import StyledParticles from '../../styled-components/StyledParticles.styledcomponent';

// Context Imports
import {STATE} from '../../provider/Context.provider'
// Utility Imports
import he from 'he';

const QuestionComponent = ({ questions }) => {
	const {percent} = useContext(STATE);
	const colors = [
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'indigo',
		'violet',
	];

	const styledParticlesOptions = {
		particles: {
			number: {
				value: 25,
			},
			size: {
				value: 3,
			},
		},
	};

	return (
		<div>
			<ProgressBar
				percent={percent}
				strokeWidth='2'
				strokeColor='#00BFFF'
			/>
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
						<StyledParticles params={styledParticlesOptions} />
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
