function onLoad() {

  var checkbox_div = document.getElementById('checkboxes');

  for (y = 0; y < 10; y++) {
    checkbox_div.innerHTML += '<div>';

    for (x = 0; x < 11; x++) {
      checkbox_div.innerHTML += '<input type="checkbox" class="checkbox" name="' + String(x) + "_" + String(y) + '">';
    }

    checkbox_div.innerHTML += '</div>';
  }

  checkbox_div.innerHTML += '<br><input type="text" name="ip" placeholder="192.168.1.15">';
  checkbox_div.innerHTML += '<input type="submit" value="Send">';
}

function onSubmit() {
  var form = document.forms['form'];
  var pattern = ""

  for (y = 0; y < 10; y++) {
    for (x = 0; x < 11; x++) {
      var str = String(x) + "_" + String(y);

      if (form[str].checked) {
        pattern += "1"
      } else {
        pattern += "0"
      }
    }
  }

  httpGetAsync("http://" + form["ip"].value + "/grafix.cgi?bright=15&glow=0&grid=" + pattern);

  return false;
}

function httpGetAsync(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
