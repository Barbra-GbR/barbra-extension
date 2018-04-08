import "./sortBy.scss";
import * as React from "react";

import PagesStore from "../pages/store";

interface Props {
	defaultSelector: string;
	options: string[];
}

interface States{
    floatingClasses: string;
}

export enum Selectors{
	Topics = "Topics",
	Categories = "Categories",
	Groups = "Groups"
}

class SortBy extends React.Component<Props, States> {

    constructor(props: Props){
		super(props);

		this.state = {
			floatingClasses: "sortyBy-floating-con hidden"
		}
	}
	
	private renderSelectOptionsCon: () => JSX.Element = () => {
		return (
			<div className={this.state.floatingClasses} onClick={() => this.setFloatingConOpacity()} >
				<ul>
					{this.props.options.map((value: string) => {
						return (
							<li key={Math.random().toString()} onClick={(event) => PagesStore.selector = event.currentTarget.textContent} >
								<div>
									{value}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	private setFloatingConOpacity = (visible?: boolean) =>{
		if(visible)
			this.setState({
				floatingClasses: "sortyBy-floating-con"
			});
		else
			this.setState({
				floatingClasses: "sortyBy-floating-con hidden"
			});
	}

	render() {
		return (
			<div className={"sortBy-con"}>
				{this.renderSelectOptionsCon()}
				<div className={"sortBy-con-generic"} >
					Sort by
				</div>

				<div className={"sortBy-con-selector"} onClick={() => this.setFloatingConOpacity(true)} >

					<div className={"sortBy-con-selector-selected"} >
						{PagesStore.selector}
					</div>

					<div className={"sortBy-con-selector-arrow"} >
						<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 292.362 292.362">
							<path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" fill="#FFFFFF"/>
						</svg>
					</div>

					<div className={"sortBy-con-selector-border"} ></div>
				</div>
			</div>
		);
	}
}

export default SortBy;
