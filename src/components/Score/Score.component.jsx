import React, { useContext } from 'react';

// Styled Components Imports
import ScoreWrapper from '../../styled-components/ScoreWrapper.styledcomponent';
import StyledButton from '../../styled-components/StyledButton.styledcomponent';

// Context Imports
import PercentContext from '../../context/PercentContext';
import ScoreContext from '../../context/ScoreContext';

// Utility Imports
import { useHistory } from 'react-router-dom';

const Score = () => {
	const percent = useContext(PercentContext);
	const score = useContext(ScoreContext);
	const history = useHistory();
	const { pathname } = history.location;
	const milktea = `${pathname}YEYMILKTEAA`;

	return (
		<ScoreWrapper>
			<h1>Score: {score.score} out of 10</h1>

			{score.score >= 6 && percent.percent === 100 ? (
				<StyledButton onClick={() => history.push(milktea)}>
					CLAIM MILKTEA!!!
				</StyledButton>
			) : (
				<StyledButton
					onClick={() => {
						percent.tryAgain();
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					style={
						percent.percent === 100
							? { display: '' }
							: { display: 'none' }
					}
				>
					TRY AGAIN
				</StyledButton>
			)}
		</ScoreWrapper>
	);
};

export default Score;
