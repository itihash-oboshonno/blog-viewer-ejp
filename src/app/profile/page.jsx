import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import IfLoggedIn from "@/components/IfLoggedIn";
import IfLoggedOut from "@/components/IfLoggedOut";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const user = await isAuthenticated();
  return (
    <div>
      {user ? ( <IfLoggedIn /> ) : ( <IfLoggedOut /> )}
    </div>
  );
};

export default page;
