import Cookies from "js-cookie";
import qs from 'qs';

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
        body: JSON.stringify(body),
    });

    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const fetchGet = async (endpoint, body = []) => {
    if (!body.token) {
        let token = Cookies.get('token');

        if (token) {
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
    const { status } = res;
    const isUnauthorized = status === 403;
    const json = await res.json();

    if (isUnauthorized) {
        window.location.href = '/signin';
        return;
    }

    console.log(res);
    return json;
}

const OlxAPI = {
    login: async (email, password) => {
        const json = await fetchPost('/auth/login',
            { email, password }
        );
        return json;
    },

    register: async (name, email, password, passwordConfirm, stateLoc) => {
        const json = await fetchPost('/auth/register', {
            name, email, password, password_confirmation: passwordConfirm, state: stateLoc
        });

        return json;
    },

    getStates: async () => {
        const json = await fetchGet('/states');

        return json.data;
    },

    getCategories: async () => {
        const json = await fetchGet('/categories');

        return json.data;
    },

    getAds: async (options) => {
        const json = await fetchGet('/ads', options);

        return json.data;
    },

    getAd: async (id, others = true) => {
        const json = await fetchGet(`/ad/${id}`, {
            others
        });

        console.log(json);
        return json.data;
    }
}

export default () => OlxAPI;