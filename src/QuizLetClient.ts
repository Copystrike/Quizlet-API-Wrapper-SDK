import fetch from "node-fetch";
import { Client } from "./Client";
import { getCookieValueByName } from "./utils/RequestUtils"
import { fail } from "assert";
import { RequestManager } from "./request/RequestManager";

/**
 * QuizLetClient - Driver class, basically where the magic happens.
 *
 * @author Copystrike
 * @since 27/03/2021 @ 14:13
 */

export class QuizLetClient implements Client {

    private readonly _requestManager: RequestManager;

    constructor() {
        this._requestManager = new RequestManager();
    }

    public async login(): Promise<void> {
        await this._requestManager.request("test", "get")
            .then(value => value.headers)
            .then(value => {
                let cookieJar = value.get("set-cookie");
                if (!cookieJar) {
                    fail("set-cookie is not found in headers.");
                    return;
                }

                const cookieValueByName = getCookieValueByName(cookieJar, "qtkn");

                if (cookieValueByName) {
                    this._requestManager.csrfToken = cookieValueByName;
                } else {
                    fail("CSRF token is not found.")
                }

            });
    }


    get requestManager(): RequestManager {
        return this._requestManager;
    }
}