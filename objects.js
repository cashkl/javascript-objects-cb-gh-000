var playlist = {a:"b"}
function updatePlaylist(playlist2 ,artistName,songTitle) {
 playlist2.assign(playlist2,{artistName:[songTitle]})
 return playlist2
}
function removeFromPlaylist(playlist2,artistName) {
  delete playlist2.artistName
 return playlist2
}
