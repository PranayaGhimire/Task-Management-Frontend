'use client'
import ProtectedRoute from "@/components/ProtectedRoute";
import ViewTasks from "@/components/Tasks/ViewTasks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const TasksPage = () => {
  const [taskStatus,setTaskStatus] = useState("");
  const [taskPriority,setTaskPriority] = useState("");
  const [isOpen,setIsOpen] = useState(false);
  return (
    <ProtectedRoute>
      <div className="p-10 space-y-5 min-h-screen">
        <h1 className="text-2xl font-bold text-cyan-800">All Tasks</h1>
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <div className="md:flex md:justify-between items-center">
              <Button asChild className="w-28 bg-cyan-600 hover:bg-cyan-700 cursor-pointer">
                <Link
                  href={`/tasks/create`}
                  
                >
                  Create Task
                </Link>  
              </Button>
              
              <div className="space-x-5 space-y-3 mt-3">             
                  <select onChange={(e) => setTaskStatus(e.target.value)} 
                  className="w-28 bg-gray-200 p-1.5 rounded-lg border-2 border-gray-400">
                    <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                  <select onChange={(e) => setTaskPriority(e.target.value)} 
                  className="w-28 bg-gray-200 p-1.5 rounded-lg border-2 border-gray-400">
                    <option value="">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  <Button onClick={() => setIsOpen(true)} 
                  className="w-28 bg-cyan-600 hover:bg-cyan-700 cursor-pointer">
                    Load Tasks
                  </Button>   
              </div>
          </div>

          {isOpen && <ViewTasks taskStatus={taskStatus} taskPriority={taskPriority} />}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default TasksPage;
