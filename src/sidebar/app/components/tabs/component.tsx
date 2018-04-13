import "./style.scss";
import * as React from "react";

interface Props {
    tabs: Tab[];
    selected: number;
}

interface States {
    tabsCss: React.CSSProperties;
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

class Tabs extends React.Component<Props, States> {
    private tabsRef: Element;

    constructor(props: Props) {
        super(props);

        this.state = {
            tabsCss: {}
        };
    }

    private tabs = this.props.tabs.map((value: Tab, index: number) =>
        <div
            key={"tab-" + value.title}
            className={"tabs-tab"}
            onClick={event => {
                this.moveSelected(event.currentTarget);
                value.onClick(event);
            }}
        >
            {value.icon
                ? <div className={"tabs-tab-icon"}>
                      {value.icon}
                  </div>
                : null}

            {value.title
                ? <div className={"tabs-tab-title"}>
                      {value.title}
                  </div>
                : null}
        </div>
    );

    private moveSelected(currentTarget: Element) {
        this.setState({
            tabsCss: {
                left: currentTarget.getBoundingClientRect().left + "px",
                width: currentTarget.clientWidth + "px"
            }
        });
    }

    componentDidMount() {
        document.body.onload = () => {
            this.moveSelected(this.tabsRef.children.item(this.props.selected));
        };
    }

    render() {
        return (
            <div ref={node => (this.tabsRef = node)} className={"tabs"}>
                {this.tabs}
                <div style={this.state.tabsCss} className={"tabs-selected"} />
            </div>
        );
    }
}

export default Tabs;
