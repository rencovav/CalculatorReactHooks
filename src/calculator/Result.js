import React from 'react';

const Result = (props) => {
	const result = props.value;
	if (result || result === 0)
		return <div className="Result">Výsledek je: {result}</div>;
	else return null;
};

export default Result;
