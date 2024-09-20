import { Turnstile } from "@marsidev/react-turnstile";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [token, settoken] = useState("");
  return (
    <>
      <input type="text" placeholder="Enter OTP" />
      <input type="text" placeholder="Enter New Password" />
      <Turnstile
        onSuccess={(token) => settoken(token)}
        siteKey="0x4AAAAAAAkWzTyzTw7wemz3"
      />
      <button
        onClick={() =>
          axios.post("http://localhost:3000/reset-password", {
            email: "harkirat@gmail.com",
            otp: 123,
            newPassword: "123123123",
            token: token,
          })
        }
      >
        Update Password
      </button>
    </>
  );
};
export default App;
