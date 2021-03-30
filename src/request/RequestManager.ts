import fetch, { Response } from "node-fetch";

/**
 * RequestManager - Manages the requests.
 *
 * @author Copystrike
 * @since 27/03/2021 @ 16:29
 */

export class RequestManager {

    private _csrfToken: string | undefined;

    public async request(path: string, method: string): Promise<Response> {
        let headers: any = {
            "accept": `application/json`,
            "x-requested-with": `XMLHttpRequest`,
            "connection": `keep-alive`,
            "user-agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36`,
        }

        if (this._csrfToken) {
            headers.cookie = `qtkn=${this._csrfToken}`;
            headers["cs-token"] = `${this._csrfToken}`;
        }

        return await fetch(`http://quizlet.com/${path}`, {
            method: method,
            headers: headers
        });
    }

    get csrfToken(): string | undefined {
        return this._csrfToken;
    }

    set csrfToken(value: string | undefined) {
        this._csrfToken = value;
    }
}