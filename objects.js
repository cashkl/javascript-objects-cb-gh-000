playlist = {a:"b"}
function updatePlaylist(playlist,artistName,songTitle) {
 playlist.assign(playlist,{artistName:[songTitle]})
 return playlist
}
function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName
 return playlist
}
