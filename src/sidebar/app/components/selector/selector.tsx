import "./selector.scss";
import * as React from "react";

interface Props {
	tabs: Tab[],
	selected: number
}

interface States{
    selectorCss: React.CSSProperties
}

interface Tab {
	title: string;
	icon: JSX.Element;
	onClick: (event) => any;
}

interface selectedAniValues {
	jumpRange: number;
	selectedTab: Tab;
}


class Selector extends React.Component<Props, States> {

    private selectorRef: Element;

    constructor(props: Props){
		super(props);
		
        this.state = {
            selectorCss: {}
        }
    }

	private tabs = this.props.tabs.map((value: Tab, index:number) => (
		<div
			key={"tab-" + value.title}
			className={"selector-tab"}
			onClick={event => {
                this.moveSelected(event.currentTarget);
                value.onClick(event);
            }}
        >
			
			{(
				value.icon ? 
					<div className={"selector-tab-icon"}>{value.icon}</div>
				:
					null
			)}

			{(
				value.title ? 
					<div className={"selector-tab-title"}>{value.title}</div>
				:
					null
			)}

		</div>
	));

    private moveSelected(currentTarget: Element){
		this.setState({
            selectorCss: {
				left: currentTarget.getBoundingClientRect().left + "px",
				width: currentTarget.clientWidth + "px"
            }
        });
	}
	
	componentDidMount(){
		document.body.onload = () => {
			this.moveSelected(this.selectorRef.children.item(this.props.selected));
		}
	}

	render() {
		return (
			<div ref={node => (this.selectorRef = node)} className={"selector"}>
				{this.tabs}
                <div style={this.state.selectorCss} 
                className={"selector-selected"} />
			</div>
		);
	}
}

export default Selector;
