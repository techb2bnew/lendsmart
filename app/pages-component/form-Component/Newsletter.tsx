"use client";

import { memo, useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Better email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleSubscribe = async () => {
    if (!email) {
      return showMessage("Please enter email");
    }

    if (!isValidEmail(email)) {
      return showMessage("Enter valid email");
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        showMessage("Subscribed! 🎉");
        setEmail("");
      } else {
        showMessage(data.message || "Failed");
      }
    } catch (error) {
      showMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 pt-8 lg:pt-10">
      <div className="w-full sm:px-6 max-w-[1440px] mx-auto lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
          <h3 className="text-left text-[22px] font-semibold leading-[1.05] text-black sm:text-[28px]">
            Subscribe to
            <br />
            Our Newsletter
          </h3>

          <div className="flex w-full max-w-[640px] flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()} // ✅ Enter submit
              placeholder="Email"
              className="min-h-[44px] flex-1 rounded-[4px] border border-[#9bd05c] bg-transparent px-4 py-2 text-[14px] text-black outline-none focus:border-[#4f9b15] placeholder:text-[#b9b9b9] disabled:opacity-50"
            />

            <button type="button" onClick={handleSubscribe}
              disabled={loading}
              className="h-[44px] rounded-[4px] bg-[#3f7416] hover:bg-[#0781c3] cursor-pointer px-6 text-[13px] font-medium text-white transition hover:shadow-lg disabled:opacity-50"
            >
              {loading ? "Subscribing..." : "Subscribe Now"}
            </button>
          </div>
        </div>

        {message && (
          <div
            className={`mt-4 text-center text-sm ${
              message.includes("🎉") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        <div className="mt-8 h-px w-full bg-[#d7dfca]" />
      </div>
    </div>
  );
};

export default memo(Newsletter);