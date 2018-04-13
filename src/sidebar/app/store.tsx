import * as React from "react";
import * as Browserium from "../../utils/Browserium";
import { observable } from "mobx";

import { ISuggestionData } from "./components/cards/data";

import ArticleCard from "./components/cards/article/component";
import PagesStore from "./components/pages/store";

class Store {
    // stores the needed cards
    @observable storedCardData: { [id: string]: ISuggestionData } = {};

    // ID's of the bookmarks and recents
    @observable recents: string[] = [];
    @observable bookmarks: string[] = [];

    // existing filters
    @observable categories: string[] = [];
    @observable tags: string[] = [];

    @observable
    public addCardData = (data: ISuggestionData[]) => {
        data.map((value: ISuggestionData) => {
            this.storedCardData[value.id] = value;
        });
    };

    @observable
    public addRecent = (id: string, data?: ISuggestionData) => {
        this.recents.push(id);

        if (data) this.storedCardData[id] = data;

        // re-render because it changed
        this.renderRecents();
    };
    @observable
    public removeRecent = (id: string) => {
        // TODO send to api
        delete this.recents[this.recents.indexOf(id)];

        // re-render because it changed
        this.renderRecents();
    };
    @observable
    private renderRecents = () => {
        let newRecentCards: JSX.Element[] = [];
        this.recents.map((value: string) => {
            let data = this.storedCardData[value];

            newRecentCards.push(
                <ArticleCard
                    key={"article-key-" + data.id}
                    bookmarked={
                        this.bookmarks.indexOf(value) > -1 ? true : false
                    }
                    data={data}
                />
            );
        });

        PagesStore.renderedRecents = newRecentCards;
    };

    @observable
    public addBookmark = (id: string, data?: ISuggestionData) => {
        this.bookmarks.push(id);

        if (data) this.storedCardData[id] = data;

        this.updateFilters();

        // re-render because recent changed
        this.renderRecents();
    };
    @observable
    public removeBookmark = (id: string) => {
        // TODO send to api
        this.bookmarks.splice(this.bookmarks.indexOf(id), 1);
        this.updateFilters();

        console.log(this.bookmarks);
        // re-render because recent changed
        this.renderRecents();
    };

    private updateFilters = () => {
        let newCategories = [];
        let newTags = [];

        // check categories and tags in cards
        this.bookmarks.map((value: string) => {
            // TODO check if storedCards doesnt contain id => requestCardById

            let category: string = this.storedCardData[value].category;

            // newCategories doesnt contain containing category => push
            if (newCategories.indexOf(category) < -1)
                newCategories.push(category);

            this.storedCardData[value].tags.map((value: string) => {
                // newTags doesnt contain containing tag => push
                if (newTags.indexOf(category) < -1) newTags.push(category);
            });
        });

        this.tags = newTags;
        this.categories = newCategories;
    };
}

let store = new Store();

export default store;
