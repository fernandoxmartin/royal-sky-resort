import { createClient } from "contentful";

const Client = createClient({
  space: process.env.REACT_APP_SPACE_KEY,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export const getFeatures = async (e) => {
  return await Client.getEntries({
    content_type: "resortFeatures",
  })
    .then((response) => {
      return response.items;
    })
    .catch(console.error);
};

export const getRooms = async () => {
  return await Client.getEntries({
    content_type: "resortRooms",
  })
    .then((response) => {
      return response.items;
    })
    .catch(console.error);
};

export const getRoom = (slug) => {
  return Client.getEntries({
    content_type: "resortRooms",
    "fields.slug": `${slug}`,
  })
    .then((response) => {
      return response.items;
    })
    .catch(console.error);
};
