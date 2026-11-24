"use client";

import { useEffect, useRef, useState } from "react";
import { chatMessage, loadMessages } from "../chat/chatManager";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  // Load messages from Firebase (live updates)
  useEffect(() => {
    const unsubscribe = loadMessages(setMessages);
    return () => unsubscribe();
  }, []);

  // Auto-scroll to the newest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(e) {
    e.preventDefault();

    if (!message.trim()) return;

    const result = await chatMessage(message.trim());

    if (result) {
      setMessage("");
    }
  }

  return (
    <main className="h-screen bg-[#313338] flex flex-col">

      {/* Header */}
      <header className="bg-[#2b2d31] p-5 border-b border-[#1e1f22]">
        <h1 className="text-white text-xl font-bold">
          # general
        </h1>
        <p className="text-[#949ba4] text-sm">
          Welcome to the community chat!
        </p>
      </header>

      {/* Chat Messages */}
      <section className="flex-1 overflow-y-auto p-6 space-y-5">

        {messages.length === 0 && (
          <div className="text-center text-[#949ba4] mt-20">
            <h2 className="text-2xl font-bold mb-2">
              Welcome to #general!
            </h2>
            <p>This is the beginning of your conversation.</p>
          </div>
        )}

        {messages.map((item) => (
          <div key={item.id} className="flex gap-3">

            <div className="w-10 h-10 rounded-full bg-[#5865f2] flex items-center justify-center text-white font-bold shrink-0">
              {(item.user || "A").charAt(0).toUpperCase()}
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold">
                  {item.user || "Anonymous"}
                </span>

                <span className="text-xs text-[#949ba4]">
                  {new Date(item.timestamp).toLocaleTimeString()}
                </span>
              </div>

              <p className="text-[#dbdee1] mt-1">
                {item.message}
              </p>
            </div>

          </div>
        ))}

        <div ref={bottomRef} />
      </section>

      {/* Message Input */}
      <footer className="p-5 bg-[#313338]">
        <form
          onSubmit={handleSend}
          className="flex gap-3 bg-[#383a40] rounded-lg p-2"
        >

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message #general"
            className="flex-1 bg-transparent text-white px-3 py-2 outline-none placeholder-[#949ba4]"
          />

          <button
            type="submit"
            disabled={!message.trim()}
            className="bg-[#5865f2] hover:bg-[#4752c4] disabled:opacity-40 text-white px-6 py-2 rounded-md font-semibold"
          >
            Send
          </button>

        </form>
      </footer>

    </main>
  );
}