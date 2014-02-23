function MultiParty(boundary) {
  if(boundary)
    this.boundary = boundary;
  else
    this.boundary = '---------------------------577900546148291341889429421';

  this.body = 'Content-Type: multipart/form-data; boundary=' + this.boundary + '\r\n\r\n';
  //this.body += 'Content-Length: 81602\r\n\r\n';
}

MultiParty.prototype.addParam = function(name, value) {
  this.body += '--' + this.boundary + '\r\n';
  this.body += 'Content-Disposition: form-data; name="' + name + '"\r\n\r\n';
  this.body += value + '\r\n';
};

MultiParty.prototype.addFile = function(name, fileName, contentType, content) {
  this.body += '--' + this.boundary + '\r\n';
  this.body += 'Content-Disposition: form-data; name="'+ name + '"; filename="' + fileName + '"\r\n';
  this.body += 'Content-Type: ' + contentType + '\r\n\r\n';
  this.body += content + '\r\n';
};

MultiParty.prototype.getBody = function() {
  return this.body + '--' + this.boundary + '--';
};

MultiParty.prototype.getContentTypeHeader = function() {
  return "multipart/form-data; boundary=" + this.boundary;
}
