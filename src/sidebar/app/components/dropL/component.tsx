import "./style.scss";
import * as React from "react";

import { observable } from "mobx";

import PagesStore from "../pages/store";
import AppStore from "../../store";

interface Props {
    defaultFilter: string;
    filters: string[];
}

interface States {
    floatingClasses: string;
}

class DropdownList extends React.Component<Props, States> {
    @observable selectedFilter: string;

    private flotingRef: Node;

    constructor(props: Props) {
        super(props);

        this.selectedFilter = this.props.defaultFilter;

        this.state = {
            floatingClasses: "dropL-floating-con hidden"
        };
    }

    componentDidMount() {
        // if clicked outside container in iframe close filter containers
        window.addEventListener("click", event => {
            if (
                this.state.floatingClasses === "dropL-floating-con" &&
                (event.target as Node) !== this.flotingRef &&
                !this.flotingRef.contains(event.target as Node)
            )
                this.setFiltersVisibility(false);
        });
    }

    private renderFilters: () => JSX.Element = () => {
        return (
            <div
                className={this.state.floatingClasses}
                onClick={() => this.setFiltersVisibility(false)}
            >
                <ul>
                    {this.props.filters.map((value: string) => {
                        return (
                            <li
                                key={Math.random().toString()}
                                onClick={event =>
                                    (this.selectedFilter =
                                        event.currentTarget.textContent)}
                            >
                                <div>
                                    {value}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    private setFiltersVisibility = (visible?: boolean) => {
        if (visible)
            this.setState({
                floatingClasses: "dropL-floating-con"
            });
        else
            this.setState({
                floatingClasses: "dropL-floating-con hidden"
            });
    };

    render() {
        return (
            <div className={"dropL-con"}>
                {this.renderFilters()}
                <div className={"dropL-con-generic"}>Sort by</div>

                <div
                    ref={div => (this.flotingRef = div)}
                    className={"dropL-con-selector"}
                    onClick={() => this.setFiltersVisibility(true)}
                >
                    <div className={"dropL-con-selector-selected"}>
                        {this.selectedFilter}
                    </div>

                    <div className={"dropL-con-selector-arrow"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            viewBox="0 0 292.362 292.362"
                        >
                            <path
                                d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
                                fill="#FFFFFF"
                            />
                        </svg>
                    </div>

                    <div className={"dropL-con-selector-border"} />
                </div>
            </div>
        );
    }
}

export default DropdownList;
