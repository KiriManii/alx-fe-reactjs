import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (username) => {
        setLoading(true);
        setError('');
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can't find the user</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width={100} />
                    <h2>{userData.name || userData.login}</h2>
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            Visit GitHub Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default App;
