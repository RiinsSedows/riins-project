<?php
session_start();
include 'koneksi.php';
include 'csrf.php';
 
function anti($text){
	return $id = stripslashes(strip_tags(htmlspecialchars($text, ENT_QUOTES)));
}
$nama_pengirim = anti($_POST["nama_pengirim"]);
$komen = anti($_POST["komen"]);
$komen_id = anti($_POST["komentar_id"]);
 
$query = "INSERT INTO tbl_komentar (parent_komentar_id, komentar, nama_pengirim) VALUES (?, ?, ?)";
$dewan1 = $db1->prepare($query);
$dewan1->bind_param("sss", $komen_id, $komen, $nama_pengirim);
$dewan1->execute();
 
echo json_encode(['success' => 'Sukses']);
?>