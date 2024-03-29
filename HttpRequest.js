/*!
 * Bins HttpRequest
 *
 * Copyright BinsSoft
 * Released under the MIT license
 *
 * Date: 2019-07-03
 */
class HttpRequest {


    constructor(optionData) {
        this.apiBaseUrl = '';
        this.baseHeaders = {};
        this.responsedataType = 'JSON';
        this.successEvent;
        this.beforeSendEvent;
        this.apiBaseUrl = optionData.baseUrl;
        if (optionData.headers) {
            this.baseHeaders = optionData.headers;
        }
        if (optionData.responseDataType) {
            this.responsedataType = optionData.responseDataType;
        }
        this.responsedataType = this.responsedataType.toLowerCase();
    }
    setConfig(configParamName, paramValue) {
        if (configParamName === 'headers') {
            if (typeof paramValue === 'object') {
                this.baseHeaders = paramValue;
            }
        }
    }
    setHeader(paramName, paramValue) {
        this.baseHeaders[paramName] = paramValue;
    }
    call(endPoint, method, headers = null, body = null) {
        if (endPoint) {
            let url = this.apiBaseUrl + endPoint;
            let responseType = this.responsedataType;
            if (method) {
                method = method.toUpperCase();
                return new Promise((resolve, reject) => {
                    var xhttp = new XMLHttpRequest();
                    xhttp.open(method, url, true);
                    let localHeaders = null;
                    if (headers) {
                        for (let headerKey in headers) {
                            this.baseHeaders[headerKey] = headers[headerKey];
                        }
                    }
                    for (let headerKey in this.baseHeaders) {
                        xhttp.setRequestHeader(headerKey, this.baseHeaders[headerKey]);
                    }

                    xhttp.responseType = this.responsedataType;
                    xhttp.send(body);
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4) {
                            if (this.status == 200) {
                                resolve(this.response);
                            } else {
                                resolve(this.statusText);
                            }
                        }
                    }
                });

            } else {
                console.error('method is not provided');
            }

        } else {
            console.error('Api end point is not provided');
        }
    }
}
