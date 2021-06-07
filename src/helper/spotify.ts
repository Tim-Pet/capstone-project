export const getTokenFromUrl = () => {
  return window.location.hash.split('=')[1]?.split('&')[0]
}
