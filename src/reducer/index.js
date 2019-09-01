import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import channel_raducer from "./ChannelReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  channel: channel_raducer
});

export default rootReducer;
