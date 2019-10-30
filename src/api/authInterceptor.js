import fetchIntercept from 'fetch-intercept';
import Client from "./client"


var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU0NDI4Njk0OCwiZXhwIjoxNTUyOTI2OTQ4LCJhdWQiOiJodHRwczovL2FjbWV0b29scy50diIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWMxMzcwYmQtZmIzYi00NzBhLWFlYWEtNTZlN2YzODgxZjYyIn0.nM5Zp9vgESGJD38nixsJ4o_SOmdZvb3qHXeO3Mf57Sg';
Client.authenticate((response) => {
    token=response.accessToken;
});


const unregister = fetchIntercept.register({
    request: async function (url, config) {
        // Modify the url or config here
        if (url === '/authentication'){
            return [url, config];
        }
        // console.log(url);
        // console.log(config);
        config.headers['Authorization'] = `Bearer ${token}`;
        return [url, config];
    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
        // Modify the reponse object
        // console.log('response', response);
        return response;
    },

    responseError: function (error) {
        // Handle an fetch error
        // console.log('err', error);
        return Promise.reject(error);
    }
});
