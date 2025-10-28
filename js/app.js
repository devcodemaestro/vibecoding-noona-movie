(function () {
  const API_URL = "/api/now-playing"; // 프록시 서버 경로
  const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

  const gridEl = document.getElementById("grid");
  const statusEl = document.getElementById("status");
  const cardTpl = document.getElementById("card-template");

  async function fetchNowPlaying(page = 1) {
    const url = new URL(API_URL, window.location.origin);
    url.searchParams.set("page", String(page));

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`TMDB 오류: ${res.status}`);
    return res.json();
  }

  function createCard(movie) {
    const node = cardTpl.content.firstElementChild.cloneNode(true);
    const posterEl = node.querySelector(".poster");
    const skeletonEl = node.querySelector(".poster-skeleton");
    const titleEl = node.querySelector(".title");

    const posterPath = movie.poster_path ? IMAGE_BASE + movie.poster_path : "";
    if (posterPath) {
      posterEl.src = posterPath;
      posterEl.alt = `${movie.title} 포스터`;
      posterEl.addEventListener("load", () => skeletonEl.remove());
      posterEl.addEventListener("error", () => skeletonEl.remove());
    } else {
      skeletonEl.remove();
    }

    titleEl.textContent = movie.title || movie.original_title || "제목 미상";
    return node;
  }

  function renderMovies(movies) {
    const frag = document.createDocumentFragment();
    movies.forEach((m) => frag.appendChild(createCard(m)));
    gridEl.appendChild(frag);
  }

  async function init() {
    try {
      statusEl.textContent = "로딩 중...";
      gridEl.setAttribute("aria-busy", "true");
      const data = await fetchNowPlaying(1);
      const movies = Array.isArray(data.results) ? data.results : [];
      renderMovies(movies);
      statusEl.textContent = `총 ${movies.length}개 타이틀`;
      if (movies.length === 0) {
        const empty = document.createElement("div");
        empty.style.color = "#a3a3a3";
        empty.style.marginTop = "8px";
        empty.textContent = "표시할 항목이 없습니다.";
        gridEl.appendChild(empty);
      }
    } catch (err) {
      console.error(err);
      statusEl.textContent =
        "데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.";
    } finally {
      gridEl.setAttribute("aria-busy", "false");
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
