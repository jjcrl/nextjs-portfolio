import { SpikeySticker } from "../components/spikey-sticker";

export default function About() {
  return (
    <div className="container">
      <main className="about-main">
        <h2 className="title">☺ Hi there</h2>
        <div className="about-text-main">
          <p className="about-text-section_1">
            A <span>curious,</span> <span>communicative,</span>
            <span>team-oriented </span>
            person who is <span>creative</span> in their practice and skilled in
            finding <span>solutions.</span>
          </p>

          <p className="about-text-section_2">
            Always asking why and <span>dedicated</span> to lifelong learning.
          </p>
          <p className="about-text-section_3">
            Looking to work with <span>diverse</span> people, apply my knowledge
            to industry problems
            <span> Working together</span> to bring about change, and{" "}
            <span>make a difference.</span>
          </p>
        </div>

        <ol className="definitions-list-main">
          <li>Curious</li>
          <span>/ˈkjʊərɪəs/</span>
          <p>
            Eager to know or interested to learn about people or things around
            you. Marked by an inquisitive desire to investigate.
          </p>
          <li>Creative</li>
          <span>/kriːˈeɪtɪv/</span>
          <p>
            Relating to or involving the use of the imagination and ideas to
            create something. The quality of something created rather than
            imitated. The ability or power to produce original and unusual
            ideas.
          </p>
          <li>Dedicated</li>
          <span>/ˈdɛdɪkeɪtɪd/</span>
          <p>
            Devoted to a task, ideal, cause or purpose, believing that something
            is very important and giving a lot of time and energy to it.
          </p>
        </ol>
        <div className="about-sticker-main">
          <p className="sticker-title">Let's Get In Touch</p>
          <SpikeySticker />
        </div>
      </main>

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .about-main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 0;
          }

          .title {
            font-family: GT MAru Trial;
            font-size: 4em;
            font-weight: 500;
            text-align: left;
            margin: auto;
            margin-left: 2em;
            margin-top: 1em;
            color: #131314;
          }

          .about-text-main {
            width: 83%;
            display: flex;
            flex-direction: column;
            color: #131314;
          }

          .about-text-section_1 {
            width: 95%;
          }

          .about-text-section_2 {
            text-align: left;
            width: 70%;
            margin: 0;
          }

          .about-text-section_3 {
            width: 52%;
          }

          .about-text-main p {
            font-family: GT Maru Trial;
            font-size: 2.6em;
            color: 131314;
          }

          .about-text-main span {
            font-family: GT Alpina Typewriter Italic VAR Trial;
            color: #462f46;
          }

          .definitions-list-main {
            width: 21%;
            font-size: 1.3em;
            text-align: justify;
            list-style: none;
            padding: 0;
            margin: 0;
            position: absolute;
            right: 6em;
            bottom: -10em;
          }

          .definitions-list-main li {
            font-family: GT Alpina Typewriter Italic VAR Trial;
            font-size: 1.2em;
            color: #131314;
            font-weight: 400;
          }

          .definitions-list-main span {
            font-weight: 500;
            opacity: 50%;
            font-size: 0.7em;
            font-family: GT Maru Trial;
          }

          .definitions-list-main p {
            font-family: GT Maru Trial;
            font-size: 0.8em;
            margin-top: 0.3em;
            color: #462f46;
          }

          .about-sticker-main {
            position: absolute;
            transform: scale(0.5);
            top: 25em;
            right: 23em;
          }

          .sticker-title {
            position: absolute;
            top: 1.35em;
            left: 2.35em;
            font-size: 3.7em;
            width: 40%;
            text-align: center;
            font-family: GT Maru Trial;
            transform: rotate(15deg);
            line-height: 60px;
          }
        `}
      </style>
    </div>
  );
}
