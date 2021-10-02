import axios from "axios";
axios.defaults.baseURL = "http://localhost:3013";
export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
