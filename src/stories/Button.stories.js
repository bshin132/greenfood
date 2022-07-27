import React from "react";
import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

export const LoginButton = () => <Button label="LOGIN" />;
export const LogoutButton = () => <Button label="LOGOUT" />;
export const Signup = () => <Button label="SIGNUP" backgroundColor="#ECC04B" />;
export const Apply = () => <Button label="APPLY" />;
export const OrderNow = () => <Button label="ORDER NOW" />;
export const SaveChanges = () => <Button label="SAVE CHANGES" />;
