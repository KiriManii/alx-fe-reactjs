import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('User not found');
    }
};

export const fetchAdvancedUserData = async ({ username, location, repos }) => {
    try {
        let query = [];
        if (username) query.push(`user:${username}`);
        if (location) query.push(`location:${location}`);
        if (repos) query.push(`repos:>${repos}`);
        const searchQuery = query.join(' ');

        const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(searchQuery)}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching advanced search results');
    }
};
