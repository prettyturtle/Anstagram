import { FeedInfo } from "../@types/FeedInfo";
import { TypeFeedListActions } from "../actions/feed";

export type TypeFeedListReducer = {
  list: FeedInfo[];
};
const defaultFeedListState: TypeFeedListReducer = {
  list: [],
};

export const feedListReducer = (
  state: TypeFeedListReducer = defaultFeedListState,
  action: TypeFeedListActions
) => {
  return {
    ...state,
  };
};
