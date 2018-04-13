import "./style.scss";
import * as React from "react";
import { render } from "react-dom";
import * as Browserium from "../../utils/Browserium";
import { STATUS_CODES } from "http";

interface States {
    iframeClasses: string;
}

class App extends React.Component<{}, States> {
    private iframeRef: HTMLIFrameElement;

    constructor(props) {
        super(props);

        this.state = {
            iframeClasses: "injected-iframe-visible"
        };
    }

    componentDidMount() {
        window.onkeydown = event => {
            if (event.ctrlKey && event.keyCode === 32)
                if (this.state.iframeClasses === "injected-iframe-visible")
                    this.setState({
                        iframeClasses: "injected-iframe-hidden"
                    });
                else
                    this.setState({
                        iframeClasses: "injected-iframe-visible"
                    });
        };
    }

    render() {
        return (
            <div id={"injected-react-app"}>
                <iframe
                    id={"injected-iframe"}
                    ref={iframe => (this.iframeRef = iframe)}
                    src={Browserium.environment().runtime.getURL(
                        "/sidebar.html"
                    )}
                    className={this.state.iframeClasses}
                />
            </div>
        );
    }
}
let base: HTMLDivElement = document.createElement("div");
base.id = "injected-react-base";
document.body.appendChild(base);

render(<App />, base);
