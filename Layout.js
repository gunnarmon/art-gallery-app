import Head from "next/head";
import Navigation from "./components/Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Head>Art Gallery</Head>
      <AppBody>
        <main>{children}</main>
      </AppBody>
      <footer>
        <Navigation />
      </footer>
    </>
  );
}

const AppBody = styled.div`
  display: flex;
  justify-content: center;
`;
