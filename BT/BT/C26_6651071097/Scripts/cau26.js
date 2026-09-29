"use strict";

// Năm % 10 -> Can
const CAN = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
// Năm % 12 -> Chi
const CHI = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

function baoLoi(msg) {
  const input = document.getElementById("namDuong");
  document.getElementById("loi").textContent = msg;
  input.classList.toggle("invalid", msg !== "");
  if (msg) document.getElementById("canChi").value = "";
}

function tinhCanChi() {
  const str = document.getElementById("namDuong").value.trim();

  // Validate giá trị của textbox "Năm"
  if (str === "") { baoLoi("Vui lòng nhập năm!"); return; }
  if (!/^\d+$/.test(str)) { baoLoi("Năm phải là số nguyên dương!"); return; }
  const nam = parseInt(str, 10);
  if (nam < 1 || nam > 9999) { baoLoi("Năm phải trong khoảng 1 - 9999!"); return; }

  baoLoi("");
  document.getElementById("canChi").value = CAN[nam % 10] + " " + CHI[nam % 12];
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnTinh").addEventListener("click", tinhCanChi);
  document.getElementById("namDuong").addEventListener("keydown", function (e) {
    if (e.key === "Enter") tinhCanChi();
  });
});
