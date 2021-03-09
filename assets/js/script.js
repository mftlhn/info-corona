//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }

// var x = window.matchMedia("(min-width: 992px)")

var navbar = $("nav");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 200) {
        navbar.addClass('shadow');
        navbar.addClass('bg-grey');
        navbar.removeClass('bg-transparent');
    } else {
        navbar.removeClass('shadow');
        navbar.removeClass('bg-grey');
        navbar.addClass('bg-transparent');
    }
})

// $('#nav-link-home').addClass('active');

$('#selengkapnya').mouseover(function() {
    $('#selengkapnya').addClass('shadow');
})

$('#selengkapnya').mouseleave(function() {
    $('#selengkapnya').removeClass('shadow');
})

AOS.init();

$('body').scrollspy({ target: '#navbar-corona' })

// $.getJSON("https://data.covid19.go.id/public/api/update.json", function(result) {
//     $('#odp').html(`
//         <h2>` + formatter(result.data.jumlah_odp) + `</h2>
//     `);
//     $('#spesimen').html(`
//         <h2>` + formatter(result.data.total_spesimen) + `</h2>
//     `);
//     $('#negatif').html(`
//         <h2>` + formatter(result.data.total_spesimen_negatif) + `</h2>
//     `);
// })

// $('.nav-item').on('click', function() {
//     $('.nav-item').removeClass('active');
//     $(this).addClass('active');
// })

$.getJSON("https://api.kawalcorona.com/indonesia", function(result) {
    result.forEach(element => {
        $('#positif').html(`
            <h2>` + element.positif + `</h2>
        `);
        $('#sembuh').html(`
            <h2>` + element.sembuh + `</h2>
        `);
        $('#meninggal').html(`
            <h2>` + element.meninggal + `</h2>
        `);
        // console.log(element.positif);
    });
})

function formatter(angka) {
    var bilangan = angka;
	
    var	number_string = bilangan.toString(),
        sisa 	= number_string.length % 3,
        rupiah 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    return rupiah;
}

function removeComa(angka) {
    var angka = angka;
    var replace = angka.replace(",", ".");

    return replace;
}

