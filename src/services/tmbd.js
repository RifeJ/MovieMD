const API_KEY = "2812d099eb0a17bac30da911fe0d64b8";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopular = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return res.json();
};

export const fetchDetails = async (id) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`,
  );
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
};

export const fetchTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
};

export const fetchTopRated = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
};

export const fetchMovies = async (genreId) => {
  const url = genreId
    ? `${BASE_URL}/discover/movie?with_genres=${genreId}&api_key=${API_KEY}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch movies");

  const data = await res.json();
  return data.results;
};

export const fetchSeries = async (genreId) => {
  const url = genreId
    ? `${BASE_URL}/discover/tv?with_genres=${genreId}&api_key=${API_KEY}`
    : `${BASE_URL}/tv/popular?api_key=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch movies");

  const data = await res.json();
  return data.results;
};

export const fetchGenres = async (type = "movie") => {
  const res = await fetch(`${BASE_URL}/genre/${type}/list?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch genres");
  const data = await res.json();
  return data.genres;
};

export const fetchUniverse = async (id, type) => {
  let endpoint = "";

  if (type === "movie") {
    switch (id) {
      case "marvel":
        endpoint = `/discover/movie?with_companies=420`;
        break;
      case "dc":
        endpoint = `/discover/movie?with_companies=9993`;
        break;
      case "musicals":
        endpoint = `/discover/movie?with_genres=10402`;
        break;
      case "john_wick":
        endpoint = `/search/movie?query=John+Wick`;
        break;
      case "godzilla":
        endpoint = `/search/movie?query=Godzilla`;
        break;
      case "anime":
        endpoint = `/discover/movie?with_keywords=210024`;
        break;
      default:
        endpoint = `/movie/popular`;
    }
  } else if (type === "tv") {
    switch (id) {
      case "netflix":
        endpoint = `/discover/tv?with_networks=213`;
        break;
      case "hbo":
        endpoint = `/discover/tv?with_networks=49`;
        break;
      case "sitcoms":
        endpoint = `/discover/tv?with_genres=35&with_keywords=9799`;
        break;
      case "crime":
          endpoint = `/discover/tv?with_genres=80`;
        break;
      case "k-drama":
        endpoint = `/discover/tv?with_genres=18&with_original_language=ko`;
        break;
      case "top_rated":
        endpoint = `/tv/top_rated`;
        break;
      default:
        endpoint = `/tv/popular`;
    }
  }

  // Универсальный сборщик URL
  const separator = endpoint.includes("?") ? "&" : "?";
  const url = `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${type}`);
  const data = await res.json();
  return data.results;
};

export const fetchActors = async () => {
  const res = await fetch(
    `${BASE_URL}/person/popular?api_key=${API_KEY}&page=1`,
  );
  if (!res.ok) throw new Error("Failed to fetch actors");
  return res.json();
};

export const fetchDetailsActors = async (actorID) => {
  const res = await fetch(`${BASE_URL}/person/${actorID}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch actors type: D");
  return res.json();
};

export const fetchActorsByName = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/person?api_key=${API_KEY}&query=${query}`,
  );
  if (!res.ok) throw new Error("Failed to fetch actors type : N");
  return res.json();
};

export const fetchCountries = async () => {
  const res = await fetch(
    `${BASE_URL}/configuration/countries?api_key=${API_KEY}`,
  );
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json(); // Fixed: Added () and await

  return data.sort((a, b) => a.english_name.localeCompare(b.english_name));
};

export const fetchPopularByName = async (query) => {
  const url = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
};

export const fetchDirectors = async (query) => {
  if (!query) return { results: [] };

  const res = await fetch(
    `${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );

  if (!res.ok) throw new Error("Failed to fetch directors");
  const data = await res.json();

  const directors = data.results.filter(
    (person) => person.known_for_department === "Directing",
  );

  return {
    results: directors.length > 0 ? directors : data.results.slice(0, 5),
  };
};

export const fetchPlusFilters = async (filters) => {
  const res = await fetch(``);
  if (!res.ok) throw new Error("Failed to fetch filters");
  return res.json();
};
