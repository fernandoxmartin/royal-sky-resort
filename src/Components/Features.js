import {
  FeatureContainer,
  FeatureImage,
  FeatureDetails,
  FeatureButton,
  DetailContainer,
} from "../globalStyles";

export const getFeatures = (items) => {
  items.sort((a, b) => (a.fields.id > b.fields.id ? 1 : -1));
  return items.map((item) => {
    return (
      <FeatureContainer key={item.sys.id}>
        <FeatureImage>
          <img src={item.fields.image.fields.file.url} alt="feature-img" />
        </FeatureImage>
        <FeatureDetails>
          <DetailContainer>
            <h2>{item.fields.header}</h2>
            <p>{item.fields.description}</p>
            <FeatureButton>Learn More</FeatureButton>
          </DetailContainer>
        </FeatureDetails>
      </FeatureContainer>
    );
  });
};
