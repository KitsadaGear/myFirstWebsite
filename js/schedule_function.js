function reply_click(clicked_id) {
  if (clicked_id == "monday") {
    document.getElementById("monday_form").style.display = "block";
    document.getElementById("monday_form").style.width = "33%";

    var a = document.querySelectorAll(
      "#tuesday_form , #wednesday_form , #thursday_form , #friday_form , #saturday_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "tuesday") {
    document.getElementById("tuesday_form").style.display = "block";
    document.getElementById("tuesday_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#monday_form , #wednesday_form , #thursday_form , #friday_form , #saturday_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "wednesday") {
    document.getElementById("wednesday_form").style.display = "block";
    document.getElementById("wednesday_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#monday_form , #tuesday_form , #thursday_form , #friday_form , #saturday_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "thursday") {
    document.getElementById("thursday_form").style.display = "block";
    document.getElementById("thursday_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#monday_form , #wednesday_form , #wednesday_form , #friday_form , #saturday_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "friday") {
    document.getElementById("friday_form").style.display = "block";
    document.getElementById("friday_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#monday_form , #wednesday_form , #thursday_form , #thursday_form , #saturday_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "saturday") {
    document.getElementById("saturday_form").style.display = "block";
    document.getElementById("saturday_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#monday_form , #wednesday_form , #thursday_form , #thursday_form , #friday_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  }
}

function showDetail(clicked_id) {
  if (clicked_id == "SE") {
    document.getElementById("SE_form").style.display = "block";
    document.getElementById("SE_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#Web_form , #IP_form , #Bus_form , #Cloud_form , #Music_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "Web") {
    document.getElementById("Web_form").style.display = "block";
    document.getElementById("Web_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#SE_form , #IP_form , #Bus_form , #Cloud_form , #Music_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "IP") {
    document.getElementById("IP_form").style.display = "block";
    document.getElementById("IP_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#Web_form , #SE_form , #Bus_form , #Cloud_form , #Music_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "Bus_Data") {
    document.getElementById("Bus_form").style.display = "block";
    document.getElementById("Bus_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#Web_form , #IP_form , #SE_form , #Cloud_form , #Music_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "Cloud") {
    document.getElementById("Cloud_form").style.display = "block";
    document.getElementById("Cloud_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#Web_form , #IP_form , #Bus_form , #SE_form , #Music_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  } else if (clicked_id == "Music") {
    document.getElementById("Music_form").style.display = "block";
    document.getElementById("Music_form").style.width = "33%";
    var a = document.querySelectorAll(
      "#Web_form , #IP_form , #Bus_form , #Cloud_form , #SE_form"
    );
    var i;
    for (i = 0; i < a.length; i++) {
      a[i].style.display = "none";
      a[i].style.width = "0%";
    }
  }
}
