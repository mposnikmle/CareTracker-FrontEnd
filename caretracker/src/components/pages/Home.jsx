import React from "react";

const Home = ({ user }) => {
  return (
    <>
      <div>
        <h1 className="greeting">Welcome To Your Homepage!</h1>
      </div>
      {user ? (
        <p className="helloUser">
          Hello, {user.firstName}! Your role is {user.role}
        </p>
      ) : (
        <p className="loginUser">please log-in to view this content.</p>
      )}
      <img
        id="nurseBackground"
        src="https://media.istockphoto.com/id/1461280039/photo/smiling-young-asian-woman-nurse-wearing-blue-uniform-with-stethoscope-holding-hands-in.jpg?s=1024x1024&w=is&k=20&c=1uy0RBN0tJWZ8PCliImnfC-piQgkw10-occKG1HHKPU="
        alt="nurse"
      ></img>
      {/* Make image adjustable or remove */}
      <p className="homeIntro">
        Welcome to Care Tracker, where every program is a home, and every home
        is a haven of care. Our commitment is to provide unparalleled support
        and a nurturing environment for residents and their dedicated staff.
        Discover the heart of care at Care Tracker, where most programs boast a
        vibrant balance of 2 residents and 2 dedicated staff members – a DSP and
        a House Manager. Our focus is on fostering close-knit, supportive
        communities where everyone is family. In our commitment to
        individualized care, we recognize that some residents have unique needs
        that demand additional support. That's why, at Care Tracker, we have the
        flexibility to assign up to 4 staff members for those requiring
        heightened assistance. Conversely, for those who thrive in more intimate
        settings, we offer residences with just one resident/client, ensuring a
        personalized and attentive environment.
      </p>
    </>
  );
};

export default Home;
