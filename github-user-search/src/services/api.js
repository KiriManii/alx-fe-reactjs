import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const fetchGitHubUser = (username) => {
    return axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
};
