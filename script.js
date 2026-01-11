// дата шығару
document.getElementById("date").innerText =
  new Date().toLocaleString("kk-KZ");

// QR генерация (сыртқы сервис, бірақ код авторлық)
const qrDiv = document.getElementById("qr");
const checkId = document.getElementById("checkId").innerText;
const url = window.location.href + "?check=" + checkId;

qrDiv.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}">`;

// PDF генерация (браузер print)
function downloadPDF() {
  window.print();
}
