/**
 * CookieUtils - Util file for cookie things
 *
 * @author Copystrike
 * @since 27/03/2021 @ 15:32
 */

/**
 * Gets the cookie value by key.
 * @see https://www.regex-tutorial.com/getCookieWithRegex.html
 * @param cookies The list of cookies.
 * @param key The key of the cookie
 */
export function getCookieValueByName(cookies: string, key: string): string | null {
    let match = cookies.match(new RegExp("(^| )" + key + "=([^;]+)"));
    return match ? match[2] : null;
}