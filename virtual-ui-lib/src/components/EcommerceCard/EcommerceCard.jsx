import React, { useState } from "react";

export const ECommerceCard = ({
  title = "Wireless Headphones",
  description = "Experience immersive sound with noise cancellation.",
  price = 199.99,
  currency = "$",
  image = "https://images.unsplash.com/photo-1618366712010-f4ae9c647dc5?w=600&q=80",
  rating = 4.5,
  accent = "#6366f1",
  bg = "#0f172a",
  onAddToCart = () => {},
  onViewDetails = () => {}
}) => {
  const [hovered, setHovered] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", top: "12px", left: "12px", padding: "4px 10px", borderRadius: "20px", background: alpha(accent, 0.85), fontSize: "10px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" }}>{rating.toFixed(1)} ★</div>
      </div>
      <div style={{ padding: "18px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#fff", margin: "0 0 8px", lineHeight: 1.4 }}>{title}</h3>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: "0 0 18px" }}>{description}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: "24px", fontWeight: "800", color: accent }}>{currency}{Math.round(price)}</div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={onViewDetails}
              style={{ padding: "8px 16px", borderRadius: "10px", border: "1px solid " + alpha(accent, 0.3), background: "transparent", color: accent, fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}
            >Details</button>
            <button
              onClick={onAddToCart}
              style={{ padding: "8px 16px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}
            >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};