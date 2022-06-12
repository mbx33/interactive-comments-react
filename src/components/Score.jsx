import styled from 'styled-components';

function Score({ replyScore, addReplyPoints, subReplyPoints }) {
	return (
		<>
			<button onClick={addReplyPoints}>+</button>
			<p>{replyScore}</p>
			<button onClick={subReplyPoints}>-</button>
		</>
	);
}

export default Score;
