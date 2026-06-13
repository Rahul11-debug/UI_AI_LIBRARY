import React from "react";

export const IDCard = ({
  name = "John Doe",
  role = "Software Engineer",
  company = "TechCorp",
  photo = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
  accent = "#6366f1",
  bg = "#0f172a",
  onContactClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "24px", width: "300px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", border: "1px solid " + alpha(accent, 0.25), position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "2px solid " + alpha(accent, 0.5) }}>
          <img src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <div style={{ fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>{name}</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{role}</div>
        </div>
      </div>
      <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid " + alpha(accent, 0.1) }}>{company}</div>
      <button onClick={onContactClick} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>Contact</button>
    </div>
  );
};