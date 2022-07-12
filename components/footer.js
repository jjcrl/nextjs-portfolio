export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="details">
        <ul className="links">
          <li>LINKEDIN</li>
          <li>GITHUB</li>
        </ul>
        <ul className="info">
          <p id="mini-text">infomation</p>
          <li>53.4875° N</li>
          <li>2.2901° W</li>
          <li>hello@jsph.dev</li>
        </ul>
      </div>

      <style jsx>
        {`
          .footer-container {
            width: 100vw;
            height: 40vh;
            background-color: #5f7117;
            display: flex;
            flex-direction: column;
          }

          .details {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            margin-top: 1em;
            font-family: GT Maru Trial;
          }

          .details li {
            counter-increment: details;
          }

          .details li::before {
            content: counters(details, "", decimal-leading-zero);
            font-size: 01rem;
            position: relative;
            bottom: 1rem;
            right: 0.2rem;
          }

          .copyright {
            font-size: 1.5em;
            font-style: italic;
            margin: 0.5em;
            color: #d6d0e5;
          }
          .info {
            list-style: none;
            font-size: 2.5em;
            color: #d6d0e5;
          }

          #mini-text {
            font-size: 0.4em;
            letter-spacing: 5px;
            opacity: 50%;
          }

          .links {
            list-style: none;
            font-size: 5em;
            color: #d6d0e5;
            margin: 0.5em 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};
