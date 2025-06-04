import axios from "axios";

const API_URL = "http://localhost:3000"; 

export async function loginUser(credentials: Record<string, string>) {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error: any) {
    if (error.response) {
        throw new Error(error.response.data.message || "Incorrect credentials");
    }else if (error.request) {
        throw new Error("No response received from the server");
    }else{
        throw new Error("An error occurred while logging in");
    }
  }
}

export async function signup(credentials:Record<string, string>) {
  try{
    const response = await axios.post(`${API_URL}/signup`, credentials);
    return response.data; 
  }catch(error: any){
    if(error.response){
      throw new Error(error.response.data.message || "error in the message")
    }else if (error.request) {
      throw new Error("No response received from the server"); 
    }else{
      throw new Error("Error trying to register");
    }
  }
  
}