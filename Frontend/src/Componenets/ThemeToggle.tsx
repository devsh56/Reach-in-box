// import { useEffect, useState } from "react";
// import "../Style/toggle.css";

// function ThemeToggle() {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Retrieve the theme from localStorage
//     const savedMode = localStorage.getItem("darkMode");
//     return savedMode === "true";
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove(!darkMode ? "light" : "dark");
//     root.classList.add(!darkMode ? "dark" : "light");
//     console.log(root.classList);
//     console.log(document.documentElement.classList.value);
//     // Save the mode to localStorage
//     localStorage.setItem("darkMode", darkMode.toString());
//   }, [darkMode]);

//   return (
//     <div className="theme-switch-container mt-2">
//       <div className="theme-switch">
//         <input
//           type="checkbox"
//           className="theme-switch__input"
//           id="themeSwitch"
//           checked={darkMode}
//           onChange={() => setDarkMode(!darkMode)}
//         />
//         <label className="theme-switch__label" htmlFor="themeSwitch">
//           <span className="theme-switch__indicator"></span>
//           <span className="theme-switch__decoration"></span>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default ThemeToggle;
import { useEffect, useState } from "react";
import "../Style/toggle.css";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(darkMode ? "dark" : "light");

  }, [darkMode]);

  return (
    <div className="theme-switch-container mt-2">
      <div className="theme-switch">
        <input
          type="checkbox"
          className="theme-switch__input"
          id="themeSwitch"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <label className="theme-switch__label" htmlFor="themeSwitch">
          <span className="theme-switch__indicator"></span>
          <span className="theme-switch__decoration"></span>
        </label>
      </div>
    </div>
  );
}

export default ThemeToggle;