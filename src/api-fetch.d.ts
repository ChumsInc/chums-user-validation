/// <reference types="node" />
import { RequestInit, Response } from 'node-fetch';
import { URL } from 'url';
export { Response } from 'node-fetch';
export interface APIFetchOptions extends RequestInit {
    headers?: {
        Authorization?: string;
        'Content-Type'?: string;
        referrer?: string;
    };
}
/**
 * Makes a request to an API, defaults to chums intranet API if not including options.headers.Authorization
 *
 */
export declare function apiFetch(url?: string | URL, options?: APIFetchOptions): Promise<Response>;
export declare function apiFetchJSON<T = unknown>(url: string | URL, options?: APIFetchOptions): Promise<T>;
