import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <a
          className="footer__link"
          href="https://rs.school/react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RS School
        </a>
        <div className="footer__container">
          <p className="footer__text">{'2023 © '}</p>
          <a
            className="footer__link"
            href="https://github.com/dziana-babrova"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dziana Babrova
          </a>
        </div>
      </div>
    </footer>
  );
};
