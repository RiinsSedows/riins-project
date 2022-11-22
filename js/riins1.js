openNav("Dashboard")
function openNav(tabname) {
    var i;
    var x = document.getElementsByClassName("tabnav");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(tabname).style.display = "block";  
}


function openTools(evt, tabsName) {
  var i, tabz, tablinkz;
  tabz = document.getElementsByClassName("tabz");
  for (i = 0; i < tabz.length; i++) {
    tabz[i].style.display = "none";
  }
  tablinkz = document.getElementsByClassName("tablinkz");
  for (i = 0; i < tablinkz.length; i++) {
    tablinkz[i].className = tablinkz[i].className.replace(" active", "");
  }
  document.getElementById(tabsName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openHarga(daftarHarga,elmnt,color) {
  var i, tabharga, normal;
  tabharga = document.getElementsByClassName("tabharga");
  for (i = 0; i < tabharga.length; i++) {
    tabharga[i].style.display = "none";
  }
  normal = document.getElementsByClassName("normal");
  for (i = 0; i < normal.length; i++) {
    normal[i].style.backgroundColor = "";
  }
  document.getElementById(daftarHarga).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//showslide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


$(document).on('click','.send_form', function(){
  var input_blanter = document.getElementById('wa_email');
  
  /* Whatsapp Settings */
  var walink = 'https://web.whatsapp.com/send',
      phone = '62882006014023',
      walink2 = 'Halo saya ingin ',
      text_yes = 'Terkirim.',
      text_no = 'Isi semua Formulir lalu klik Send.';
  
  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var walink = 'whatsapp://send';
  }
  
  if("" != input_blanter.value){
  
   /* Call Input Form */
  var input_select1 = $("#wa_select :selected").text(),
      input_name1 = $("#wa_name").val(),
      input_email1 = $("#wa_email").val(),
      input_number1 = $("#wa_number").val(),
      input_url1 = $("#wa_url").val(),
      input_textarea1 = $("#wa_textarea").val();
  
  /* Final Whatsapp URL */
  var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
      '*Name* : ' + input_name1 + '%0A' +
      '*Email Address* : ' + input_email1 + '%0A' +
      '*Select Option* : ' + input_select1 + '%0A' +
      '*Input Number* : ' + input_number1 + '%0A' +
      '*URL/Link* : ' + input_url1 + '%0A' +
      '*Description* : ' + input_textarea1 + '%0A';
  
  /* Whatsapp Window Open */
  window.open(blanter_whatsapp,'_blank');
  document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
  } else {
  document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
  }
  });