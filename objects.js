var playlist = {a:'b'}
function updatePlaylist(playlist,artistName,songTitle) {
 retrun Object.assign(playlist,{[artistName]:songTitle})

}
function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName
 return playlist
}
