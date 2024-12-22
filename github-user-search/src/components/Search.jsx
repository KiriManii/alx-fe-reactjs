import React, { useState } from 'react';
import { fetchAdvancedUserData, fetchUserData } from '../services/githubService';  // Import fetchUserData

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [repos, setRepos] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResults([]);

        try {
            let data;

            // If username is provided, use fetchUserData for the username search
            if (username) {
                data = await fetchUserData(username);
                setResults([data]); // Since fetchUserData returns a single user, wrap in an array
            } else {
                // Perform advanced search if no username
                const query = { username, location, repos };
                data = await fetchAdvancedUserData(query);
                setResults(data.items); // GitHub Search API returns results in `items`
            }

        } catch (err) {
            setError("Error fetching data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSearch} className="space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    className="p-2 border rounded w-full"
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                    className="p-2 border rounded w-full"
                />
                <input
                    type="number"
                    value={repos}
                    onChange={(e) => setRepos(e.target.value)}
                    placeholder="Minimum repositories"
                    className="p-2 border rounded w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="mt-4 space-y-4">
                {results.map((user) => (
                    <div key={user.id} className="p-4 border rounded">
                        <img
                            src={user.avatar_url}
                            alt={`${user.login}'s avatar`}
                            width={50}
                            className="rounded-full"
                        />
                        <h2 className="text-lg font-bold">{user.login}</h2>
                        <p>Location: {user.location || "N/A"}</p>
                        <p>Repositories: {user.public_repos}</p>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
