import { createContext } from 'react';

const ScoreContext = createContext({
	score: 0,
	addScore: () => { }
});


export default ScoreContext;
