import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import IfLoggedIn from "@/components/IfLoggedIn";
import IfLoggedOut from "@/components/IfLoggedOut";
import React from "react";

const page = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return <IfLoggedOut />
  }

  return <IfLoggedIn />;
};

export default (page);
