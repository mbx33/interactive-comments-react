import './App.css';
import CommentCard from './components/ChatCard';
import CommentForm from './components/CommentForm';

function App() {
	return (
		<div className="App">
			<h1 style={{ textAlign: 'center' }}>Interactive Chat</h1>
			<CommentCard />
			<CommentForm />
		</div>
	);
}

export default App;
