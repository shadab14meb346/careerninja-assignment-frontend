import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';
import Suggestion from './Suggestion/Suggestion';
import Model from './Model/Model';
import styles from './App.module.css';

function App() {
	const [inputText, setInputText] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [selectedBattle, setSelectedBattle] = useState({});
	const [modelDisplay, setModelDisplay] = useState('none');
	useEffect(() => {
		const fetch = async () => {
			const response = await axios.get(
				`http://localhost:5000/battle-api/query?q=${inputText}`
			);
			setSuggestions(response.data.data);
		};
		fetch();
	}, [inputText]);
	// console.log(selectedBattle);
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<SearchBar setInputText={setInputText} />
				<Suggestion
					suggestions={suggestions}
					setSelectedBattle={setSelectedBattle}
					setModelDisplay={setModelDisplay}
				/>
				<Model
					setSelectedBattle={setSelectedBattle}
					setModelDisplay={setModelDisplay}
					modelDisplay={modelDisplay}
					selectedBattle={selectedBattle}
				/>
			</div>
		</div>
	);
}

export default App;
