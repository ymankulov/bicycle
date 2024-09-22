import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const SignIn = () => {
  const { register, signInWithGoogle } = useAuth();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function handleRegister() {
    try {
      await register(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }
  async function handlSignIn() {
    try {
      await signIn(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="w-[700px] h-[400px] bg-white rounded-xl flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-[30px]">
        <input
          type="text"
          placeholder="Email"
          className="text-2xl outline-none border-2 border-solid border-black py-2 px-[50px] rounded-2xl text-black"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="text-2xl outline-none border-2 border-solid border-black py-2 px-[50px] rounded-2xl text-black"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="flex items-center gap-[10px]">
          <button
            className="text-2xl bg-black text-white py-[10px] px-[50px] rounded-2xl"
            onClick={handleRegister}
          >
            Register
          </button>
          <button
            className="text-2xl bg-black text-white py-[10px] px-[50px] rounded-2xl"
            onClick={handlSignIn}
          >
            Sign In
          </button>
        </div>
        <button
          type="button"
          class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          onClick={() => signInWithGoogle()}
        >
          <svg
            class="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fill-rule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
