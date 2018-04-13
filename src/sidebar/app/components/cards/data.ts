export interface ISuggestionData {
    provider: string;
    url: string;
    kind: CardTypes;
    title: string;
    category: string;
    tags: string[];
    content: string;
    id: string;
}

export enum CardTypes {
    article = "article"
}
