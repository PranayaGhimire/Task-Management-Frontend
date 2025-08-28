import ProtectedRoute from "@/components/ProtectedRoute";
import CreateTaskForm from "@/components/Tasks/CreateTaskForm";
import React from "react";

const CreateTaskPage = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen p-10 space-y-5 ">
        <h1 className="text-2xl font-bold text-cyan-800">Create a new task</h1>
        <CreateTaskForm />
      </div>
    </ProtectedRoute>
  );
};

export default CreateTaskPage;
