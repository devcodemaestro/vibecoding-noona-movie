module.exports = async (req, res) => {
  // CORS 헤더 설정
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const TMDB_API_URL = "https://api.themoviedb.org/3/movie/now_playing";
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  if (!TMDB_API_KEY) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const page = req.query.page || "1";
    const url = new URL(TMDB_API_URL);
    url.searchParams.set("api_key", TMDB_API_KEY);
    url.searchParams.set("language", "ko-KR");
    url.searchParams.set("page", page);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return res.status(500).json({ error: "Failed to fetch movies" });
  }
};
