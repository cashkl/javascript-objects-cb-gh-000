playlist = {cem karaca:"Incir Agaci"}
function updatePlaylist(object,name,title) {
  object.assign(object,[name]:title)
}
function updatePlaylist(object,name) {
  delete object.name
}
