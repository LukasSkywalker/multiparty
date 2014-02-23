describe("MultiParty", function() {
  it("generates payload with one file", function() {
    var mp = new MultiParty('AaB03x');
    mp.addParam('submit-name', 'Larry');
    mp.addFile('files', 'file1.txt', 'text/plain', '... contents of file1.txt ...');
    expect(mp.getBody()).toEqual(f1);
  });

  it('sets right header', function() {
    var mp = new MultiParty('AaB03x');
    mp.addParam('submit-name', 'Larry');
	expect(mp.getContentTypeHeader()).toEqual('multipart/form-data; boundary=AaB03x');
  });
});

var f1 = 'Content-Type: multipart/form-data; boundary=AaB03x\r\n\r\n' +
	'--AaB03x\r\n' +
	'Content-Disposition: form-data; name="submit-name"\r\n\r\n' +
	'Larry\r\n' +
	'--AaB03x\r\n' +
	'Content-Disposition: form-data; name="files"; filename="file1.txt"\r\n' +
	'Content-Type: text/plain\r\n\r\n' +
	'... contents of file1.txt ...\r\n' +
	'--AaB03x--';
