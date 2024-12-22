import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to fetch user data by username
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('User not found');
    }
};

// Function to fetch advanced user data based on additional criteria
export const fetchAdvancedUserData = async ({ username, location, repos }) => {
    try {
        let query = [];
        
        // Add username to the search query if provided
        if (username) query.push(`user:${username}`);
        
        // Add location to the search query if provided
        if (location) query.push(`location:${location}`);
        
        // Add repositories count filter (minRepos) if provided
        if (repos) query.push(`repos:>=${repos}`);  // Corrected query for minRepos
        
        const searchQuery = query.join(' ');

        // Make the search request to the GitHub API for advanced search
        const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`);
        
        return response.data;  // Return the search results
    } catch (error) {
        throw new Error('Error fetching advanced search results');
    }
};
