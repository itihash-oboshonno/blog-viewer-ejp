import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      {user ? (
        <div className="p-5">
          <h1 className="text-3xl font-bold mb-4">Welcome to your profile!</h1>
          <p>
            Name: {user.given_name} {user.family_name}
          </p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div className="p-5">
          This page is protected, please{" "}
          <LoginLink className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Login
          </LoginLink>{" "}
          to view it
        </div>
      )}
    </div>
  );
};

export default page;
