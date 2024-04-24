"use client";
import { NextStudio } from "next-sanity/studio";
import React from "react";
import config from "../../../../sanity.config";

const AdminPage = () => {
  return (
    <div className="studio" style={{ fontSize: "unset" }}>
      <NextStudio config={config} />
    </div>
  );
};

export default AdminPage;
// const AdminPage = () => {
//   return <div>Admin</div>;
// };

// export default AdminPage;
