import { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard'

const API_URL = 'https://api.themoviedb.org/3/movie/now_playing'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

function App() {
  const [movies, setMovies] = useState([])
  const [status, setStatus] = useState('로딩 중...')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies(page = 1) {
    try {
      const url = new URL(API_URL)
      url.searchParams.set('api_key', API_KEY)
      url.searchParams.set('language', 'ko-KR')
      url.searchParams.set('page', String(page))

      const res = await fetch(url.toString())
      if (!res.ok) throw new Error(`TMDB 오류: ${res.status}`)
      
      const data = await res.json()
      const movieList = Array.isArray(data.results) ? data.results : []
      
      setMovies(movieList)
      setStatus(`총 ${movieList.length}개 타이틀`)
    } catch (err) {
      console.error(err)
      setStatus('데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <header className="site-header">
        <div className="brand">Vibe Movies</div>
        <h1 className="page-title">현재 상영작</h1>
      </header>

      <main className="content">
        <section className="movie-section">
          <div className="section-header">
            <h2>Now Playing</h2>
            <div className="status" aria-live="polite">{status}</div>
          </div>
          <div className="grid" aria-live="polite" aria-busy={isLoading}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} imageBase={IMAGE_BASE} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

