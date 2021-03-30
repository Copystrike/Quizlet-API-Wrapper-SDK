import { QuizLetClient } from "../src/QuizLetClient";
import validate = WebAssembly.validate;

/**
 * connect
 *
 * @author Copystrike
 * @since 27/03/2021 @ 14:21
 */

const quizLetClient = new QuizLetClient();

test("Connect to website and store CSFR token", async () => {
    await quizLetClient.login();
})

test("get sets from creator 1", async () => {
    const setsFromCreator = await quizLetClient.requestManager.request("webapi/3.9/sets?filters[creatorId]=1", "get").then(value => value.json());
    console.log(setsFromCreator);
})


test("search for 'test' in sets", async () => {
    const search = await quizLetClient.requestManager.request("webapi/3.9/sets/search?query=test", "get").then(value => value.json());
    console.log(search);
})

test("search for 'test' in classes", async () => {
    const search = await quizLetClient.requestManager.request("webapi/3.9/classes/search?query=test", "get").then(value => value.json());
    console.log(search);
})