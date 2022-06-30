import { useState } from 'react';

import styled from 'styled-components';
import data from '/data.json';
import CommentList from './CommentList';

//imported created styled components 
import { Container } from './Entry';

const currentImage = data.currentUser.image.png;
const username = data.currentUser.username;

function CommentForm() {
	const [comment, setComment] = useState('');
	const [hasValue, setHasValue] = useState(false);
	const [list, setList] = useState([]);

	function handleChange(e) {
		setComment(e.target.value);
		if (comment) {
			setHasValue(true);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		setList((prevValue) => {
			return [...prevValue, comment];
		});
		setComment('');
		setHasValue(false);
	}

	return (
		<>
			<Container>
				<CommentList list={list} username={username} />
			</Container>
			<FormContainer>
				<div className="profile">
					<img src={currentImage} alt="profile picture" />
				</div>
				<FormWrapper>
					<form className="form">
						<textarea
							name="comment"
							className="comment"
							value={comment}
							onChange={handleChange}
							cols="60"
							rows="4"
							required
							placeholder="Add a comment...."
						/>
					</form>
					{hasValue ? (
						<button className="button" onClick={handleSubmit}>
							SEND
						</button>
					) : (
						<button disabled className="disabled" onClick={handleSubmit}>
							SEND
						</button>
					)}
				</FormWrapper>
			</FormContainer>
		</>
	);
}

export default CommentForm;

const FormContainer = styled.form`
	background-color: hsl(0, 0%, 100%);
	width: 70%;
	margin: 3rem auto;
	border-radius: 1.5rem;
	padding: 3rem;

	display: flex;
	gap: 1.5rem;

	.profile {
	}
`;

const FormWrapper = styled.div`
	display: flex;

	.button {
		width: 10rem;
		height: 4rem;
		background-color: hsl(238, 40%, 52%);
		border: none;
		border-radius: 1rem;
		margin-left: 0.9rem;
		font-size: 1.6rem;
		color: #fff;
		cursor: pointer;
	}

	.disabled {
		width: 10rem;
		height: 4rem;
		background-color: hsl(238, 40%, 52%, 0.3);
		border: none;
		border-radius: 1rem;
		margin-left: 0.9rem;
		font-size: 1.6rem;
		color: #222;
	}

	.comment {
		resize: none;
		font-size: 2rem;
	}
`;
