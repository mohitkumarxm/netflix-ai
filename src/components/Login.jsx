import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(false);
  const [errorMessages, setErrorMessages] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const validate = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessages(validate);
    if (validate) return;

    if (!isSignInForm) {
      //sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user==", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      //signIn
    }
  };
  return (
    <>
      <div className="">
        <Header />
        <div className="relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
            alt="Browse"
            className="w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 from-[10%] via-black/50 via-[30%] to-black/80 to-[100%]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 max-w-lg mx-auto p-6 rounded-lg">
            <div className=" text-white">
              <h1 className="text-4xl font-bold">
                {isSignInForm ? "Sign Up" : "Sign In"}
              </h1>
            </div>

            <div className="">
              <form onSubmit={(e) => e.preventDefault()}>
                {isSignInForm && (
                  <input
                    ref={name}
                    type="text"
                    placeholder="Full Name"
                    className="p-2 rounded-md w-full border-amber-50 text-white py-4 my-4"
                  />
                )}

                <input
                  ref={email}
                  type="email"
                  placeholder="Email address"
                  className="p-2 rounded-md w-full border-amber-50 text-white py-4 my-4"
                />
                <input
                  ref={password}
                  type="password"
                  placeholder="password"
                  className="p-2 rounded-md w-full border-amber-50 text-white py-4 my-4"
                />
                {errorMessages && (
                  <div className="py-4 text-red-600 text-center font-bold">
                    {errorMessages}
                  </div>
                )}
                <button
                  className="bg-red-600 text-white p-2 pb-4 font-bold text-2xl w-full rounded-md"
                  onClick={() => handleButtonClick()}
                >
                  Get Started
                  <span className="font-bold text-4xl"> &gt;</span>
                </button>
              </form>
            </div>
            <div className=" text-white text-center py-4">
              {isSignInForm ? "Already have an account? " : "New to Netflix? "}

              <button
                className=" text-white font-bold cursor-pointer"
                onClick={() => {
                  toggleSignInForm();
                }}
              >
                {isSignInForm ? " Sign In now." : " Sign up now."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
