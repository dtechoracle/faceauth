"use client";
import React, { useEffect, useState } from "react";
import faceIO from "@faceio/fiojs";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Payload {
  userEmail: string;
  pin: string;
}

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const faceio = new faceIO("fioac148");
  const [payload, setPayload] = useState<Payload>({ userEmail: "", pin: "" });
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false); // New state variable

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const enrollNewUser = async () => {
    try {
      const userInfo = await faceio.enroll({
        locale: "auto",
        payload: {
          email: payload.userEmail,
          pin: payload.pin,
        },
      });
      alert(
        `User Successfully Enrolled! Details:
        Unique Facial ID: ${userInfo.facialId}
        Enrollment Date: ${userInfo.timestamp}
        Gender: ${userInfo.details.gender}
        Age Approximation: ${userInfo.details.age}`
      );
      localStorage.setItem("faceId", userInfo.facialId);
      router.push("/dashboard");

      console.log(userInfo);
    } catch (error) {
      console.error("Enrollment failed:", error);
    }
  };

  const authenticateUser = async () => {
    try {
      const userData = await faceio.authenticate({
        locale: "auto",
      });
      console.log("Success, user identified");
      console.log("Linked facial Id: " + userData.facialId);
      console.log("Payload: " + JSON.stringify(userData.payload));
      localStorage.setItem("faceId", userData.facialId); // Store face ID in local storage
      router.push("/dashboard");
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(payload);
    if (isSigningUp) {
      enrollNewUser();
    } else {
      authenticateUser();
    }
  };

  const toggleSignUp = () => {
    setIsSigningUp((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1">
          <div className="hidden w-64 bg-gray-100 p-4 md:block">
            <Sidebar />
          </div>
          <main className="flex-1 bg-gray-50 p-4 md:p-6">
            <div className="grid gap-6">
              <section className="flex items-center justify-center">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md"
                  data-v0-t="card"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="text-left whitespace-nowrap font-black tracking-tight text-2xl text-black">
                        {isSigningUp ? "Sign Up" : "Login"}
                      </h3>
                      <p className="text-sm text-muted-foreground text-gray-600 text-left">
                        {isSigningUp
                          ? "Create your account by entering your email and password."
                          : "Enter your email and password to access your account."}
                      </p>
                    </div>
                    <div className="p-6 space-y-4 text-left">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black text-left">
                          Email
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                          id="email"
                          placeholder="m@example.com"
                          type="email"
                          name="userEmail"
                          value={payload.userEmail}
                          onChange={onChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black text-left">
                          Password
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                          id="password"
                          type="password"
                          name="pin"
                          value={payload.pin}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="flex items-center p-6">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gray-900">
                        {isSigningUp ? "Sign Up" : "Login"}
                      </button>
                    </div>
                  </form>
                </div>
              </section>
              <div className="flex justify-center">
                <button
                  className="text-blue-600 underline mt-4"
                  onClick={toggleSignUp}
                >
                  {isSigningUp ? "Login instead" : "Sign Up instead"}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
