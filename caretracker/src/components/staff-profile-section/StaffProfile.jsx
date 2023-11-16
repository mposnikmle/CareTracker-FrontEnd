import React from 'react';
import './StaffProfile.css'

// Replace these values with actual staff data
const staffName = "John Doe";
const staffRole = "Direct Service Provider";
const staffEmail = "john.doe@example.com";

function StaffProfile(props) {
    return (
        <>
            <div class="profile">
                <div class="profile_header">
                    <div class="profile_headercontainer">
                        <div class="profile_userimgbox">
                            <img src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="profile pic" />
                        </div>
                        <div class="profile_headerdata">
                            <h1>{staffName}</h1>
                            <h2>{staffEmail}</h2>   
                        </div>

                    </div>

                </div>
                <div class="profile_body">
                    <div class="profile_role">
                        <h2>{staffRole}</h2>

                    </div>
                    <div class="profile_content">
                        <h1>PTO Balance: </h1>
                        <h2>99.99</h2>
                    </div>
                    <div class="certification">
                        <h1>Certification:</h1>
                        <h2>Expiring: 09/13/24</h2>
                    </div>
                    <div className="profile_wages">
                        <h1>Hourly Rate:</h1>
                        <h2>22.50</h2>
                    </div>

                </div>
                

                
            </div>
        </>
    );
}


export default StaffProfile;