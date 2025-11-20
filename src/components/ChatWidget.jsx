import { useEffect, useRef, useState } from "react";

// API URL
const CHAT_API_URL =
  "https://zl21eogoi5.execute-api.us-east-1.amazonaws.com/prod/chat";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Autoscroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Send message
  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const history = [];
    for (let i = 0; i < messages.length; i += 2) {
      const userMsg = messages[i];
      const botMsg = messages[i + 1];
      if (userMsg?.role === "user") {
        history.push({
          user: userMsg.text,
          ...(botMsg?.role === "bot" ? { assistant: botMsg.text } : {}),
        });
      }
    }

    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });

      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "bot", text: data.reply || "Sorry, something went wrong." },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([
        ...newMessages,
        { role: "bot", text: "Error contacting server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* BIGGER, MORE ATTRACTIVE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-5 right-5 z-50
          rounded-full px-5 py-3 shadow-xl
          bg-black text-white font-semibold
          border border-gray-700
          text-sm sm:text-base
          hover:bg-gray-900
          transition-all
          active:scale-95
        "
      >
        {open ? "Close chat" : "Chat 💬"}
      </button>

      {/* CHAT PANEL */}
      {open && (
        <div
          className="
            fixed bottom-20 right-4 z-50
            flex flex-col shadow-2xl
            bg-[#111111] text-white rounded-2xl border border-gray-800
            
            w-[90%] max-w-[22rem]   /* mobile responsive */
            h-[80vh] max-h-[32rem]  /* avoids overflow on small phones */

            sm:w-96 sm:h-[30rem]    /* normal sizes for bigger screens */
          "
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-800 bg-[#151515] rounded-t-2xl">
            <div className="text-sm font-semibold">ShiboBot</div>
            <div className="text-[11px] text-gray-400">
              Portfolio assistant — always up to date
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 text-sm bg-[#101010]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`
                  max-w-[80%] rounded-2xl px-3 py-2 leading-snug
                  ${
                    m.role === "user"
                      ? "ml-auto bg-gray-200 text-gray-900"
                      : "mr-auto bg-[#1f1f1f] text-gray-100 border border-gray-800"
                  }
                `}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="mr-auto max-w-[60%] rounded-2xl px-3 py-2 text-[11px] text-gray-400 bg-[#1a1a1a] border border-gray-800 italic">
                ShiboBot is typing…
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="p-3 border-t border-gray-800 bg-[#151515] rounded-b-2xl flex items-center gap-2"
          >
            <input
              className="
                flex-1 rounded-xl px-3 py-2 text-sm text-gray-100
                bg-[#1d1d1d] border border-gray-700
                focus:outline-none focus:ring-1 focus:ring-gray-500
                placeholder:text-gray-500
              "
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects, skills..."
            />
            <button
              type="submit"
              className="
                px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold
                hover:bg-gray-200 disabled:opacity-60
              "
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
