import {TriangleUpIcon} from "@radix-ui/react-icons";
import React from "react";
type FeedbackItem = {
	upvoteCount: number;
	badgeLetter: string;
	companyName: string;
	text: string;
	daysAgo: number;
};

function FeedbackItem(props: FeedbackItem) {
	const {upvoteCount, badgeLetter, companyName, text, daysAgo} = props;
	return (
		<li className="feedback">
			<button>
				<TriangleUpIcon />
				<span>{upvoteCount}</span>
			</button>
			<div>
				<p>{badgeLetter}</p>
			</div>
			<div>
				<p>{companyName}</p>
				<p>{text}</p>
			</div>
			<div>{daysAgo}d</div>
		</li>
	);
}

export default FeedbackItem;
