import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ spotlightImage }) {
  return (
    <SpotlightSection>
      <Image
        src={spotlightImage.imageSource}
        height={0}
        width={360}
        style={{ width: "auto", height: "auto" }}
        alt={spotlightImage.slug}
      />
      <SpotlightTitle>{spotlightImage.name}</SpotlightTitle>
    </SpotlightSection>
  );
}

const SpotlightSection = styled.section``;

const SpotlightTitle = styled.h4``;
