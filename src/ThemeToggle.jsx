import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="mt-6 px-4 py-2 rounded bg-primary text-white dark:bg-accent transition"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
