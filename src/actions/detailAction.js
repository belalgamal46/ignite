import axios from "axios";
import { gameDetailsURL, gameScreenShotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const detailData = await axios.get(gameDetailsURL(id));
    const screenshotData = await axios.get(gameScreenShotURL(id));
    dispatch({
      type: "GET_DETAIL",
      payload: {
        gameDetail: detailData.data,
        screenshot: screenshotData.data,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
