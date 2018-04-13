import "./style.scss";
import * as React from "react";
import { observer } from "mobx-react";

import PagesStore from "./store";
import AppStore from "../../store";
import SortBy from "../dropL/component";

interface States {
    pagesCss: React.CSSProperties;
}

@observer
class Pages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pagesCss: {}
        };
    }

    render() {
        return (
            <div id="pages" style={PagesStore.css}>
                <div
                    key={"pages-page-key-recent"}
                    id={"pages-page-recent"}
                    className={"pages-page-con"}
                >
                    {PagesStore.renderedRecents}
                </div>
                <div
                    key={"pages-page-key-bookmarks"}
                    id={"pages-page-bookmarks"}
                    className={"pages-page-con"}
                >
                    <SortBy
                        defaultFilter={"Time"}
                        filters={["Time", "Categories", "Groups", "Tags"]}
                    />
                    {PagesStore.renderedFilterButtons}
                </div>
            </div>
        );
    }
}

export default Pages;
