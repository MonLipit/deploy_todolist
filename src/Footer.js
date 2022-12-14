const Footer = ({ lang, changeLanguage }) => {
  return (
    <div>
      <h3>Made by MindX π₯</h3>
      <div>
        <span>Available on:</span>
        <span
          className={`languague-picker ${(lang === "vi" && "selected") || ""} `}
          onClick={() => changeLanguage("vi")}
        >
          π»π³
        </span>
        <span
          className={`languague-picker ${(lang === "en" && "selected") || ""} `}
          onClick={() => changeLanguage("en")}
        >
          πΊπΈ
        </span>
      </div>
    </div>
  );
};

export default Footer;
