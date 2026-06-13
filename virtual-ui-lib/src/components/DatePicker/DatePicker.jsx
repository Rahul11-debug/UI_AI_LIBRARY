import React, { useState } from "react";

export const DatePicker = ({
  selectedDate = new Date(),
  accent = "#6366f1",
  bg = "#0f172a",
  onDateChange = () => {}
}) => {
  const [date, setDate] = useState(selectedDate);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setDate(newDate);
    onDateChange(newDate);
  };
  return (
    <div style={{ background: bg, borderRadius: "12px", padding: "16px", width: "280px", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <input
        type="date"
        value={date.toISOString().split('T')[0]}
        onChange={handleDateChange}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid " + alpha(accent, 0.3),
          background: "transparent",
          color: "#fff",
          fontFamily: "inherit",
          fontSize: "14px",
          outline: "none",
          cursor: "pointer"
        }}
      />
    </div>
  );
};