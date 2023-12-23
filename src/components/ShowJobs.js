import { useState } from "react";
const ShowJobs = () => {
  const postData = async () => {
    const res = await fetch(
      "https://job-portal-2f0b0-default-rtdb.firebaseio.com/allJobs.json",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(res);
  };
  return <div>
    
  </div>;
};
