"use strict";

const TEN_THU = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

function napThang() {
  const sel = document.getElementById("thang");
  for (let m = 1; m <= 12; m++) {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    sel.appendChild(opt);
  }
  sel.value = 1;
}

function hienThi(text, isError) {
  const out = document.getElementById("ketqua");
  out.textContent = text;
  out.classList.toggle("error", Boolean(isError));
}

function xuatThu() {
  const ngayStr = document.getElementById("ngay").value.trim();
  const namStr = document.getElementById("nam").value.trim();
  const ngay = Number(ngayStr);
  const thang = Number(document.getElementById("thang").value);
  const nam = Number(namStr);

  if (!/^\d+$/.test(ngayStr) || !/^\d+$/.test(namStr) || ngay < 1 || nam < 1) {
    hienThi("Ngày và năm phải là số nguyên dương!", true);
    return;
  }

  // Date(năm, tháng - 1, ngày) rồi kiểm tra lại để bắt ngày không tồn tại (vd 31/2)
  const d = new Date(nam, thang - 1, ngay);
  d.setFullYear(nam); // tránh năm 0-99 bị hiểu là 1900-1999
  if (d.getFullYear() !== nam || d.getMonth() !== thang - 1 || d.getDate() !== ngay) {
    hienThi("Ngày " + ngay + " tháng " + thang + " năm " + nam + " không tồn tại!", true);
    return;
  }

  hienThi(TEN_THU[d.getDay()] + " Ngày " + ngay + " tháng " + thang + " năm " + nam, false);
}

document.addEventListener("DOMContentLoaded", function () {
  napThang();
  document.getElementById("btnXuat").addEventListener("click", xuatThu);
});
