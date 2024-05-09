"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const faceid = localStorage.getItem("faceId");
    if (!faceid) {
      router.push("/");
    }
  }, [history]);

  const dashboardData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-gray-500"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      value: 120,
      label: "Employees",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-gray-500"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
      ),
      value: 15,
      label: "Birthdays",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-gray-500"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        </svg>
      ),
      value: 8,
      label: "Openings",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-gray-500"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        </svg>
      ),
      value: 24,
      label: "Policies",
    },
  ];

  // Data for Team Directory section
  const teamDirectoryData = [
    {
      name: "John Doe",
      role: "Software Engineer",
      email: "jdoe@acme.com",
      image: "https://placehold.co/400",
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      email: "jsmith@acme.com",
      image: "https://placehold.co/400",
    },
    {
      name: "Bob Johnson",
      role: "Designer",
      email: "bjohnson@acme.com",
      image: "https://placehold.co/400",
    },
  ];

  // Data for HR Resources section
  const hrResourcesData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-gray-500"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      ),
      title: "Employee Handbook",
      description: "Review our company policies and procedures.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-gray-500"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        </svg>
      ),
      title: "Benefits Overview",
      description: "Learn about our health, dental, and retirement benefits.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-gray-500"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
      ),
      title: "Time Off Policy",
      description: "Review our vacation, sick, and holiday policies.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1">
          <div className="hidden w-64 bg-gray-100 p-4 md:block">
            <Sidebar />
          </div>
          <main className="flex-1 bg-gray-50 p-4 md:p-6">
            {/* Dashboard Section */}
            <section>
              {/* Dashboard content */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  View All
                </button>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {dashboardData.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      {item.icon}
                    </div>
                    <div className="p-6">
                      <div className="text-4xl font-bold">{item.value}</div>
                      <div className="text-gray-500">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Team Directory Section */}
            <section>
              {/* Team directory content */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-2xl font-bold">Team Directory</h2>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  View All
                </button>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {teamDirectoryData.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <img
                        src={item.image}
                        width="48"
                        height="48"
                        className="rounded-full"
                      />
                    </div>
                    <div className="p-6">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-gray-500">{item.role}</div>
                      <div className="text-gray-500">{item.email}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* HR Resources Section */}
            <section>
              {/* HR resources content */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-2xl font-bold">HR Resources</h2>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  View All
                </button>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {hrResourcesData.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      {item.icon}
                    </div>
                    <div className="p-6">
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-gray-500">{item.description}</div>
                    </div>
                    <div className="flex items-center p-6">
                      <a className="text-blue-500 hover:underline" href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Page;
