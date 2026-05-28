import { useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";

function Signup({ onSignup }) {
  const [isLogin, setIsLogin] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuth = async () => {
    try {

      // LOGIN
      if (isLogin) {
        const res = await API.post("login/", {
          username: form.username,
          password: form.password,
        });

        localStorage.setItem(
          "token",
          res.data.access
        );

        alert("Login Successful");
        onSignup();
      }

      // SIGNUP
      else {
        await API.post("register/", {
          username: form.username,
          email: form.email,
          password: form.password,
        });

        alert(
          "Signup Successful. Please Login."
        );

        setIsLogin(true);
      }

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.username?.[0] ||
        err.response?.data?.detail ||
        (isLogin
          ? "Login Failed"
          : "Signup Failed")
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex justify-center items-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
      >

        <h1 className="text-4xl text-white font-bold mb-2">
          {isLogin
            ? "Welcome Back"
            : "Create Account"}
        </h1>

        <p className="text-slate-400 mb-6">
          {isLogin
            ? "Sign in to SpendSense AI"
            : "Join SpendSense AI"}
        </p>

        <div className="space-y-4">

          {/* Username */}
          <div className="flex items-center bg-white/5 rounded-2xl px-4 py-3 border border-white/10">
            <User className="text-slate-400 mr-3" />

            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          {/* Email only on signup */}
          {!isLogin && (
            <div className="flex items-center bg-white/5 rounded-2xl px-4 py-3 border border-white/10">
              <Mail className="text-slate-400 mr-3" />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="bg-transparent outline-none text-white w-full"
              />
            </div>
          )}

          {/* Password */}
          <div className="flex items-center bg-white/5 rounded-2xl px-4 py-3 border border-white/10">
            <Lock className="text-slate-400 mr-3" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAuth}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-2xl font-semibold"
          >
            {isLogin
              ? "Sign In"
              : "Sign Up"}
          </motion.button>

          {/* Toggle */}
          <p className="text-center text-slate-400 text-sm">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() =>
                setIsLogin(!isLogin)
              }
              className="ml-2 text-purple-400 hover:text-purple-300"
            >
              {isLogin
                ? "Sign Up"
                : "Sign In"}
            </button>
          </p>

        </div>
      </motion.div>
    </div>
  );
}

export default Signup;