"use client";
 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
   
  const {user, googleSignIn, logOut,accessToken } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const tesToken = async () => {
    try {
      await accessToken();
    } catch (error) {
      console.log(error);
    }
  };



 
    return (
        <div className="min-h-screen flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignIn}>Test Integracion</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={tesToken}>Test Token</button>
        </div>
      )
}

export default Login;