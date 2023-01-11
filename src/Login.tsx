import { useContext, useEffect, useState } from "react";
import Dialog from "./Dialog";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { UserContext } from "./App";
import { supaClient } from "./supa-client";
import { setReturnPath } from "./use-session";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState<"sign_in" | "sign_up">("sign_in");
  const { session } = useContext(UserContext);

  useEffect(() => {
    if (session?.user) {
      setShowModal(false);
    }
  }, [session]);

  return (
    <>
      <div className="flex m-4 place-items-center">
        <button
          className="login-button"
          onClick={() => {
            setShowModal(true);
            setAuthMode("sign_in");
            setReturnPath();
          }}
        >
          Login
        </button>
        <span className="p-2"> or </span>{" "}
        <button
          className="login-button"
          onClick={() => {
            setShowModal(true);
            setAuthMode("sign_up");
            setReturnPath();
          }}
        >
          Sign Up
        </button>
      </div>
      <Dialog
        open={showModal}
        dialogStateChange={(open) => setShowModal(open)}
        contents={
          <>
            <Auth
              providers={["google"]}
              supabaseClient={supaClient}
              view={authMode}
              appearance={{
                theme: ThemeSupa,
                className: {
                  container: "login-form-container",
                  label: "login-form-label",
                  button: "login-form-button",
                  input: "login-form-input",
                }
              }}
            />
            <button onClick={() => setShowModal(false)}>Close</button>
           </>
        }
      />
    </>
  );
}