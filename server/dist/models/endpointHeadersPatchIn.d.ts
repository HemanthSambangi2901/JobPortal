export interface EndpointHeadersPatchIn {
    headers: {
        [key: string]: string;
    };
}
export declare const EndpointHeadersPatchInSerializer: {
    _fromJsonObject(object: any): EndpointHeadersPatchIn;
    _toJsonObject(self: EndpointHeadersPatchIn): any;
};
