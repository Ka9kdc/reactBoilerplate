import axios from 'axios';

const BASE = 'https://jsonplace-univclone.herokuapp.com'

//reference on how to use axios
export async function getUsers() {
  try {
    const { data } = await axios.get(`${ BASE }/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

