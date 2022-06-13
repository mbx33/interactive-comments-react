import Entry from './Entry';
import data from '/data.json';

const createEntry = (props) => {
	const image = props.user.image.png;
	const replies = props.replies;
	const index = props.id;

	return (
		<Entry
			key={index}
			content={props.content}
			user={props.user.username}
			score={props.score}
			created={props.createdAt}
			image={image}
			replies={replies}
		/>
	);
};

function CommentCard() {
	return <>{data.comments.map(createEntry)}</>;
}

export default CommentCard;
