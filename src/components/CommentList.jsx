import { useState } from 'react';
import Score from './Score';

import styled from 'styled-components';
import data from '/data.json';

import plus from '/images/icon-plus.svg';
import minus from '/images/icon-minus.svg';

const currentImage = data.currentUser.image.png;
const created = 'June 30th';

function CommentList({ list, username }) {
	const [userScore, setUserScore] = useState(0);

	function add() {
		setUserScore((prevScore) => prevScore + 1);
	}
	function subtract() {
		setUserScore((prevScore) => prevScore - 1);
	}
	return (
		<>
			{list.map((comment) => (
				<CommentContainer>
					<ScoreWrapper>
						<img src={plus} alt="plus symbol" onClick={add} />
						<p>{userScore}</p>
						<img src={minus} alt="minus" onClick={subtract} />
					</ScoreWrapper>
					<CommentWrapper>
						<div className="profile">
							<img src={currentImage} alt="profile picture" />
							<h2>{username}</h2>
							<p className="created-at">{created}</p>
						</div>
						<div className="content">
							<p>{list}</p>
						</div>
					</CommentWrapper>
				</CommentContainer>
			))}
		</>
	);
}

export default CommentList;

const CommentContainer = styled.div`
	font-size: 1.6rem;
	display: flex;
	gap: 2rem;
	padding: 4rem;
`;

const CommentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h2 {
		color: hsl(212, 24%, 26%);
	}

	.profile {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.reply-to {
		color: blue;
		font-size: 2rem;
	}

	.created-at {
		color: hsl(211, 10%, 45%);
	}

	.content {
		margin-top: 2rem;
		color: hsl(211, 10%, 45%);
	}
`;

const ScoreWrapper = styled.div`
	background-color: hsl(223, 19%, 93%);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: 2.5rem;
	padding: 1.5rem 0.9rem;
	align-items: center;
	border-radius: 1.2rem;

	img {
		width: 4rem;
		padding: 1rem;
		cursor: pointer;
	}

	p {
		color: hsl(238, 40%, 52%);
	}
`;
