let savedCheckId = "";

// Чек жасау
function generateCheck() {
  const id = "PF-" + Math.floor(100000 + Math.random() * 900000);
  savedCheckId = id;

  document.getElementById("checkId").innerText = id;
  document.getElementById("date").innerText =
    new Date().toLocaleString("kk-KZ");

  document.getElementById("receipt").classList.remove("hidden");

  // QR-код
  const url = window.location.href + "?check=" + id;
  document.getElementById("qr").innerHTML =
    `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}">`;
}

// PDF жүктеу
function downloadPDF() {
  window.print();
}

// Чекті тексеру
function verifyCheck() {
  const input = document.getElementById("inputId").value;
  const result = document.getElementById("verifyResult");

  if (input === savedCheckId) {
    result.innerText = "✅ Чек расталды";
    result.style.color = "green";
  } else {
    result.innerText = "❌ Чек табылмады";
    result.style.color = "red";
  }
}
