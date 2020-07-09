import React, { useContext, useEffect } from 'react';

// Component Imports
import Question from '../Question/Question.component';
import Score from '../Score/Score.component';

// Styled Components Imports
import LoaderWrapper from '../../styled-components/LoaderWrapper.styledcomponent';

// Context Imports
import { STATE } from '../../provider/Context.provider';

const QuestionsComponent = () => {
	const { fetchQuestionsOnLoad, isLoaded, questions } = useContext(STATE);
	useEffect(() => {
		fetchQuestionsOnLoad();
	}, []);
	return isLoaded ? (
		<div>
			<Question questions={questions} />
			<Score />
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
