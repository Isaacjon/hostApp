import React from "react";
const Header = React.lazy(() => import("MicroFrontend/Header"));
const Main = React.lazy(() => import("MicroFrontend/Main"));
const Footer = React.lazy(() => import("MicroFrontend/Footer"));
export default function App() {
  return (
    <div>
      {/* App 2 */}
      {/* <Button buttonName={"Hey there"} /> */}
      <Header />
      <div
        style={{
          // margin: "60px 0",
          height: "calc(100dvh - 120px)",
          width: "100%",
          border: "10px solid lightblue",
        }}
      >
        <Main />
      </div>
      <Footer />
    </div>
  );
}
