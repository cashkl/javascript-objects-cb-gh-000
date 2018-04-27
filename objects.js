var playlist = {"cem karaca":"Incir Agaci"}
function updatePlaylist(playlist ,artistName,songTitle) {
  return playlist.assign(playlist,{artistName:[songTitle]})
}
function updatePlaylist(playlist,artistName) {
  delete playlist.artistName
 return playlist
}
