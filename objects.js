var playlist = {a:"b"}
function updatePlaylist(playlist ,artistName,songTitle) {
 playlist.assign(playlist,{artistName:[songTitle]})
 return playlist
}
function updatePlaylist(playlist,artistName) {
  delete playlist.artistName
 return playlist
}
