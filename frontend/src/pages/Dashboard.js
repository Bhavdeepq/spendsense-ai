import { useState, useEffect } from "react";
import API from "../services/api";
import {
  Wallet,
  IndianRupee,
  Plus,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [text, setText] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [toast, setToast] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    "Eg. Spent ₹300 on burger 🍔",
    "Paid Uber ₹450 🚕",
    "Netflix ₹199 🎬",
    "Amazon ₹1200 🛒",
  ];

  const fetchExpenses = async () => {
    const res = await API.get("expenses/");
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prev) => (prev + 1) % placeholders.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  const handleSubmit = async () => {
    if (!text.trim()) return;

    await API.post("parse-expense/", {
      text,
    });

    setText("");
    fetchExpenses();

    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  const totalSpent = expenses.reduce(
    (sum, e) => sum + parseFloat(e.amount),
    0
  );

  const COLORS = [
    "#8b5cf6",
    "#06b6d4",
    "#22c55e",
    "#f97316",
    "#ec4899",
  ];

  const categoryData = Object.values(
    expenses.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = {
          name: curr.category,
          value: 0,
        };
      }

      acc[curr.category].value += parseFloat(curr.amount);
      return acc;
    }, {})
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050816] text-white">

      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-700 opacity-20 blur-[150px] animate-pulse rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500 opacity-15 blur-[150px] animate-pulse rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="animate-pulse bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-3xl shadow-[0_0_40px_rgba(124,58,237,.4)]">
            <Wallet size={32} />
          </div>

          <div>
            <h1 className="text-5xl font-bold logo-font tracking-tight">
              SpendSense AI
            </h1>

            <p className="text-slate-400 mt-1">
              Smart Expense Intelligence
            </p>
          </div>
        </motion.div>

        {/* Input */}
        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 shadow-[0_0_40px_rgba(124,58,237,.15)] mb-8"
        >
          <div className="flex gap-3">

            <input
              type="text"
              placeholder={placeholders[placeholderIndex]}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none placeholder-slate-500 focus:border-purple-400 focus:shadow-[0_0_25px_rgba(168,85,247,.3)] transition duration-300 focus:scale-[1.01]"
            />

            <motion.button
              whileHover={{
                scale: 1.06,
                rotate: -1,
                boxShadow:
                  "0 0 30px rgba(139,92,246,.5)",
              }}
              whileTap={{ scale: .94 }}
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 rounded-2xl font-semibold flex items-center gap-2"
            >
              <Plus size={20} />
              Add
            </motion.button>

          </div>
        </motion.div>

        {/* Dashboard */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">

          {/* Total Card */}
          <motion.div
            whileHover={{
              y: -6,
              boxShadow:
                "0 15px 45px rgba(124,58,237,.25)"
            }}
            className="backdrop-blur-xl bg-gradient-to-br from-purple-600/30 to-indigo-700/30 border border-white/10 rounded-3xl p-7 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <IndianRupee />
              <h2 className="text-lg">
                Total Spending
              </h2>
            </div>

            <motion.h1
              key={totalSpent}
              initial={{ scale: .8 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="text-6xl font-bold logo-font"
            >
              ₹{totalSpent}
            </motion.h1>
          </motion.div>

          {/* Chart */}
          <motion.div
            whileHover={{
              y: -6,
              boxShadow:
                "0 15px 45px rgba(6,182,212,.15)"
            }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl"
          >
            <h2 className="text-xl font-semibold mb-4">
              Spending Flow
            </h2>

            <ResponsiveContainer
              width="100%"
              height={280}
            >
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={95}
                  label={({ name, value }) =>
                    `${name} ₹${value}`
                  }
                >
                  {categoryData.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index % COLORS.length
                          ]
                        }
                      />
                    )
                  )}
                </Pie>

                <Tooltip
                  contentStyle={{
                    background: "#0f172a",
                    border:
                      "1px solid #334155",
                    borderRadius: "16px",
                    color: "white",
                  }}
                  formatter={(value) => [
                    `₹${value}`,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Expenses */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl"
        >
          <h2 className="text-2xl font-semibold mb-5">
            Recent Expenses
          </h2>

          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <motion.div
                key={expense.id}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * .06,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  boxShadow:
                    "0 10px 35px rgba(124,58,237,.2)"
                }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex justify-between items-center hover:border-purple-400 transition"
              >
                <div>
                  <h3 className="text-lg font-semibold">
                    {expense.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {expense.category}
                  </p>
                </div>

                <div className="text-2xl font-bold text-purple-300 logo-font">
                  ₹{expense.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            className="fixed bottom-6 right-6 bg-emerald-500 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2"
          >
            <CheckCircle2 size={20} />
            Expense Added
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;