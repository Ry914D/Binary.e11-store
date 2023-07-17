// Isotope
var $grid = $('.collection-list').isotope({
  // options
});

// button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
};

function validateForm() {
  if (document.forms["xd"]["Nama Lengkap :"].value == "") {
    alert("Nama Tidak Boleh Kosong");
    document.forms["xd"]["Nama Lengkap :"].focus();
    return false;
  }
  if (document.forms["xd"]["No. Hp :"].value == "") {
    alert("No Hp Tidak Boleh Kosong");
    document.forms["xd"]["No. Hp :"].focus();
    return false;
  }
  if (document.forms["xd"]["Email :"].value == "") {
    alert("Email Tidak Boleh Kosong");
    document.forms["xd"]["Email :"].focus();
    return false;
  }
  if (document.forms["xd"]["Tanggal Pemesanan :"].value == "") {
    alert("Tanggal Tidak Boleh Kosong");
    document.forms["xd"]["Tanggal Pemesanan :"].focus();
    return false;
  }
  if (document.forms["xd"]["Alamat :"].value == "") {
    alert("Alamat Tidak Boleh Kosong");
    document.forms["xd"]["Alamat :"].focus();
    return false;
  }
  if (document.forms["xd"]["Pembayaran :"].selectedIndex < 1) {
    alert("Pilih Cara Pembayaran");
    document.forms["xd"]["Pembayaran :"].focus();
    return false;
  }
  if (document.forms["xd"]["Pesanan :"].value == "") {
    alert("Pesan Tidak Boleh Kosong");
    document.forms["xd"]["Pesanan :"].focus();
    return false;
  }
  if (document.forms["xd"]["mbas"].checked == "") {
    alert("Centang Jika Data Benar");
    document.forms["xd"]["mbas"].focus();
    return false;
  }

  var name = document.getElementById("namalk").value;
  var phone = document.getElementById("hp").value;
  var email = document.getElementById("mail").value;
  var tanggal = document.getElementById("tgl").value;
  var alamat = document.getElementById("alt").value;
  var pem = document.getElementById("pay").value;
  var pes = document.getElementById("des").value;


  var url = "https://wa.me/6283116460044?text="
  + "============ Pemesanan ===========" + "%0a"
  + "Nama Lengkap : " + name + "%0a"
  + "No. Hp : " + phone + "%0a"
  + "Email : " + email + "%0a"
  + "Tanggal Pemesanan : " + tanggal + "%0a"
  + "Alamat : " + alamat + "%0a"
  + "Tipe Pembayaran : " + pem + "%0a"
  + "Pesanan : " + pes + "%0a" 
  + "==================================";

  window.open(url, '_blank').focus();
};