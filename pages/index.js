import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const {
    data: artData,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  // random spotlight image:

  const spotlightImage =
    artData[Math.floor(Math.random() * (artData.length - 1))];
  console.log(spotlightImage);

  return (
    <>
      <h1>ART GALLERY</h1>
      <h2>Spotlight:</h2>
      <Spotlight spotlightImage={spotlightImage}></Spotlight>
      <h2>List of all pieces in the Gallery:</h2>
      <ArtPieces pieces={artData}></ArtPieces>
    </>
  );
}
