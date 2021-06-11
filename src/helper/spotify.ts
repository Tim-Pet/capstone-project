export const getTokenFromUrl = (): string | undefined =>
  window.location.hash.split('=')[1].split('&')[0]
