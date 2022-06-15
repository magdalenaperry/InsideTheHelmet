// Node Modules
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// Utilities
import {
  QUERY_USERS,
  QUERY_USER,
  QUERY_ME,
  QUERY_DEMO
} from "../utils/queries";
// Components
import { SpinnerDotted } from 'spinners-react'

// const styles = {
//   profile: {
//     textAlign: "center",
//     width: "150px",
//     height: "150px",
//   },
// };

const Admin = () => {

  const { id } = useParams();

  // Get current user
  const { loading: meLoading, data: meData, error: meError } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });


  const user = meData?.me || meData?.user || {};
  // const users = usersData?.users || [];
  // console.log(user)

  const { loading: usersLoading, data: usersData, error: usersError } = useQuery(QUERY_USERS)

  const athletes = usersData || {}
  // console.log(athletes)

  const { loading: demoLoading, data: demoData, error: demoError } = useQuery(QUERY_DEMO)

  const demo = demoData || {}
  console.log(demo)


  // const user = data?.me || data?.user || {};
  // console.log(user)


  if (usersLoading) {
    return (
      <main className="text-center mt-5">
        <SpinnerDotted />
      </main>
    );
  }

  // const dassArr = []

  // const getDassArr = () => {
  //   athletes.users.map((athlete) => {
  //     athlete.dass.map((dass) => {
  //       console.log(dass)
  //       if (Object.values(dass)) { 
  //         Object.values(dass).forEach(val =>
  //           console.log(val)
  //         );
  //       }
  //     })
  //   })
    // const sumArr = dassArr.filter(num => num)
    // console.log(sumArr);
  
    // const sumValues = sumArr.reduce((a, b) => a + b);
    // console.log(sumValues);
    // return sumValues;
  // }



  // console.log(dassArr)

  // const sumDassArr = () => {
  //   const sumArr = dassArr.filter(num => num)
  //   console.log(sumArr);

  //   const sumValues = sumArr.reduce((a, b) => a + b);
  //   console.log(sumValues);
  //   return sumValues;
  // }

  // console.log(sumDassArr(sum))

console.log(athletes)
  const renderCurrentUserInfo = () => {
    // if (id) return null;
    return (
      <>
        <h1 className="titles mt-5">Admin Dashboard</h1>
        <div className="row">
          {/* ME DATA! */}
          <div className="col-md-4 mb-5">

            <div className="card shadow rounded bg-white mt-5 pt-5" style={{ height: "400" }}>
              <div className="px-5">
                <img
                  className="img-fluid"
                  src="https://via.placeholder.com/400"
                  stle={{ width: "100%" }}
                  alt="avatar"
                />
              </div>
              <div className="px-5 py-5 pt-3 mt-0">
                <p className="">
                  {user.username}
                </p>
                <p>{user.email}</p>

              </div>
            </div>

          </div>
          {/* ATHLETES DATA */}
          <div className="col-md-8">
            <div className="card shadow rounded bg-white mt-5 pt-5">
              {athletes.users.map((athlete) =>
                <>
                  <div >
                    <p>
                      {athlete.username}
                    </p>
                    <p>
                      {athlete.age}
                    </p>
                    <p>
                      {athlete.athleteType}
                    </p>
                    <p>
                      {athlete.email}
                    </p>
                    {athlete.dass.map(
                      (dass) => (
                        <>
                          {dass.dass1}
                          {dass.dass2}
                          {dass.dass3}
                          {dass.dass4}
                          {dass.dass5}
                          {dass.dass6}
                          {dass.dass7}
                          {dass.dass8}
                          {dass.dass9}
                          {dass.dass10}
                          {dass.dass11}
                          {dass.dass12}
                          {dass.dass13}
                          {dass.dass14}
                          {dass.dass15}
                          {dass.dass16}
                          {dass.dass17}
                          {dass.dass18}
                          {dass.dass19}
                          {dass.dass20}
                          {dass.dass21}
                          {/* = sum: {getDassArr()} */}
                          {/* {sumDassArr()} */}
                        </>
                      ))}


                    {athlete.demographics.map(
                      (demo) => (
                        <>
                          {demo.race}
                          {demo.ethnicity}
                        </>
                      )
                    )}
                  </div>
                  <hr />
                </>
              )}







            </div>
          </div>
        </div>
        <div className="card shadow col-12 rounded bg-white mb-5" style={{ height: "400" }}>
          <p className="my-5">Section Here</p>
        </div>
      </>
    );
  };

  return (
    <>
      <main className="text-center">
        <div className="container">
          {renderCurrentUserInfo()}

        </div>

      </main>
    </>
  );
};

export default Admin;
