import React from "react";
import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

export const LoginButton = () => <Button label="LOGIN" />;
export const LogoutButton = () => <Button label="LOGOUT" backgroundColor="#F3A85F" />;
