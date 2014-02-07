# Multiparty

    var mp = new MultiParty();
    mp.addParam('email', 'foo@bar.com');
    mp.addParam('name', 'foo');
    mp.addFile('profile_banner', 'dscn_1234.jpg', 'image/jpeg', 'HfKaDSsfj6dHGTRj&stzIuT456/Iufz4Ek&/RDvb76QW&fsdj/fgDGTh0j/g&df32ED7mbnF');
    var body = mp.getBody(); // can be sent as XHR payload
    var cT = mp.getContentTypeHeader(); // set this as the XHRs content type



    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
      }
    }
    xmlhttp.open("POST", "myEndPoint.php", true);
    xmlhttp.setRequestHeader("Content-type", cT);
    xmlhttp.send(body);
	