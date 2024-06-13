import { useEffect, useState } from "react";
import { getProfile } from "../services/UserService";

const Profile = ({ userId = 2 }) => {
    console.log('Profile');

    const [userProfile, setUserProfile] = useState('');

    useEffect(() => {
        getProfile(userId)
            .then((response) => {
                console.log(response.data);
                setUserProfile(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    console.log('Done!');

    return (
        <>
            <h1>User Profile Component</h1>
            <>
                {userProfile &&
                    <>
                        <h3>{userProfile.name}</h3>
                        <p>{userProfile.name}</p>
                        <p>{userProfile.email}</p>
                        <p>{userProfile.address.city}</p>
                        <p>{userProfile.phone}</p>
                        <p>{userProfile.company.name}</p>
                    </>
                }
            </>
        </>
    );
}

export default Profile;

