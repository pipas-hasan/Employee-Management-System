import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
      
        setEmail("");
        setPassword("");
        
    };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" border-2 border-emerald-600 p-20 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
          <input
            required
           value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-black outline-none font-bold bg-emerald-600 py-4 px-5 rounded-full placeholder:text-white mt-3 cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
