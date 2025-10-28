require("dotenv").config();
const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// 정적 파일 제공
app.use(express.static(path.join(__dirname)));

// 프록시 엔드포인트
app.get("/api/now-playing", async (req, res) => {
  try {
    const page = req.query.page || "1";
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=ko-KR&page=${page}`;

    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (error) {
    console.error("TMDB API 오류:", error);
    res.status(500).json({ error: "TMDB API 요청 실패" });
  }
});

// 루트 경로
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
  console.log(`TMDB API 키: ${TMDB_API_KEY ? "설정됨 ✓" : "설정되지 않음 ✗"}`);
});
