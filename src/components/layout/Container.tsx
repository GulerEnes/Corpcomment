import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";
import React from "react";
export default function Container() {
	return (
		<div className="container">
			<Header />
			<FeedbackList />
		</div>
	);
}
