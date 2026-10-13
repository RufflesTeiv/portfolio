/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float:            "float 5s ease-in-out infinite",
        scaling:          "scaling 3s ease-out infinite",
        "marquee-left":   "marquee-left 20s linear infinite",
        "marquee-right":  "marquee-right 20s linear infinite",
        // --- Lab (/dev/lab) animations ---
        sweep:     "sweep 1.05s cubic-bezier(.4,0,.2,1) infinite",
        shimmer:   "shimmer 1.25s ease infinite",
        ping2:     "ping2 1.1s ease-out infinite",
        flow:      "flow 1.5s ease-in-out infinite",
        nodepulse: "nodepulse 1.8s ease-in-out infinite",
        shake:     "shake 0.4s ease-in-out",
        breakflow: "breakflow 1.2s ease-in infinite",
        wave:      "wave 1.4s ease-out infinite",
        rise:      "rise 0.26s ease both",
        draw:      "draw 1s ease-out both",
        scanbeam:  "scanbeam 2.4s ease-in-out infinite",
        scanlines: "scanlines 0.5s linear infinite",
        reticle:   "reticle 1.6s ease-in-out infinite",
        sonar:     "sonar 2.4s ease-out infinite",
        cardform:  "cardform 0.7s cubic-bezier(.2,.7,.2,1) both",
        cardsheen: "cardsheen 1.6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        scaling: {
          "0%, 100%": { scale: "1" },
          "50%":      { scale: "1.05" }
        },
        'marquee-left': {
          from: { transform: "translateX(0)" },
          to: { transform:"translateX(-33.333%)" }
        },
        'marquee-right': {
          from: { transform: "translateX(-33.333%)" },
          to: { transform:"translateX(0)" }
        },
        // --- Lab (/dev/lab) keyframes ---
        sweep: { from: { transform: "translateX(-130%)" }, to: { transform: "translateX(360%)" } },
        shimmer: { from: { backgroundPosition: "120% 0" }, to: { backgroundPosition: "-120% 0" } },
        ping2: { "0%": { transform: "scale(1)", opacity: "0.7" }, "100%": { transform: "scale(1.6)", opacity: "0" } },
        flow: { "0%": { left: "0%", opacity: "0" }, "15%": { opacity: "1" }, "85%": { opacity: "1" }, "100%": { left: "100%", opacity: "0" } },
        nodepulse: { "0%,100%": { boxShadow: "0 0 0 0 rgba(140,42,255,0)" }, "50%": { boxShadow: "0 0 18px 2px rgba(140,42,255,.45)" } },
        shake: { "0%,100%": { transform: "translateX(0)" }, "20%,60%": { transform: "translateX(-5px)" }, "40%,80%": { transform: "translateX(5px)" } },
        breakflow: { "0%": { left: "0%", opacity: "0.8" }, "100%": { left: "42%", opacity: "0" } },
        wave: { "0%": { transform: "scale(1)", opacity: "0.6" }, "100%": { transform: "scale(2.1)", opacity: "0" } },
        rise: { from: { opacity: "0", transform: "translateY(7px)" }, to: { opacity: "1", transform: "none" } },
        draw: { from: { strokeDashoffset: "1600" }, to: { strokeDashoffset: "0" } },
        scanbeam: { "0%": { top: "1%" }, "50%": { top: "99%" }, "100%": { top: "1%" } },
        scanlines: { from: { backgroundPosition: "0 0" }, to: { backgroundPosition: "0 4px" } },
        reticle: { "0%,100%": { opacity: "0.35" }, "50%": { opacity: "0.9" } },
        sonar: { "0%": { transform: "scale(0.08)", opacity: "0.7" }, "70%": { opacity: "0.35" }, "100%": { transform: "scale(1)", opacity: "0" } },
        cardform: { "0%": { opacity: "0", transform: "perspective(800px) rotateX(35deg) translateY(26px) scale(0.9)", filter: "blur(6px)" }, "60%": { opacity: "1", filter: "blur(0)" }, "100%": { opacity: "1", transform: "perspective(800px) rotateX(0deg) translateY(0) scale(1)", filter: "blur(0)" } },
        cardsheen: { "0%": { transform: "translateX(-120%) skewX(-18deg)" }, "100%": { transform: "translateX(240%) skewX(-18deg)" } },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}