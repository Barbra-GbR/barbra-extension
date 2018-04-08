import * as React from "react";
import { observable } from "mobx";
import {Props} from "../card/card";

import BookBtn from "../bookBtn/bookbtn";

class PagesStore{
    @observable selector: string = "Categories";

    @observable recentCards: JSX.Element[] = [];

    @observable bookmarkedCards: { 
        categories: { [category: string]: JSX.Element[] }, 
            tags: { [tag: string]: JSX.Element[] }
    } = { categories: {}, tags: {} };

    @observable bookmarkBtns: JSX.Element[] = [];    

    @observable css: React.CSSProperties = {};

    @observable addRecent = (card: JSX.Element) => {
        this.recentCards.unshift(card);
    }

    @observable removeRecent = (identifier: string) => {
        this.recentCards = this.recentCards.filter( (value: JSX.Element) => {
            if(identifier !== value.props.identifier)
                return value;
        });
    }


    @observable addBookmark = (card: JSX.Element) => {
        if(!this.bookmarkedCards.categories[card.props.category])
            this.bookmarkedCards.categories[card.props.category] = [];
        this.bookmarkedCards.categories[card.props.category].unshift(card);

        card.props.tags.map((value: string) => {
            if(!this.bookmarkedCards.tags[value])
                this.bookmarkedCards.tags[value] = [];
            this.bookmarkedCards.tags[value].unshift(card);
        });
    }

    @observable removeBookmark = (tags: string[], category: string, identifier: string) => { 
        this.bookmarkedCards.categories[category].filter((value: JSX.Element) => {
            if(value.props.identifier !== identifier)
                return value;
        });
        tags.map((value: string) => {
            this.bookmarkedCards.tags[value].filter((value: JSX.Element) => {
                if(value.props.identifier !== identifier)
                    return value;
            });
        });

    }

    @observable showPage = (index: number) => {
        switch(index){
            case 1:{
                const categories: string[] = Object.getOwnPropertyNames(this.bookmarkedCards.categories);
                categories.shift();
                categories.sort();
                let newBtns: JSX.Element[] = [];
                categories.map((value: string) => {
                    newBtns.push(
                        <BookBtn
                            key={"book-btn-group-" + value}
                            group={value}
                        />
                    );
                });
                this.bookmarkBtns = newBtns;
                break;
            }
        }
        this.css = {
            left: 360 * index * -1 + "px"
        }
    }
}

let store = new PagesStore;

export default store;