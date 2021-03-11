<?php
$host = mysqli_connect("localhost", "root", "");

// if ($host) {
//     echo "koneksi host berhasil.<br/>";
// } else {
//     echo "koneksi gagal.<br/>";
// }

$db = mysqli_select_db($host, 'saran_covid');

// if ($db) {
//     echo "koneksi database berhasil.";
// } else {
//     echo "koneksi database gagal.";
// }

$nama = $_POST['nama'];
$saran = $_POST['saran'];
$pendapat = $_POST['pendapat'];

$query = "INSERT INTO saran (nama, saran, pendapat) VALUES ('  $nama  ', '  $saran  ' ,'  $pendapat  ') ";

$insert = mysqli_query($host, $query);
header("location:index.php");
