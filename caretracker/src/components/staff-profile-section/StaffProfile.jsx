import React, { useEffect, useState } from "react";
import "../../App.css";
import "./StaffProfile.css";

function StaffProfile(props) {
  const { token, staff } = props;

  console.log(props.staff)

  return (
    <>
      <div class="profile">
        <div class="profile_header">
          <div class="profile_headercontainer">
            <div class="profile_userimgbox">
              <img
                src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                alt="profile pic"
              />
            </div>
            <div class="profile_headerdata">
              <h1>{staff.firstname} {staff.lastname}</h1>
              <h2>{staff.email}</h2>
            </div>
          </div>
        </div>
        <div class="profile_body">
          <div class="profile_role">
            <h2>{staff.role}</h2>
          </div>
          <div class="profile_content">
            <h1>PTO Balance: </h1>
            <h2>0.0</h2>
          </div>
          <div class="certification">
            <h1>Certification:</h1>
            <h2>CRMA: </h2>
            <h2>CPR: </h2>
            <h2>Driver's License: </h2>
            <h2>Sexual Harrassment: </h2>
            <h2>Work Authorization: </h2>
          </div>
          <div className="profile_wages">
            <h1>Hourly Rate:</h1>
            <h2>$22.50</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffProfile;
