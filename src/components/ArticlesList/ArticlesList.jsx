import { useEffect, useState } from "react";
import axios from "axios";

const ArticlesList = ({ items }) => (
	<ul>
		{items.map(({ ObjectID, url, title }) => (
			<li key={ObjectID}>
				<a href={url} target="_blank" rel="noreferrer noopener">
					{title}
				</a>
			</li>
		))}
	</ul>
);


export default ArticlesList;