// remove the GITHUB_ at the beggining of this file and replace the api token with your own to use this.
exports.shortenURL = async (urlts) => {
    const XMLHttpRequest = require('xhr2');
    return new Promise(resolve => {
    let apiKey = 'YOUR API TOKEN';
    let url = 'https://api.rebrandly.com/v1/links';
    let data = JSON.stringify({ destination: urlts });
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => { 
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(`${urlts} => ${xhr.response.shortUrl}`)
            resolve(`http://${xhr.response.shortUrl}`);
        } 
    };
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    xhr.send(data);
})}
