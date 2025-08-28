import ProtectedRoute from "@/components/ProtectedRoute";
import EditTaskForm from "@/components/Tasks/EditTaskForm";
import React from "react";

const EditTaskPage = () => {
  return (
    <ProtectedRoute>
      <div className="p-10 space-y-5 min-h-screen">
        <h1 className="text-2xl font-bold  text-cyan-800">Edit Task</h1>
        <EditTaskForm />
      </div>
    </ProtectedRoute>
  );
};

export default EditTaskPage;
