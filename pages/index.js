import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const {
    data: artPieces,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      <h1>ART GALLERY</h1>
      <ArtPieces pieces={artPieces}></ArtPieces>
    </div>
  );
}
