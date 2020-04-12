var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, chE, correct = 0;
var questions = [
  [ "Sinonim Konvensi = ...", "Kebijakan", "Kesamaan", "Kesimpulan", "Kesepakatan", "Keputusan", "D" ],
  [ "Sinonim Ciri = ...", "Watak", "Jiwa", "Tabiat", "Karakteristik", "Akhlak", "D" ],
  [ "Antonim Sporadis = ...", "Jarang", "Kerap", "Laten", "Seperti", "Berhenti", "B" ],
  [ "Antonim Perintis = ...", "Pioner", "Pembawa", "Generasi", "Pewaris", "Pendahulu", "D" ],
  [ "Sungai : Jembatan", "Marka : Jalan", "Rintangan : Godaan", "Janji : Tepati", "Kayu : Terbakar", "Masalah : Jalan keluar", "E" ],
  [ "Kendaraan : Mobil", "Orang : Pemuda", "Gaji : Upah", "Kapal : Perahu", "Binatang : Lawan", "Laut : Danau", "A" ]
];
function _(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = _("test");
  if(pos >= questions.length){
    test.innerHTML = "<h5 class='text-center'>Mantap! Tryout sudah selesai.<br>Nilai kamu adalah "+correct+" ("+ parseFloat((correct * 100) / questions.length).toFixed(2) + "%)</h5>";
    pos = 0;
    correct = 0;
    return false;
  }
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  chE = questions[pos][5];
  test.innerHTML = "<p style='margin:8px;'>"+(pos+1)+". "+question+"</p>";
  test.innerHTML += "<div><input id='choices' type='radio' name='choices' value='A'><label for='choices'><span><span></span></span> A. "+chA+"</label></div>";
  test.innerHTML += "<div><input id='choices' type='radio' name='choices' value='B'><label for='choices'><span><span></span></span> B. "+chB+"</label></div>";
  test.innerHTML += "<div><input id='choices' type='radio' name='choices' value='C'><label for='choices'><span><span></span></span> C. "+chC+"</label></div>";
  test.innerHTML += "<div><input id='choices' type='radio' name='choices' value='D'><label for='choices'><span><span></span></span> D. "+chD+"</label></div>";
  test.innerHTML += "<div><input id='choices' type='radio' name='choices' value='E'><label for='choices'><span><span></span></span> E. "+chE+"</label></div>";
  test.innerHTML += "<button onclick='checkAnswer()' id='btn' class='btn btn btn-tryout badge-pill'>Selanjutnya</button>";
}
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos][6]){
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
