import React from "react";
import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

export const LoginButton = () => <Button label="LOGIN" />;
export const LogoutButton = () => <Button label="LOGOUT" backgroundColor="#F3A85F" />;
export const Signup = () => <Button label="SIGNUP" backgroundColor="#F3A85F" />;
export const Apply = () => <Button label="APPLY" backgroundColor="#F3A85F" />;
export const OrderNow = () => <Button label="ORDER NOW" backgroundColor="#F3A85F" />;
export const SaveChanges = () => <Button label="SAVE CHANGES" backgroundColor="#F3A85F" />;
