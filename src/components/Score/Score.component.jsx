import React, { useContext } from 'react';

// Styled Components Imports
import ScoreWrapper from '../../styled-components/ScoreWrapper.styledcomponent';
import StyledButton from '../../styled-components/StyledButton.styledcomponent';

// Context Imports
import PercentContext from '../../context/PercentContext';
import ScoreContext from '../../context/ScoreContext';

const Score = ({ fetchQuestionsOnLoad }) => {
	const percent = useContext(PercentContext);
	const score = useContext(ScoreContext);

	return (
		<ScoreWrapper>
			<h1>Score: {score.score} out of 10</h1>
			<StyledButton
				onClick={() => {
					fetchQuestionsOnLoad();
					window.location.reload();
				}}
				style={
					percent.percent === 100 ? { display: '' } : { display: 'none' }
				}
			>
				Try Again
			</StyledButton>
		</ScoreWrapper>
	);
};

export default Score;
