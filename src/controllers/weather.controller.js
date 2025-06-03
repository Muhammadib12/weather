import axios from "axios";
export const getWeather = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.ims.gov.il/v1/envista/stations/42/data/latest",
      {
        headers: {
          Authorization: `ApiToken ${process.env.API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).json({ message: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};
