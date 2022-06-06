import React from "react";
import Input from "../components/Input/Input";

export default {
  title: "Input",
  component: Input,
};

export const SearchFood = () => <Input label="Search for food..." />;
export const SearchRestaurant = () => <Input label="Search for restaurant..." />;
export const Email = () => <Input label="Email"borderRadius="0" />;
export const Password = () => <Input label="Password" borderRadius="0" />;
export const FirstName = () => <Input label="First Name" borderRadius="0" />;
export const LastName = () => <Input label="Last Name" borderRadius="0" />;
export const PhoneNumber = () => <Input label="Phone Number" borderRadius="0" />;
export const Location = () => <Input label="Location" borderRadius="0" />;
