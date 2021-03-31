import Axios from "axios";
import * as Types from "./types";

export const loadTransactions = () => (dispatch) => {
  Axios.get("/api/transactions/")
    .then((response) => {
      console.log(response);
      dispatch({
        type: Types.LOAD_TRANSACTIONS,
        payload: {
          transactions: response.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
