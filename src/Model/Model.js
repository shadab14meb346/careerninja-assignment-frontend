import React from 'react';
import styles from './Model.module.css';

const Model = (props) => {
	const {
		selectedBattle,
		setSelectedBattle,
		modelDisplay,
		setModelDisplay
	} = props;
	console.log(props);
	console.log(selectedBattle, 'FROM MODEL');
	const style = {
		display: modelDisplay
	};

	const handleClick = () => {
		setModelDisplay((prevState) => {
			// setSelectedBattle({});
			if (prevState === 'none') {
				return 'block';
			} else {
				return 'none';
			}
		});
	};
	return (
		<div>
			<div id="myModal" className={styles.modal} style={style}>
				<div className={styles.modal_content}>
					<span className={styles.close} onClick={handleClick}>
						&times;
					</span>
					{Object.entries(selectedBattle).map((element) => {
						const [key, value] = element;
						return (
							<p key={key}>
								<span className={styles.bold}>{key}</span>:{value}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Model;
