import { useThemeCtx } from "../../context/ThemeCtx";
import "./Footer.css";

export const Footer = () => {
  const { lightTheme } = useThemeCtx();
  return (
    <footer className={`footer ${lightTheme ? "footer-light" : "footer-dark"}`}>
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://vk.com/place_for_your_ad"
              target="_blank"
              rel="noreferrer"
            >
              Vk
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://github.com/EvgenyRaevsky"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="footer__item">
            <a href="https://t.me/RaevskyEA" target="_blank" rel="noreferrer">
              Telegram
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
