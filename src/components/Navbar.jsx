import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <Link href="/">
          <p className="font-bold text-2xl">Blog Viewer</p>
        </Link>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-5">
            <Link href="/profile" className="hover:underline">
              Profile
            </Link>
            <Link
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              href="/api/auth/logout"
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/" className="mr-4 hover:underline">
              Home
            </Link>
            <Link
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              href="/api/auth/login"
            >
              Sign In
            </Link>
            <Link
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              href="/api/auth/register"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
