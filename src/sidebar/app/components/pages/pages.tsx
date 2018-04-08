import "./pages.scss";
import * as React from "react";
import { observer } from "mobx-react";

import Store from "./store";
import * as SortBy from "../sortBy/sortBy";

interface States{
	pagesCss: React.CSSProperties;
}

@observer
class Pages extends React.Component {

    constructor(props){
		super(props);

		this.state = {
			pagesCss: {}
		}
	}

	render() {
		return (
			<div id="pages" style={Store.css} >
				<div key={"pages-page-key-recent"} id={"pages-page-recent"} className={"pages-page-con"} >	
					{Store.recentCards}
				</div>
				<div key={"pages-page-key-bookmarks"} id={"pages-page-bookmarks"} className={"pages-page-con"} >
					<SortBy.default 
						defaultSelector={"test2"} 
						options={[
							"Time",
							"Categories",
							"Tags",
							"Groups"
						]}
					/>
					{Store.bookmarkBtns}
				</div>
			</div>
		);
	}
}

export default Pages;
