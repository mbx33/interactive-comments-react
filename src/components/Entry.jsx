import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Score from './Score';

function createScore(props) {
	return <Score score={props.score} index={props.index} />;
}
function Entry({ key, score, created, content, user, image, replies }) {
	const [userScore, setUserScore] = useState(score);

	function add() {
		setUserScore((prevScore) => prevScore + 1);
	}
	function subtract() {
		setUserScore((prevScore) => prevScore - 1);
	}

	return (
		<MainContainer>
			<Container>
				<CommentContainer>
					<ScoreWrapper>
						<button onClick={add}>+</button>
						<p>{userScore}</p>
						<button onClick={subtract}>-</button>
					</ScoreWrapper>
					<CommentWrapper key={key}>
						<span className="span">
							<img src={image} alt="profile picture" />
							<h2>{user}</h2>
							<p>{created}</p>
						</span>
						<p>{content}</p>
					</CommentWrapper>
				</CommentContainer>
			</Container>
			{replies &&
				replies.map((reply, index) => {
					return (
						<ReplyContainer key={index}>
							{createScore(reply)}
							<ContentWrapper>
								<div className="profile">
									<img
										src={reply.user.image.png}
										alt="profile picture"
									/>
									<h2>{reply.user.username}</h2>
									<p className="created-at">{reply.createdAt}</p>
								</div>
								<div className="content">
									<p>
										<span className="reply-to">
											@{reply.replyingTo}
										</span>{' '}
										{reply.content}
									</p>
								</div>
							</ContentWrapper>
						</ReplyContainer>
					);
				})}
		</MainContainer>
	);
}

export default Entry;

const MainContainer = styled.div`
	font-size: 1.6rem;
`;

const Container = styled.div`
	padding: 3rem;
	background-color: hsl(0, 0%, 100%);
	height: 30vh;
	width: 70%;
	margin: 3rem auto;
	border-radius: 1.5rem;
	color: black;

	.span {
		display: flex;
	}
`;

const ScoreWrapper = styled.div`
	/* background-color: red; */
`;

const CommentWrapper = styled.div`
	/* background-color: blue; */
`;

const CommentContainer = styled.div`
	display: flex;
	gap: 2rem;
`;

const ReplyContainer = styled.div`
	padding: 3rem;
	display: flex;
	gap: 2rem;

	background-color: hsl(0, 0%, 100%);
	width: 55%;
	margin-left: auto;
	margin-right: 20rem;
	margin-top: 3rem;
	border-radius: 1.5rem;
`;

const ContentWrapper = styled.div`
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
