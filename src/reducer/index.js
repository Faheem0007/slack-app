import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import channel_raducer from "./ChannelReducer";

const rootReducer = combineReducers({
  channel: channel_raducer,
  userReducer: userReducer
});

export default rootReducer;
