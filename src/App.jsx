import { useState } from 'react';
import './App.css';
import CommentCard from './components/ChatCard';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1 style={{ textAlign: 'center' }}>Interactive Chat</h1>
			<CommentCard />
		</div>
	);
}

export default App;
