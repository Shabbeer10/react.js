import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card,CardActionArea, CardMedia, CardContent,Typography } from '@mui/material';
import { admins } from './adminData'; // Adjust the path as necessary
import CardComp from './CardComp';

export default function UserProfile() {
    const { username } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = () => {
            setLoading(true);
            setError(null);
            // Simulate data fetching with a timeout
            setTimeout(() => {
                const user = admins.find(admin => admin.alias.toLowerCase() === username.toLowerCase());
                if (user) {
                    setProfile(user);
                } else {
                    setError('User not found.');
                }
                setLoading(false);
            }, 1000); // pretend network delay
        };

        fetchProfile();
    }, [username]);

    if (loading) {
        return (
            <div className='container'>
            <Card sx={{ minWidth: 600 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image= ''
                alt= ''
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Loading Admin...
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <p><strong>Title:</strong>Loading...</p>
                    <p><strong>Age:</strong>Loading...</p>
                    <p>Loading Bio...</p>
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            <CardComp />
        </div>
        );
    }

    if (error) {
        return (
            <div className='container'>
                <h1>Error Loading Profile</h1>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className='container'>
            <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image= {profile.image}
                alt= {`${profile.alias}`}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Welcome, Administrator {profile.alias}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <p><strong>Title:</strong> {profile.title}</p>
                    <p><strong>Age:</strong> {profile.age}</p>
                    <p>{profile.bio}</p>
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            <CardComp />
        </div>
    );
}

