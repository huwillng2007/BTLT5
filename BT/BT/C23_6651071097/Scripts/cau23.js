"use strict";

function tinhLuong() {
  const luongStr = document.getElementById("luong").value.trim();
  const heSo = parseFloat(document.getElementById("heso").value);
  const out = document.getElementById("luongThang");
  const luong = Number(luongStr);

  if (luongStr === "" || isNaN(luong) || luong < 0) {
    out.textContent = "Lương không hợp lệ!";
    out.classList.add("error");
    return;
  }
  out.classList.remove("error");
  // làm tròn để tránh sai số dấu phẩy động (vd: 1000000 * 3.2)
  out.textContent = Math.round(luong * heSo);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnTinh").addEventListener("click", tinhLuong);
});
