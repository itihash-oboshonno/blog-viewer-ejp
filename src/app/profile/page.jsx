import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import IfLoggedIn from "@/components/IfLoggedIn";
import IfLoggedOut from "@/components/IfLoggedOut";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      {user ? ( <IfLoggedIn /> ) : ( <IfLoggedOut /> )}
    </div>
  );
};

export default page;
