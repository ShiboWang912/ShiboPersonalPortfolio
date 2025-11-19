import { useState } from "react";

// Use your real API Gateway URL here:
const CHAT_API_URL =
  "https://zl21eogoi5.execute-api.us-east-1.amazonaws.com/prod/chat";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    // Build simple history (pairs of user/bot messages)
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
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 rounded-full px-4 py-2 shadow-lg bg-[#75bce3] text-white z-50"
      >
        {open ? "Close Chat" : "Chat with me"}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-[#403445] text-white rounded-2xl shadow-xl flex flex-col z-50">
          <div className="px-3 py-2 border-b border-gray-600 font-semibold">
            ShiboBot
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`rounded-lg px-2 py-1 max-w-[90%] ${
                  m.role === "user"
                    ? "bg-[#75bce3] ml-auto"
                    : "bg-[#5f6063] mr-auto"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="text-xs text-gray-300 italic">
                ShiboBot is typing…
              </div>
            )}
          </div>
          <form
            onSubmit={sendMessage}
            className="p-2 border-t border-gray-600 flex gap-2"
          >
            <input
              className="flex-1 rounded-lg px-2 py-1 text-black text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
            />
            <button
              type="submit"
              className="px-3 py-1 rounded-lg bg-[#75bce3] text-xs font-semibold"
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
