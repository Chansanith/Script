var NumberOfWords = 27

var words = new BuildArray(NumberOfWords)

words[1] = "Vet Thida"
words[2] = "In Sarum"
words[3] = "Sok Chetra"
words[4] = "Mouern Lida"
words[5] = "Seng Sreyneang"
words[6] = "Ly Sreyven"
words[7] = "Seth Soklin"
words[8] = "Chhor Sokhourng"
words[9] = "Chek Chhay"
words[10] = "Kim Chandy"
words[11] = "Mak Ratanakbot"
words[12] = "Koem Tangkea"
words[13] = "Pheng Lakhena"
words[14] = "Khin Thavy"
words[15] = "Chan Sreymom"
words[16] = "Phiv Sovann"
words[17] = "Chhoem Malen"
words[18] = "Lay Sreypich"
words[19] = "Sreang Reaksaa"
words[20] = "Sat Leaphea"
words[21] = "Nov Thida"
words[22] = "Nan Sreythea"
words[23] = "Chheang Simuoy"
words[24] = "Yoeurn Sophaphit"
words[25] = "Lim Panha"
words[26] = "Leang Sonyta"
words[27] = "Toek Kanhchana"

//Function!//
function BuildArray(size){
  this.length = size
  for (var i = 1; i <= size; i++){
    this[i] = null}
  return this
}

function PickRandomWord(frm) {
  var rnd = Math.ceil(Math.random() * NumberOfWords)
  frm.wordspace.value = words[rnd]
}
