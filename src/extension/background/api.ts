export enum Paths {
    LOGIN = "login/",
    USERPROFILE = "user/me/"
}

export enum Providers {
    Google = "google"
}

class Connector {
    // PATH TO API ROOT
    private apiRoot: string;

    constructor(apiRoot: string) {
        this.apiRoot = apiRoot;
    }

    // LOGIN
    public getLoginUrl(provider: Providers) {
        return this.apiRoot + Paths.USERPROFILE + provider;
    }

    // USERPROFILE
    public getMyProfile() {}
    public getAnyProfile(identifier: string) {}

    // SUGGESTIONS
    public getSuggestion(identifier: string) {}
    public getSuggestions(identifiers: string[]) {}
    public getRecentSuggestions() {}
}

export const init: (apiRoot: string) => void = (apiRoot: string) => {
    connector = new Connector(apiRoot);
};

export let connector: Connector;
