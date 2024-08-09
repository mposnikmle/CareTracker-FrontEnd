import React from "react";

const Home = ({ user, updateUser }) => {
  console.log(user);
  React.useEffect(() => {
    updateUser("TestMary");
  }, []);
  return (
    <>
      <div>
        <h1 className="greeting">Welcome To Your Homepage!</h1>
      </div>
      {user ? (
        <p className="helloUser">
          {/* Hello, {user.firstName}! Your role is {user.role} */}
          <img
            id="nurseBackground"
            src="https://images.unsplash.com/photo-1590105577767-e21a1067899f?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="nurses"
          ></img>
          <p className="homeIntro">
            Discover the heart of care at CareTracker, where most programs
            boast a vibrant balance of 2 residents and 2 dedicated staff members
            – a DSP and a House Manager. Our focus is on fostering close-knit,
            supportive communities where everyone is family.
            <br></br>
            In our commitment to individualized care, we recognize that some
            residents have unique needs that demand additional support. That's
            why, at CareTracker, we have the flexibility to assign up to 4
            staff members for those requiring heightened assistance. Conversely,
            for those who thrive in more intimate settings, we offer residences
            with just one resident/client, ensuring a personalized and attentive
            environment.
            <br></br>
            <br></br>
            At CareTracker, we believe in tailoring our approach to meet the
            specific needs of each individual, creating an atmosphere of
            inclusivity and compassion. Our dedicated team strives to provide
            not only exceptional care but also a sense of belonging and
            community for both residents and staff. Welcome to a place where
            care goes beyond duty – it's a way of life.
          </p>
        </p>
      ) : (
        <p className="loginUser">please log-in to view this content.</p>
      )}
    </>
  );
};

export default Home;
