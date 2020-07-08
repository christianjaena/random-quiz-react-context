import styled from 'styled-components';

const ChoicesWrapper = styled.div`
	border: 1px solid #444;
	width: auto;
	padding: 20px 40px;
	margin: 10px;
	border-radius: 15px;
	cursor: pointer;
	color: #fff;
	background-color: #202E3A;
	&:hover {
		background-color: #e9ebee;
		color: #222;
		font-weight: bold;
		transition: 0.2ms ease-in-out;
	}
`;

export default ChoicesWrapper;