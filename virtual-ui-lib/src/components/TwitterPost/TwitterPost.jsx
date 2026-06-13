import React, { useState } from "react";

export const TwitterPost = ({
  username = "johndoe",
  handle = "@johndoe",
  avatar = "https://randomuser.me/api/portraits/men/1.jpg",
  content = "Excited to share my thoughts on React components! 🚀",
  timestamp = "2h",
  likes = 123,
  retweets = 45,
  replies = 12,
  accent = "#1d9bf0",
  bg = "#0f172a"
}) => {
  const [liked, setLiked] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "16px", width: "400px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ display: "flex", gap: "12px" }}>
        <img src={avatar} alt={username} style={{ width: "48px", height: "48px", borderRadius: "50%" }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#fff" }}>{username}</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>{handle}</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>·</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>{timestamp}</span>
          </div>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.5, margin: "8px 0" }}>{content}</p>
          <div style={{ display: "flex", gap: "20px", marginTop: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.5)", fontSize: "14px", cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              {replies}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.5)", fontSize: "14px", cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
              {retweets}
            </div>
            <div onClick={() => setLiked(!liked)} style={{ display: "flex", alignItems: "center", gap: "6px", color: liked ? accent : "rgba(255,255,255,0.5)", fontSize: "14px", cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? accent : "none"} stroke={liked ? accent : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              {likes + (liked ? 1 : 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};