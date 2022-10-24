const Footer = ({ lang, changeLanguage }) => {
  return (
    <div>
      <h3>Made by MindX 🔥</h3>
      <div>
        <span>Available on:</span>
        <span
          className={`languague-picker ${(lang === "vi" && "selected") || ""} `}
          onClick={() => changeLanguage("vi")}
        >
          🇻🇳
        </span>
        <span
          className={`languague-picker ${(lang === "en" && "selected") || ""} `}
          onClick={() => changeLanguage("en")}
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
