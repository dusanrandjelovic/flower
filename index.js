
  $('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
$(function () {
    // tooltip aktivacija
    $('[data-toggle="tooltip"]').tooltip();
});

  function Vreme(){
       time = new Date();
       cas = time.getHours();
       minuti = time.getMinutes();
       sekunde = time.getSeconds();

       temp = ((cas>12) ? cas-12 : cas);
       temp += ((minuti<10) ? ":0" : ":") + minuti;
       temp += ((sekunde<10) ? ":0" : ":") + sekunde;
       temp += ((cas>=12) ? " PM" : " AM");
       document.vremeForma.cifre.value = temp;
       setTimeout("Vreme()", 1000);
  }


  
    /*quotes = new Array(6);
    authors = new Array(6);
    quotes[0] = '"Toliko je bilo stvari u životu kojih smo se bojali. A nije trebalo. Trebalo je živeti."';
    authors[0] = "-Ivo Andrić";
    quotes[1] = '"Prijateljstvo se na bira, ono biva, ko zna zbog čega, kao ljubav"';
    authors[1] = "-Meša Selimović";
    quotes[2] = '"Zdrav covek ima hiljadu želja, a bolestan samo jednu - da ozdravi."';
    authors[2] = "-Narodna izreka";
    quotes[3] = '"Nemojte da hendikepirate svoju decu time što ćete im život učiniti suviše lakim"';
    authors[3] = "-Duško Radović";
    quotes[4] = '"Čast se ne može oduzeti, ona se može samo izgubiti"';
    authors[4] = "-Čehov";
    quotes[5] = '"Nema sunca bez svetlosti, ni čoveka bez ljubavi"';
    authors[5] = "-Gete";


    index = Math.floor(Math.random() * quotes.length);


    const misao = document.getElementById("misao")
    const autor = document.getElementById("autor")
    misao.innerHTML = quotes[index];
    autor.innerHTML = authors[index];*/
