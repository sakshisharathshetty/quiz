"use client";

import { useState } from "react";
import { createUserProfile } from "./chatManager";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const result = await createUserProfile(username, email);

    if (result) {
      setMessage("Profile created successfully!");
      setUsername("");
      setEmail("");
      router.push("/chat-window");
    } else {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#313338] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#2b2d31] p-8 rounded-xl shadow-2xl">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Profile
        </h1>

        <p className="text-[#b5bac1] text-center mb-8">
          Join the Skill community and get started.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-bold text-[#dbdee1] mb-2">
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="w-full bg-[#1e1f22] text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#5865f2]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#dbdee1] mb-2">
              EMAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-[#1e1f22] text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#5865f2]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5865f2] hover:bg-[#4752c4] disabled:opacity-50 text-white font-bold py-3 rounded-md transition duration-200"
          >
            {loading ? "Creating..." : "Create Profile"}
          </button>

          {message && (
            <p className="text-center text-sm text-[#dbdee1]">{message}</p>
          )}

        </form>
      </div>
    </main>
  );
}