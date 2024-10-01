import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const {username} = useParams();
    const [profile,setProfile] = useState(null);

    useEffect(()=>{
        const fetchProfile = async ()=> {
            setProfile({name: username, bio: 'Stuff about the user.'});
        };
        fetchProfile();
    }, [username]);

    return (
        <div>
            <h1>User Profile: {profile ? profile.name : 'Loading...'}</h1>
            <p>{profile ? profile.bio : ''}</p>
        </div>
    );
}

export default UserProfile;