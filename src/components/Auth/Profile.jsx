import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/api';

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            } catch (err) {
                navigate('/');
            }
        };

        fetchProfile();
    }, [navigate]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>Welcome, {user.email}</h2>
            <button onClick={() => { localStorage.removeItem('token'); navigate('/'); }}>Logout</button>
        </div>
    );
};

export default Profile;