import axios from "axios";

const fetchData = async (endpoint: string, language: 'ar' | 'en' = 'en') => {
  const config = {
    headers: {
      "Accept-Language": language,
    },
  };
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("Base URL is not defined");
  }

  try {
    const response = await axios.get(`${baseUrl}/${endpoint}`, config);
    console.log("API Response:", response.data); // Log the response data
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("Fetch Data Error:", error);
    throw error;
  }
};

export default fetchData;
