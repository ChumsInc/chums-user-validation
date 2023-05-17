import { JwtPayload } from 'jsonwebtoken';
import { UserProfile } from "./types.js";
export interface BaseJWTToken {
    aud?: string;
    iat?: number;
    exp?: number;
    iss?: string;
}
export interface UserJWTToken extends UserProfile, BaseJWTToken {
}
/**
 * Validates a JTW Token
 * @param {String} token - A JWT token to be validated
 * @return {Promise<BaseJWTToken|Error>}
 */
export declare const validateToken: (token: string) => Promise<BaseJWTToken>;
/**
 * Validates a token expiration timestamp
 */
export declare const isBeforeExpiry: (payload: BaseJWTToken | JwtPayload | null | string) => boolean;
/**
 * Checks to see if a token is locally issued
 */
export declare const isLocalToken: (payload: BaseJWTToken | JwtPayload | null | string) => boolean;
