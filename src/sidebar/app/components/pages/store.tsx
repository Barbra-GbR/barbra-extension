import * as React from "react";
import { observable } from "mobx";

class Store {
    @observable renderedRecents: JSX.Element[];
    @observable renderedFilterButtons: JSX.Element[];

    // ANIMATIONS
    @observable css: React.CSSProperties = {};
    @observable
    showPage = (index: number) => {
        this.css = {
            left: 360 * index * -1 + "px"
        };
    };
}

let store = new Store();

export default store;
