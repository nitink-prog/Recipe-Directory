import { useTheme } from "../hooks/useTheme";
import "./ThemeSelector.css";

export default function ThemeSelector() {
  const themeColors = ["rebeccapurple", "lightblue", "pink"];
  const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
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
