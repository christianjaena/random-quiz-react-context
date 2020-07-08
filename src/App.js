import React from 'react';
import Questions from './components/Questions/Questions.component';

const App = () => {
	return (
		<div>
			<audio
				src='https://www.bensound.com/bensound-music/bensound-thejazzpiano.mp3'
				autoPlay
				loop
			/>
			<audio
				id='wrong-answer'
				src='https://freesound.org/people/KevinVG207/sounds/331912/download/331912__kevinvg207__wrong-buzzer.wav'
			/>
			<audio
				id='correct-answer'
				src='https://freesound.org/people/JapanYoshiTheGamer/sounds/361263/download/361263__japanyoshithegamer__8-bit-correct-answer.wav'
			/>
			<Questions />
		</div>
	);
};

export default App;
