import React, { useContext } from 'react';

// Styled Components Imports
import ScoreWrapper from '../../styled-components/ScoreWrapper.styledcomponent';
import StyledButton from '../../styled-components/StyledButton.styledcomponent';

// Context Imports
import { STATE } from '../../provider/Context.provider';
// Utility Imports
import { useHistory } from 'react-router-dom';

const Score = () => {
	const { score, percent, tryAgain } = useContext(STATE);
	const history = useHistory();
	const { pathname } = history.location;
	const milktea = `${pathname}YEYMILKTEAA`;

	return (
		<ScoreWrapper>
			<h1>Score: {score} out of 10</h1>

			{score >= 6 && percent === 100 ? (
				<StyledButton onClick={() => history.push(milktea)}>
					CLAIM MILKTEA!!!
				</StyledButton>
			) : (
				<StyledButton
					onClick={() => {
						tryAgain();
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					style={percent === 100 ? { display: '' } : { display: 'none' }}
				>
					TRY AGAIN
				</StyledButton>
			)}
		</ScoreWrapper>
	);
};

export default Score;
