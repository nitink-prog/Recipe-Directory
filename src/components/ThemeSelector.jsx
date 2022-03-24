import { useTheme } from "../hooks/useTheme";
import darkModeIcon from "../assets/darkmode-icon.svg";
import "./ThemeSelector.css";

const themeColors = [
  "rebeccapurple",
  "cornflowerblue",
  "palevioletred",
  "slategray",
];

export default function ThemeSelector() {
  const { changeColor, mode, changeMode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={darkModeIcon}
          alt="Dark Mode toggle"
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(90%)" : "invert(10%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
