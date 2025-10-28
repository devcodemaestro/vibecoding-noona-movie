import { useState } from 'react'

function MovieCard({ movie, imageBase }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const posterPath = movie.poster_path ? `${imageBase}${movie.poster_path}` : ''
  const title = movie.title || movie.original_title || '제목 미상'

  return (
    <article className="card" tabIndex={0}>
      <div className="poster-wrap">
        {posterPath && (
          <>
            <img
              className="poster"
              src={posterPath}
              alt={`${title} 포스터`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && <div className="poster-skeleton" aria-hidden="true"></div>}
          </>
        )}
      </div>
      <h3 className="title">{title}</h3>
    </article>
  )
}

export default MovieCard

