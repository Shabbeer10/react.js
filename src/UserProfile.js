import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CardComp from './CardComp';
import { users } from './userData';

function UserProfile() {
    const {username} = useParams();
    const [profile,setProfile] = useState(null);

    useEffect(()=>{
        const fetchProfile = async ()=> {
            setProfile({name: username, bio: 'Here is some stuff about the user.'});
        };
        fetchProfile();
    }, [username]);

    return (
        <div className='container'>
            <h1>{profile ? `Welcome, Administrator ${profile.name}` : 'Loading Identity...'}</h1>
            <p>{profile ? profile.bio : 'Loading Bio'}</p>
            <CardComp />
        </div>
    );
}

export default UserProfile;