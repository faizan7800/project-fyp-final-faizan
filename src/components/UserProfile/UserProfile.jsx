import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import "./UserProfile.css"
import { useGetUserByIdQuery } from "../../services/nodeApi";
const UserProfile = () => {
  const userId = jwtDecode(Cookies.get("jwt")).id;
  const { data } = useGetUserByIdQuery(userId);

  return (
    <div>
      <h1 style={{backgroundColor: "#4096FF", color: 'white', padding:"10px", borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>User Profile</h1>
      <div style={{}}>
        
      <div>
        {/* <div className="flex" style={{ alignItems: "center" }}>
          <p>
            {" "}
            <strong>Your Name: </strong>{" "}
          </p>{" "}
          <p>Muhammad Faizan</p>
        </div> */}
        <div className="flex" style={{}}>
          <p>
            {" "}
            <strong>Your Email: </strong>{" "}
          </p>{" "}
          < p style={{color:"#4096FF", fontWeight:"bold"}}> &nbsp; {data?.data.email}</p>
        </div>
        <div className="flex" style={{  }}>
          <p>
            {" "}
            <strong> Bookmarked News: </strong>
          </p>{" "}
          <p style={{color:"#4096FF", fontWeight:"bold"}}> &nbsp; {data?.data.bookmark.length}</p>
        </div>
      </div>
      <hr />
      </div>
    </div>
  );
};

export default UserProfile;
