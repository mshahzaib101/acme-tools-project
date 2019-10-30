/* eslint-disable no-undef */
// const prefix = "http://localhost:8081";
// const prefix = "http://roadrunner-api.eu-west-1.elasticbeanstalk.com";
const prefix = "https://api.acmetools.tv";

function get_signed_url(file_name, path, cb){
    return fetch(`${prefix}api/v1/upload_url/signed_url/${encodeURIComponent(file_name)}`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function get_job_status(job_id, cb){
    return fetch(`${prefix}/api/v1/jobs/${job_id}`, {
        accept: "application/json",
        headers: {}
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function post_aaf_process(file_name, file_size, cb){
    let payload = {
        "file_name": file_name,
        "file_size_byes": file_size,
        "process_type": "grouper"
    };
    return fetch(`${prefix}/aaf-process`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(parseUploadUrl)
    .then(cb);
}

function authenticate(cb){
    let payload = {"email": "ilansr@gmail.com", "password": "test12", "strategy": "local" };
    return fetch(`${prefix}/authentication`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(parseUploadUrl)
        .then(cb);
}

function put_aaf_process(data, cb){
    let payload = {
        "jobId": data.jobId,
    };
    return fetch(`${prefix}/aaf-process`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(parseUploadUrl)
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



function parseUploadUrl(json) {
    return {
        'signedUrl': json.uploadUrl,
         'jobId': json.jobStatus.jobId
    };
}
function parseJSON(response) {
    return response.json();
}



const Client = { get_signed_url, get_job_status, post_aaf_process, put_aaf_process, authenticate };
export default Client;
 


