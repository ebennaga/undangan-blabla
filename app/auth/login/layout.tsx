import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-blue-200 to-cyan-200">
      {children}
    </div>
  );
};

export default AuthLayout;
