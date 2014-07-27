# MultiParty

MultiParty is a small Javascript library which helps you to create a multipart/form-data XML-HTTP-Request when you have the content of a file available, simulating a form upload containing a file.


## Walkthrough

Create a new MultiParty instance

    var mp = new MultiParty();

Add text field entries, using their name and the value to send

    mp.addParam("email", "foo@bar.com");
    mp.addParam("name", "foo");

Add a file using the field name, a filename, a content type and the file content as a string

    mp.addFile("profile_banner", "dscn_1234.jpg", "image/jpeg", "HfKaDSsfj6dHGTRj&stzIuT456/Iufz4Ek&/RDvb76QW&fsdj/fgDGTh0j/g&df32ED7mbnF");

You can now get the XHR payload and its content type header (you need to use this header since it depends on the data you send)

    var body = mp.getBody(); // can be sent as XHR payload
    var cT = mp.getContentTypeHeader(); // set this as the XHRs content type


Sending the XML-HTTP-Request is straight-forward

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
      }
    }
    xmlhttp.open("POST", "myEndPoint.php", true);
    xmlhttp.setRequestHeader("Content-type", cT);
    xmlhttp.send(body);