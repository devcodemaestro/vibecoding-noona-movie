const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const page = req.query.page || "1";

  try {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=ko-KR&page=${page}`;

    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).json(data);
  } catch (error) {
    console.error("TMDB API 오류:", error);
    res.status(500).json({ error: "TMDB API 요청 실패" });
  }
};
