import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({setInputText}) => {
	const handleChange = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h3>Search Battles in GOT</h3>
				<input type="text" placeholder="Search" onChange={handleChange} />
			</div>
		</div>
	);
};

export default SearchBar;
