import { useState } from "react";

export function togglePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePass = () => {
    setShowPassword((prevPass) => !prevPass);
  };
  return { showPassword, togglePass };
}
