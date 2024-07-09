import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ spotlightImage }) {
  return (
    <>
      <h1>ART GALLERY</h1>
      <h2>Spotlight:</h2>
      <Spotlight spotlightImage={spotlightImage}></Spotlight>
    </>
  );
}
