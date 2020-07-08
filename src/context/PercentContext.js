import { createContext } from 'react';

const PercentContext = createContext({
	percent: 0,
	addPercent: () => {},
});

export default PercentContext;
