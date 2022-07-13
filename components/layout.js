import { Navigation } from "./navigation";
import { Footer } from "./footer";
import CustomCursor from "./custom-cursor";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>
        <CustomCursor />
        {children}
      </main>
      {/* <Footer /> */}

      <style jsx global>{`
        html,
        body {
          background-color: #ebeae5;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
          cursor: none;
        }
      `}</style>
    </>
  );
}
