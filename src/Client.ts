/**
 * Client - Interface for the Driver file.
 *
 * @author Copystrike
 * @since 27/03/2021 @ 14:13
 */
 
export interface Client {

    login(): Promise<void>;
}