document.getElementById("menu1").addEventListener("input", ukupanIznos);
document.getElementById("menu2").addEventListener("input", ukupanIznos);
document.getElementById("menu3").addEventListener("input", ukupanIznos);
function ukupanIznos() {

 var kolPrvi = document.getElementById("kol1").value;
 var kolDrugi = document.getElementById("kol2").value;
 var kolTreci = document.getElementById("kol3").value;
 var kolCetiri = document.getElementById("kol4").value;
 var kolPet = document.getElementById("kol5").value;
 var kolSest = document.getElementById("kol6").value;
 var kolSedam = document.getElementById("kol7").value;
 var kolOsam = document.getElementById("kol8").value;
 var kolDevet = document.getElementById("kol9").value;
 var kolDeset = document.getElementById("kol10").value;
 var kolJedanaest = document.getElementById("kol11").value;
 var kolDvanaest = document.getElementById("kol12").value;

 var ukcena = document.getElementById("ukcena").value;
 var komadi = document.getElementById("komadi").value;

  cena = (kolPrvi * 10) + (kolDrugi * 8) + (kolTreci * 10) + (kolCetiri * 10) + (kolPet * 8) + (kolSest * 10)  +
  (kolSedam * 10) + (kolOsam * 8) + (kolDevet * 10) + (kolDeset * 50) + (kolJedanaest * 30) + (kolDvanaest * 20);
  //prostor.innerHTML = cena + " RSD";

  document.getElementById("rezultati").innerHTML = "Vaš račun je: " + cena + " RSD" + '<br>';
  ukcena.value = "Račun je: " + cena + " RSD";

  if(kolPrvi > 0){
      document.getElementById("rezultati").innerHTML += "Naručeno: proizvod 1, komada " + kolPrvi + "." + '<br>';
      komadi.value = "Naručeno: proizvod 1, komada " + kolPrvi + "." + '<br>';
  }
  if(kolDrugi > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 2, komada ${kolDrugi}.<br>`;
      komadi.value += "Naručeno: proizvod 2, komada " + kolDrugi + "." + '<br>';
  }
  if(kolTreci > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 3, komada ${kolTreci}.<br>`
        komadi.value += "Naručeno: proizvod 2, komada " + kolTreci + "." + '<br>';
  }
  if(kolCetiri > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 4, komada ${kolCetiri}.<br>`
        komadi.value += "Naručeno: proizvod 2, komada " + kolCetiri + "." + '<br>';
  }
  if(kolPet > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 5, komada ${kolPet}.<br>`
        komadi.value += "Naručeno: proizvod 2, komada " + kolPet + "." + '<br>';
  }
  if(kolSest > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 6, komada ${kolSest}.<br>`
        komadi.value += "Naručeno: proizvod 2, komada " + kolSest + "." + '<br>';
  }
  if(kolSedam > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 7, komada ${kolSedam}.<br>`
        komadi.value += "Naručeno: proizvod 2, komada " + kolSedam + "." + '<br>';
  }
  if(kolOsam > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 8, komada ${kolOsam}.<br>`
        komadi.value += "Naručeno: proizvod 2, komada " + kolOsam + "." + '<br>';
  }
  if(kolDevet > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 9, komada ${kolDevet}.<br>`
        komadi.value += "Naručeno: proizvod 2, komada " + kolDevet + "." + '<br>';
  }
  if(kolDeset > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 10, komada ${kolDeset}.<br>`
        komadi.value += "Naručeno: proizvod 2, komada " + kolDeset + "." + '<br>';
  }
  if(kolJedanaest > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 11, komada ${kolJedanaest}.<br>`
        komadi.value += "Naručeno: proizvod 2, komada " + kolJedanaest + "." + '<br>';
  }
  if(kolDvanaest > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: proizvod 12, komada ${kolDvanaest}.`
        komadi.value += "Naručeno: proizvod 2, komada " + kolDvanaest + "." + '<br>';
  }
  else {
document.getElementById("rezultati").innerHTML += '';
  komadi.value += '';
  }

}

const slanje = document.getElementById("slanje");
const ime = document.getElementById("ime");
const telefon = document.getElementById("telefon");
const grad = document.getElementById("grad");
const email = document.getElementById("email");
const adresa = document.getElementById("adresa");
let sveValidno = true;

function proveriSve(){

  if(/^[ ]{0,3}[a-zA-Za-žA-Ž]{2,25}(([' -][ ]*[a-zA-Za-žA-Ž]{2,25})?[a-zA-Za-žA-Ž ]*)*$/.test(ime.value) == false){
    sveValidno = false;
    alert("Upišite svoje ime i prezime");
    ime.focus();
  }

  else if (/^[ ]{0,3}[a-zA-Za-žA-Ž]{2,25}(([ -][ ]*[a-zA-Za-žA-Ž]{2,25})?[ ]*)*$/.test(grad.value) == false){
    sveValidno = false;
   alert("Unesite grad");
  grad.focus();
}

else if(/^[ ]{0,3}[a-zA-Za-žA-Ž0-9]{2,25}(([ -\/][ ]*[a-zA-Za-žA-Ž0-9]{1,25})?[ ]*)*$/.test(adresa.value) == false){
  sveValidno = false;
alert("Unesite svoju adresu");
  adresa.focus();
}

  else if (/^[ ]{0,3}0\d{2}\/\d{3}-\d{3,4}[ ]{0,3}$/.test(telefon.value) == false){
    sveValidno = false;
  alert("Unesite u pravilnom formatu svoj broj telefona");
  telefon.focus();
}

  else if(/^[ ]{0,3}[a-z0-9]+([._]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}[ ]{0,3}$/.test(email.value) == false){
    sveValidno = false;
alert("Unesite email");
  email.focus();
}
else {
  sveValidno = true;
}

}

function proveri(event){

  event.preventDefault();
  sveValidno = true;

  proveriSve();


  if (sveValidno){
    slanje.submit();
  }

}

slanje.addEventListener("submit", proveri);
