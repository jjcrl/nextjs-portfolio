import Link from "next/link";
import { HomeButton } from "./home-button";

export const Navigation = () => {
  return (
    <div className="main-nav">
      <Link href="/" passHref>
        <HomeButton />
      </Link>
      <nav className="nav-main">
        <Link href="/projects">
          <a>WORK</a>
        </Link>{" "}
        <Link href="/about">
          <a>ABOUT ME</a>
        </Link>
      </nav>

      <style jsx>{`
        .nav-main {
          margin: 0 3em;
        }
        .nav-main a {
          margin: 0 0.5em;
          font-size: 1.5em;
          font-family: GT Maru Trial;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .main-nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-left: 1em;
        }
      `}</style>
    </div>
  );
};
