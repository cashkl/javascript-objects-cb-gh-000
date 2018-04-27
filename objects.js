var playlist = {"cem karaca":"Incir Agaci"}
function updatePlaylist(obj,name,title) {
  return obj.assign(obj,[name]:title)
}
function updatePlaylist(obj,name) {
  delete obj.name
 return obj
}
