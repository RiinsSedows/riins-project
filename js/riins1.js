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


		$(document).on('click','.kerembos', function(){
			var input_name 			= $("#name").val(),
			    input_email 		= $("#email").val(),
			    input_phone 		= $("#phone").val(),
			    input_product 		= $("#product").val(),
			    input_description 	= $("#description").val();
			var walink 		= 'https://web.whatsapp.com/send',
			    phone 		= '62882006014023',
			    text 		= 'Saya ingin membuat website : ',
			    text_yes	= 'Pesanan Anda berhasil terkirim.',
			    text_no 	= 'Isilah formulir terlebih dahulu.';
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				var walink = 'whatsapp://send';
			}
			if(input_name != "" && input_phone != "" && input_email != ""){
				var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
				    '*Nama* : ' + input_name + '%0A' +
				    '*Nama Toko* : ' + input_email + '%0A' +
				    '*Link* : ' + input_description + '%0A';
				window.open(checkout_whatsapp,'_blank');
				document.getElementById("text-info").innerHTML = '<div class="alert alert-success">'+text_yes+'</div>';
			} else {
				document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">'+text_no+'</div>';
			}
		});