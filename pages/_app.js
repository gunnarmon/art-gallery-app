import Layout from "@/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: artData,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    console.log(artPiece);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { slug, isFavorite: !artPiece.isFavorite }
            : artPiece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  // random spotlight image:

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  const spotlightImage = artData[Math.floor(Math.random() * artData.length)];
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          pieces={artData}
          artPiecesInfo={artPiecesInfo}
          spotlightImage={spotlightImage}
          onToggleFavorite={handleToggleFavorite}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
