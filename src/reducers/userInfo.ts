import { FeedInfo } from "../@types/FeedInfo";
import { UserInfo } from "../@types/UserInfo";
import { TypeUserInfoActions } from "../actions/user";

export type TypeUserInfoReducer = {
  userInfo: UserInfo[] | null;
  myFeedList: FeedInfo[];
};

const defaultUserInfoState: TypeUserInfoReducer = {
  userInfo: null,
  myFeedList: [],
};

export const userInfoReducer = (
  state: TypeUserInfoReducer = defaultUserInfoState,
  action: TypeUserInfoActions
) => {
  return {
    ...state,
  };
};
