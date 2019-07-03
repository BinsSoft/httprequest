# httprequest
![Support](https://img.shields.io/badge/Support-javascript%20-blue.svg?style=flat-square) ![Support](https://img.shields.io/badge/Support-es6%20-blue.svg?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
It is a HTTP request plugin with synchronize way.

# Install

    <script src="/path/to/HttpRequest.js"></script>

# Implementation

### Initialization

    const  http = new  HttpRequest({
      'baseUrl':  'http://localhost:8000/api/v1/',
      'responseDataType':  'JSON'
    });

### API call

#### GET

    const listApiCall = http.call('get-list-data', 'GET');
    listApiCall.then((responseData)=>{
    
      ... do something ...
    
    });
#### SET Headers

    http.setHeader('x-access-token', '<token data>');
    http.setHeader('Content-Type', '<content type>');
    
    .... more on ...

#### POST

    http.call('authentication', 'POST', null, JSON.stringify({
    "email":"test@test.com",
    "password":"test@123"
    })).then((responseData)=>{
    
      ... do something ...
    
    });
   
## Creator
#### Tonmoy Nandy

## License

#### The MIT License (MIT)