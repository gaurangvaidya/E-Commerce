import { createSelector } from "reselect";

const MAP_NAME_TO_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectCollections = (state) => state.collections;

export const selectCollection = (collectionName) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === MAP_NAME_TO_ID[collectionName]
    )
  );
