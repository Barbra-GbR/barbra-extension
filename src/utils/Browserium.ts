export class Socket {
    public readonly id: string;

    constructor(id: string) {
        this.id = id;
    }

    public sendMessage = (type: string, data?: any, receivers?: string[]) => {
        //sending message to backceiver
        environment().runtime.sendMessage(environment().runtime.id, {
            sender: this.id,
            receivers: receivers,
            type: type,
            data: data
        });
    };

    public onMessage = (type: string, callback: (message: Message) => any) => {
        environment().runtime.onMessage.addListener((message: Message) => {
            //Type is the one that is listened to and filter includes sender
            if (
                message.type === type &&
                (message.receivers
                    ? message.receivers.indexOf(this.id) >= 0
                    : true)
            )
                callback(message);
        });
    };
}

export interface Message {
    sender: string;
    receivers: string[];
    type: string;
    data: any;
}

export const environment: () => typeof chrome = () => {
    if (navigator.userAgent.indexOf("Firefox") != -1)
        return browser; // Firefox
    else return chrome; // Chrome and Opera
};

//Without this TypeScript throws an error!
declare const browser: typeof chrome;
