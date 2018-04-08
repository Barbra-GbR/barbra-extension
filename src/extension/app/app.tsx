import * as React from "react";
import { render } from "react-dom";
import * as Browserium from "../../utils/Browserium";

class App extends React.Component {


	private iframeCss: React.CSSProperties = {
		zIndex: 10000000,
		position: "fixed",
		top: "0",
		right: "0",
		border: "none",
		background: "white",
		height: "100vh",
		width: "360px"
	};

	render() {
		return (
			<div id={"injected-react-app"}>
				<iframe
					src={Browserium.environment().runtime.getURL("/sidebar.html")}
					style={this.iframeCss}
				/>
			</div>
		);
	}
}
let base: HTMLDivElement = document.createElement("div");
base.id = "injected-react-base";
document.body.appendChild(base);

render(<App />, base);