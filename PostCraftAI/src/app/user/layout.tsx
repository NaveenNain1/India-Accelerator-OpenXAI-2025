// app/user/layout.js
"use client";
import { useEffect, useState, useCallback } from "react";
import axios from "@/lib/axios"; // put axios setup in lib/axios.js
import ThemeOutlet from "@/comps/ThemeOutlet";
import { PageProvider } from '@/contexts/PageContext'

export default function UserLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginChecking, setIsLoginChecking] = useState(true);
  const [user, setUser] = useState({});
  const [pageTitle, setPageTitle] = useState("");
  const [showBackArrow, setShowBackArrow] = useState(false);

  const checkIfLoggedIn = useCallback(async () => {
    setIsLoginChecking(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoggedIn(false);
        return;
      }
      const res = await axios.get("user/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoggedIn(true);
      setUser(res.data.data);
      localStorage.setItem("username", res.data.data.name);
    } catch (e) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      console.error(e);
    } finally {
      setIsLoginChecking(false);
    }
  }, []);

  useEffect(() => {
    checkIfLoggedIn();
  }, [checkIfLoggedIn]);

  if (isLoginChecking) return  <div className="flex justify-center items-center h-screen">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>;
  if (!isLoggedIn) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }

  return (
            <PageProvider>

    <ThemeOutlet
      user={user}
    
    >
      {children}
    </ThemeOutlet>
    </PageProvider>
  );
}
