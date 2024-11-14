import React, { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return <button className="btn btn-primary">{children}</button>;
};
