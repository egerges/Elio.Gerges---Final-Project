'USE STRICT';

const API_CONTROLLER = (function () {

    // BASE API URL
    const baseUrl = './api/';

    const config = {
        headers: {
            'content-type' : 'application/json'
        }
    };

    function getSongs() {
        var url = baseUrl + 'songs';

        return fetch(url, {method: 'GET', ...config});
    }

    return {
        getSongs
    };
})();