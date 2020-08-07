import React from 'react';
import styles from './Suggestion.module.css';

const Suggestion = ({suggestions, setSelectedBattle, setModelDisplay}) => {
	const handleClick = (clickedBattle) => {
		console.log(clickedBattle);
		setSelectedBattle(clickedBattle);
		setModelDisplay((prevState) => {
			setSelectedBattle({});
			if (prevState === 'none') {
				return 'block';
			} else {
				return 'none';
			}
		});
	};
	return (
		<div className={styles.container}>
			<div className={`${styles.wrapper} ${styles.autocomplete}`}>
				{suggestions.map((suggestion) => {
					return (
						<div
							onClick={() => handleClick(suggestion.completeObj)}
							className={styles.autocomplete_items}
							key={suggestion.completeObj._id}>
							{suggestion.completeObj.name}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Suggestion;
