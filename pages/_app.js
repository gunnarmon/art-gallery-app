import Layout from "@/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: artData,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  // random spotlight image:

  const spotlightImage = artData[Math.floor(Math.random() * artData.length)];
  console.log(spotlightImage);

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          pieces={artData}
          spotlightImage={spotlightImage}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
