<?php
//Mengirimkan Token Keamanan Ajax Request (Csrf Token)
session_start();
if (empty($_SESSION['csrf_token'])) {
  $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />    
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <link rel="icon" href="images/dk.png">
	<title>Dewan Demo Form Komentar</title>
	<!-- Csrf Token -->
	<meta name="csrf-token" content="<?= $_SESSION['csrf_token'] ?>">
	<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
	<nav class="navbar navbar-dark bg-danger fixed-top">
	  <a class="navbar-brand" href="index.php" style="color: #fff;">
	    Dewan Komputer
	  </a>
	</nav>

	<div class="container mb-3">
		<h2 align="center" style="margin: 60px 10px 10px 10px;">Contoh Komentar PHP Ajax</h2><hr>
		<form method="POST" id="form_komen">
			<div class="form-group">
				<input type="text" name="nama_pengirim" id="nama_pengirim" class="form-control" placeholder="Masukkan Nama" />
			</div>
			<div class="form-group">
				<textarea name="komen" id="komen" class="form-control" placeholder="Tulis Komentar" rows="5"></textarea>
			</div>
			<div class="form-group">
				<input type="hidden" name="komentar_id" id="komentar_id" value="0" />
				<input type="submit" name="submit" id="submit" class="btn btn-info" value="Submit" />
			</div>
		</form>
		<hr>
		<h4 class="mb-3">Komentar :</h4>
		<span id="message"></span>
	   
	   	<div id="display_comment"></div>
	</div>

	<div class="navbar bg-dark">
		<div style="color: #fff;">© <?php echo date('Y'); ?> Copyright:
		    <a href="https://dewankomputer.com/"> Dewan Komputer</a>
		</div>
	</div>

	<script src="js/jquery.min.js"></script>
	<script>
		$(document).ready(function(){
			//Mengirimkan Token Keamanan
			$.ajaxSetup({
	            headers : {
	                'Csrf-Token': $('meta[name="csrf-token"]').attr('content')
	            }
	        });
        
			$('#form_komen').on('submit', function(event){
				event.preventDefault();
				var form_data = $(this).serialize();
				$.ajax({
					url:"tambah_komentar.php",
					method:"POST",
					data:form_data,
					success:function(data){
						$('#form_komen')[0].reset();
						$('#komentar_id').val('0');
						load_comment();
					}, error: function(data) {
		            	console.log(data.responseText)
		            }
				})
			});

			load_comment();

			function load_comment(){
				$.ajax({
					url:"ambil_komentar.php",
					method:"POST",
					success:function(data){
						$('#display_comment').html(data);
					}, error: function(data) {
		            	console.log(data.responseText)
		            }
				})
			}

			$(document).on('click', '.reply', function(){
				var komentar_id = $(this).attr("id");
				$('#komentar_id').val(komentar_id);
				$('#nama_pengirim').focus();
			});
		});
	</script>
</body>
</html>