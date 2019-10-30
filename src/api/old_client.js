/* eslint-disable no-undef */
const prefix = "https://api.acmetools.tv/";

function get_signed_url(file_name, path, cb){
    return fetch(`${prefix}api/v1/upload_url/signed_url/${encodeURIComponent(file_name)}`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function get_task_status(task_id, cb){
    return fetch(`${prefix}api/v1/upload_url/task_status/${task_id}`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}


function post_aux_manipulator(s3_key, cb){
    let payload = {
        s3_key: s3_key
    };
    return fetch(`${prefix}api/v1/upload_url/aux`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);

}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
}



function parseJSON(response) {
    return response.json();
}

const Client = { get_signed_url, post_aux_manipulator, get_task_status };
export default Client;