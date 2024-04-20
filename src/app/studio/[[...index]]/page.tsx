"use client";
import { NextStudio } from "next-sanity/studio";
import React from "react";
import config from "../../../../sanity.config";
import { GetServerSidePropsContext } from "next";

const AdminPage = () => {
  return <NextStudio config={config} />;
};

export default AdminPage;
// const AdminPage = () => {
//   return <div>Admin</div>;
// };

// export default AdminPage;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // Perform any data fetching or computations needed for rendering the page
  // If no specific data fetching is needed, you can simply return an empty props object
  return { props: {} };
};
