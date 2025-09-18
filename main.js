const naseeh = [
  "ابتسم، فالابتسامة دواء للروح.",
  "خطط لمستقبلك لكن استمتع بيومك.",
  "لا تؤجل عمل اليوم إلى الغد.",
  "التجربة خير برهان.",
  "الصبر مفتاح الفرج.",
  "من جد وجد ومن زرع حصد.",
  "التعلم رحلة لا تنتهي."
];

function getArabicAdvice() {
  let rand = Math.floor(Math.random() * naseeh.length);
  return naseeh[rand];
}

function showArabicAdvice() {
  let place = document.getElementById("msg");
  place.textContent = getArabicAdvice();
}

window.addEventListener("load", showArabicAdvice);
document.getElementById("btn").addEventListener("click", showArabicAdvice);
