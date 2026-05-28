import { useState } from "react";
import { motion } from "framer-motion";
import API from "../services/api";
import { LogIn } from "lucide-react";

function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin = async () => {
    try{
      const res = await API.post(
        "login/",
        {
          username,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.access
      );

      alert("Login success");

      window.location.href="/";
    }
    catch(err){
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity:0,y:40 }}
        animate={{ opacity:1,y:0 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <LogIn className="text-cyan-400"/>
          <h1 className="text-3xl font-bold logo-font text-white">
            Welcome Back
          </h1>
        </div>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none"
          />

          <motion.button
            whileHover={{ scale:1.03 }}
            whileTap={{ scale:.96 }}
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 py-4 rounded-2xl text-white font-semibold"
          >
            Login
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
}

export default Login;