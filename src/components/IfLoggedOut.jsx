'use client';

import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';

const IfLoggedOut = () => {
    return (
        <div className="p-5">
          This page is protected, please{" "}
          <LoginLink className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Login
          </LoginLink>{" "}
          to view it
        </div>
    );
};

export default IfLoggedOut;