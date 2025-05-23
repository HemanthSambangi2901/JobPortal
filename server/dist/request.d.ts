import "svix-fetch";
export declare const LIB_VERSION = "1.66.0";
export declare enum HttpMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    CONNECT = "CONNECT",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE",
    PATCH = "PATCH"
}
export interface SvixRequestContext {
    baseUrl: string;
    token: string;
    timeout?: number;
}
type QueryParameter = string | boolean | number | Date | string[] | null | undefined;
export declare class SvixRequest {
    private readonly method;
    private path;
    constructor(method: HttpMethod, path: string);
    private body?;
    private queryParams;
    private headerParams;
    setPathParam(name: string, value: string): void;
    setQueryParam(name: string, value: QueryParameter): void;
    setHeaderParam(name: string, value?: string): void;
    setBody(value: any): void;
    send<R>(ctx: SvixRequestContext, parseResponseBody: (jsonObject: any) => R): Promise<R>;
    sendNoResponseBody(ctx: SvixRequestContext): Promise<void>;
    private sendInner;
}
export {};
