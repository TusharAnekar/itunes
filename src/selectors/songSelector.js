import { createSelector } from "reselect";

const selectSongState = (state) => state;

export const selectSongs = createSelector(
  [selectSongState],
  (state) => state?.songs ?? []
);

export const selectLoading = createSelector(
  [selectSongState],
  (state) => state?.loading ?? false
);

export const selectError = createSelector(
  [selectSongState],
  (state) => state?.error ?? ""
);
