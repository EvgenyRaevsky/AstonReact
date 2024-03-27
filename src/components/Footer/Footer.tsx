import { useThemeCtx } from "../../context/ThemeCtx";
import "./Footer.css";

export const Footer = () => {
  const { lightTheme } = useThemeCtx();
  return (
    <footer className={`footer ${lightTheme ? "footer-light" : "footer-dark"}`}>
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="">Vk</a>
          </li>
          <li className="footer__item">
            <a href="">GitHub</a>
          </li>
          <li className="footer__item">
            <a href="">Telegram</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
