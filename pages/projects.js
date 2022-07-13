export default function Projects() {
  return (
    <div className="container">
      <main>
        <ul className="projects-links-list">
          <div className="project-container">
            <li>nc~news</li>
            <a>https://www.jjcrl-nc-news.netlify.app</a>
          </div>
          <div className="project-container">
            <li>forecast~face</li>
            <a>https://www.forecast-face.netlify.app</a>
          </div>
          {/* <li>online~cruration</li>
          <li>poem~playground</li>
          <li>html~tag~finder</li> */}
        </ul>
      </main>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            padding: 0 5rem;
          }

          main {
            display: flex;
            flex-direction: column;
            margin-top: 5em;
          }

          .projects-links-list {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .project-container {
            margin-bottom: 4em;
          }

          .project-container li {
            font-size: 2em;
            font-family: GT Alpina Typewriter Italic VAR Trial;
          }
          .project-container a {
            font-size: 2.5em;
            color: #412cff;
            font-family: GT Maru Trial;
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}
