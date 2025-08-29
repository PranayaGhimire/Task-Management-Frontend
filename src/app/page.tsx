'use client'
import { useAuth } from '@/context/AuthProvider'
import Link from 'next/link'
import { CheckCircle, ListTodo, Rocket } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  const { token } = useAuth();

  return (
    <div className=" flex flex-col justify-between">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-cyan-50 to-white">
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-800">
          Welcome to <span className="text-cyan-600">Task Management App</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          Organize your tasks, track progress, and boost productivity — all in one place.
        </p>

        {token ? (
          <Link
            href="/tasks"
            className="mt-6 bg-cyan-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-cyan-600 transition"
          >
            View My Tasks
          </Link>
        ) : (
          <Link
            href="/login"
            className="mt-6 bg-cyan-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-cyan-600 transition"
          >
            Get Started
          </Link>
        )}
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 px-8 md:px-16 py-20">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
          <ListTodo className="text-cyan-600 w-10 h-10 mb-3" />
          <h2 className="text-lg font-semibold">Organize Tasks</h2>
          <p className="text-gray-500 text-sm mt-2 text-center">
            Create, categorize, and manage your daily tasks easily.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
          <CheckCircle className="text-cyan-600 w-10 h-10 mb-3" />
          <h2 className="text-lg font-semibold">Track Progress</h2>
          <p className="text-gray-500 text-sm mt-2 text-center">
            Stay updated on what’s done and what’s pending.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
          <Rocket className="text-cyan-600 w-10 h-10 mb-3" />
          <h2 className="text-lg font-semibold">Boost Productivity</h2>
          <p className="text-gray-500 text-sm mt-2 text-center">
            Focus on your goals and achieve more every day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
