import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Score from './Score';

function Entry({ key, score, created, content, user, image, replies }) {
	const [userScore, setUserScore] = useState(score);
	const [replyPoints, setReplyPoints] = useState(replies.score);

	const addReplyPoints = () => {
		console.log('added 1');
		setReplyPoints(30);
	};

	function subReplyPoints() {
		console.log('subtracted 1');
		// setReplyPoints(replies.score--);
	}

	return (
		<MainContainer>
			<Container key={key}>
				<CommentContainer>
					<ScoreWrapper>
						<button onClick={() => console.log('plus button clicked')}>
							+
						</button>
						<p>{userScore}</p>
						<button onClick={() => console.log('minus button clicked')}>
							-
						</button>
					</ScoreWrapper>
					<CommentWrapper>
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
				replies.map((reply) => {
					return (
						<ReplyContainer>
							<Score
								replyScore={replyPoints}
								addReplyPoints={addReplyPoints}
								subReplyPoints={subReplyPoints}
							/>
							<span className="span">
								<img src={reply.user.image.png} alt="profile picture" />
								<h2>{reply.user.username}</h2>
								<p>{reply.createdAt}</p>
							</span>
							<p>{reply.content}</p>
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
	color: green;
`;

const ReplyContainer = styled.div`
	padding: 3rem;

	background-color: hsl(0, 0%, 100%);
	width: 55%;
	margin-left: auto;
	margin-right: 20rem;
	margin-top: 3rem;
	border-radius: 1.5rem;

	.span {
		display: flex;
	}
`;
