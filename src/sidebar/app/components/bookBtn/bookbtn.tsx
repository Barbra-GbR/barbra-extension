import "./bookBtn.scss";
import * as React from "react";

export interface Props {
	group: string
}

interface States{

}

class Card extends React.Component<Props, States> {

	constructor(props: Props){
		super(props);
	}

	render() {
		return (
			<div className={"bookBtn"} >
				<div className={"bookBtn-con"} >
					<div className={"bookBtn-groupTxt"} >
						{this.props.group}
					</div>

					<div className={"bookBtn-icon"} >
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 477.175 477.175">
						<path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z   " fill="#FFFFFF"/>
					</svg>

					</div>
				</div>
			</div>
		);
	}
}

export default Card;
