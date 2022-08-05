import React, { useState } from 'react';

const Lamp = () => {
	const [onOff, setonOff] = useState('off');

	const toggleonOff = () => {
		if (onOff === 'off') {
			setonOff('on');
		} else {
			setonOff('off');
		}
	};

	return (
		<div className="lamp-container">
			<div className={`circle ${onOff}`}></div>
			<button onClick={toggleonOff} className="btn">
				{onOff}
			</button>
		</div>
	);
};

export default Lamp;
