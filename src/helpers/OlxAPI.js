import Cookies from "js-cookie";

const BASEAPI = 'http://127.0.0.1:8000/api';

const fetchPost = async (endpoint, body) => {
    if (!body.token) {
        let token = Cookies.get('token');

        if (token) {
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const OlxAPI = {
    login: async (email, password) => {
        const json = await fetchPost('/auth/login',
            { email, password }
        );
        return json;
    }
}

export default () => OlxAPI;