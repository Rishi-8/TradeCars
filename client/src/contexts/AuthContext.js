import React, { createContext, useState, useEffect } from 'react';
import apiClient from '../apiClient';
import { Spinner } from '@chakra-ui/react';

// Create a context for auth state
const AuthContext = createContext();

// Auth provider component
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserDetails = async (token) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await apiClient.get('/api/users/profile', config);
            setUser(response.data);
        } catch (error) {
            console.error('Failed to fetch user data', error);
            setUser(null); // Handle error (e.g., log out user)
        } finally {
            setLoading(false); // Stop loading once the check is done
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserDetails(token);
        } else {
            setLoading(false); // If no token, stop loading and set loading to false
        }
    }, []);

    const refetchUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoading(true); // Start loading before fetching
            await fetchUserDetails(token);
        }
    };

    const logout = () => {
        localStorage.removeItem('token'); // Remove token from storage
        setUser(null); // Clear user state
    };

    // Render loading indicator or null while data is being fetched
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spinner size="xl" />
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{ user, loading, refetchUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
