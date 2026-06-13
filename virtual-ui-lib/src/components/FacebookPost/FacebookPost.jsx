import React from "react";

export const FacebookPost = ({
  profileImage = "https://randomuser.me/api/portraits/men/1.jpg",
  username = "John Doe",
  timestamp = "2 hours ago",
  content = "Just had an amazing weekend getaway! The mountains were breathtaking. 🌄 #NatureLovers",
  image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  likes = 123,
  comments = 45,
  shares = 12,
  accent = "#6366f1",
  bg = "#0f172a",
  onLikeClick = () => {},
  onCommentClick = () => {},
  onShareClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "16px", width: "500px", fontFamily: "system-ui,sans-serif", color: "#fff", boxShadow: "0 10px 40px rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <img src={profileImage} alt={username} style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "14px", fontWeight: "700" }}>{username}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{timestamp}</div>
        </div>
      </div>
      <div style={{ fontSize: "14px", lineHeight: 1.5, marginBottom: "16px" }}>{content}</div>
      {image && (
        <div style={{ width: "100%", height: "300px", borderRadius: "12px", overflow: "hidden", marginBottom: "16px" }}>
          <img src={image} alt="Post" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
        <div>{likes} likes · {comments} comments · {shares} shares</div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button onClick={onLikeClick} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            Like
          </button>
          <button onClick={onCommentClick} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
            Comment
          </button>
          <button onClick={onShareClick} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};