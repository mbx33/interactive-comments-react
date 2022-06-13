import styled from 'styled-components';
import { useState } from 'react';
import plus from '/images/icon-plus.svg';
import minus from '/images/icon-minus.svg';

function Score({ score, index }) {
	const [points, setPoints] = useState(score);

	function add() {
		setPoints((prevScore) => prevScore + 1);
	}
	function subtract() {
		setPoints((prevScore) => prevScore - 1);
	}

	return (
		<Wrapper key={index}>
			<img src={plus} alt="plus symbol" onClick={add} />
			<p>{points}</p>
			<img src={minus} alt="minus" onClick={subtract} />
		</Wrapper>
	);
}

export default Score;

const Wrapper = styled.div`
	background-color: hsl(223, 19%, 93%);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: 2.5rem;
	padding: 1.2rem 0.9rem;
	align-items: center;
	border-radius: 1.2rem;

	img {
		width: 6rem;
		cursor: pointer;
	}

	p {
		color: hsl(238, 40%, 52%);
	}
`;
