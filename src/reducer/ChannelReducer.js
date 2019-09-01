import * as actionTypes from "./../actions/types";

const initChannelState = {
  currentChannel: null
};

const channel_raducer = (state = initChannelState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CHANNEL_TYPE:
      return {
        ...state,
        currentChannel: action.payload.currentChannel
      };

    default:
      return state;
  }
};

export default channel_raducer;
