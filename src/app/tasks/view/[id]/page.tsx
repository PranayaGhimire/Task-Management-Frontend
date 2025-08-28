import ProtectedRoute from "@/components/ProtectedRoute";
import ViewTask from "@/components/Tasks/ViewTask";
import React from "react";

const ViewTaskPage = () => {
  return (
    <ProtectedRoute>
      <div className="p-10 space-y-5 min-h-screen">
        <h1 className="text-2xl text-cyan-800 font-bold">Task Details</h1>
        <ViewTask />
      </div>
    </ProtectedRoute>
  );
};

export default ViewTaskPage;
