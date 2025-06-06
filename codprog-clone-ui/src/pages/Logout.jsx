import axios from "axios";
import { redirect } from "react-router-dom";
import { LOGOUT_URL, SUPABASE_API_KEY } from "../constants";
import { getUser } from "../utils/getUser";
import isTokenExpired from "../utils/isTokenExpired";
import refreshToken from "../utils/refreshToken";

export async function Logout() {
  let { access_token, expires_at } = await getUser();
  // logout
  // logout api
  try {
    if (isTokenExpired(expires_at)) {
      console.log("access token expired:(");
      access_token = await refreshToken();
    }
    await axios.post(LOGOUT_URL, null, {
      headers: {
        apikey: SUPABASE_API_KEY,
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
  } finally {
    localStorage.removeItem("user");
    // clear user from local storage
    return redirect("/");
  }
}
