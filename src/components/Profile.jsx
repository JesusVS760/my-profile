import "./Profile.css";

const Profile = ({ userData }) => {
  return (
    <div className="profile-container">
      <>
        <div className="profile-header">
          <h1>{userData?.name}</h1>
          <h3>{userData?.email}</h3>
        </div>
        <div className="profile-contact">
          <p>{userData?.phone}</p>
          <a href="./">{userData?.website}</a>
        </div>
      </>
    </div>
  );
};

export default Profile;
