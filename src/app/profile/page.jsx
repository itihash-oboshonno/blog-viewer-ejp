import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import IfLoggedIn from "@/components/IfLoggedIn";
import IfLoggedOut from "@/components/IfLoggedOut";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return <IfLoggedOut />
  }

  return <IfLoggedIn />;
};

export default page;
