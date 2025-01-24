"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import IfLoggedIn from "./IfLoggedIn";
import IfLoggedOut from "./IfLoggedOut";

const ProfilePage = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div><IfLoggedIn/></div>
  ) : (
    <div>
      <IfLoggedOut/>
    </div>
  );
};

export default ProfilePage;
