import {useFeedbackItemsStore} from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";
import React from "react";
export default function HashtagList() {
	const companyList = useFeedbackItemsStore((state) =>
		state.getCompanyList()
	);
	const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

	return (
		<ul className="hashtags">
			{companyList.map((company) => (
				<HashtagItem
					key={company}
					company={company}
					onSelectCompany={selectCompany}
				/>
			))}
		</ul>
	);
}
