import styled from 'styled-components';

const QuestionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	background-color: #253341;
	-webkit-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);
	padding: 20px;
	border-radius: 20px;
	margin: 20px;
	margin-bottom: 50px;

	p {
		word-break: break-word;
		font-size: 18px;
		color: #fff;
		background-color: #1b1b1b;
		padding: 15px;
		border-radius: 15px;
	}

	h3 {
		margin: 0;
		padding: 0;
		color: #fff;
	}
`;

export default QuestionWrapper;
