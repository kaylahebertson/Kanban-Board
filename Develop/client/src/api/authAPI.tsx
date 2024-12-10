import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}



export { login };
