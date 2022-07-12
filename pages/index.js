import Head from "next/head";
import { Sticker } from "../components/sticker";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>jsph.dev</title>
      </Head>

      <main>
        <h1 className="title">Hi, my name's Joseph.</h1>
        <p className="description">A creative coder, based in Manchester</p>

        <div className="main-sticker">
          <Sticker />
        </div>
      </main>

      <p className="dark-mode-toggle">DARK MODE</p>

      <div className="colour-index">
        <span id="colour-red"></span>
        <span id="colour-blue"></span>
        <span id="colour-green"></span>
        <span id="colour-yellow"></span>
        <span id="colour-pink"></span>
        <span id="colour-black"></span>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main-sticker {
          position: relative;
          left: 28em;
          top: 5em;
        }

        .dark-mode-toggle {
          transform: rotate(-90deg);
          font-size: 1.5em;
          margin: 0;
          padding: 0;
          position: relative;
          left: -28.5em;
          bottom: 0;
        }

        .colour-index {
          margin: 2em;
          position: relative;
          left: 39em;
          display: flex;
          flex-direction: row;
        }

        #colour-red {
          width: 20px;
          height: 20px;
          background-color: red;
        }
        #colour-blue {
          width: 20px;
          height: 20px;
          background-color: mediumblue;
        }

        #colour-green {
          width: 20px;
          height: 20px;
          background-color: forestgreen;
        }

        #colour-yellow {
          width: 20px;
          height: 20px;
          background-color: gold;
        }

        #colour-pink {
          width: 20px;
          height: 20px;
          background-color: deeppink;
        }
        #colour-black {
          width: 20px;
          height: 20px;
          background-color: black;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
          font-family: GT Maru Trial;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          font-style: italic;
          font-family: GT Maru Trial;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
