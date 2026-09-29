"use strict";

// Bảng giá các món
const THUC_AN = {
  "Bún bò": 20000,
  "Hủ tiếu": 18000,
  "Bánh canh": 17000,
  "Phở bò": 19000,
  "Nuôi": 15000,
  "Bánh mì thịt": 12000,
  "Bánh cuốn": 15000
};

const NUOC_UONG = {
  "Cà phê đá": 12000,
  "Cà phê sữa đá": 15000,
  "Chanh dây": 13000,
  "Chanh muối": 12000,
  "Xí muội": 14000,
  "Sữa tươi": 13000,
  "Cam vắt": 17000
};

function napDanhSach(selectId, bangGia) {
  const sel = document.getElementById(selectId);
  Object.keys(bangGia).forEach(function (ten) {
    const opt = document.createElement("option");
    opt.value = ten;
    opt.textContent = ten;
    sel.appendChild(opt);
  });
}

function layMucDaChon(selectId, bangGia) {
  const sel = document.getElementById(selectId);
  return Array.from(sel.selectedOptions).map(function (o) {
    return { ten: o.value, gia: bangGia[o.value] };
  });
}

function tinhTien() {
  const ketQua = document.getElementById("ketqua");
  const cacMon = layMucDaChon("thucAn", THUC_AN).concat(layMucDaChon("nuocUong", NUOC_UONG));

  if (cacMon.length === 0) {
    ketQua.innerHTML = '<p class="error">Vui lòng chọn ít nhất một món!</p>';
    return;
  }

  const banDem = document.querySelector('input[name="thoiDiem"]:checked').value === "dem";
  let tong = cacMon.reduce(function (s, m) { return s + m.gia; }, 0);

  let html = '<table class="bill"><tr><th>Các món đã dùng</th><th>Tiền</th></tr>';
  cacMon.forEach(function (m) {
    html += "<tr><td>" + m.ten + '</td><td class="money">' + m.gia + "</td></tr>";
  });

  if (banDem) {
    const phuThu = Math.round(tong * 0.1);
    html += '<tr><td>Phụ thu ban đêm (10%)</td><td class="money">' + phuThu + "</td></tr>";
    tong += phuThu;
  }

  html += '<tr><td>Tổng tiền</td><td class="money">' + tong + " đồng</td></tr></table>";
  ketQua.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  napDanhSach("thucAn", THUC_AN);
  napDanhSach("nuocUong", NUOC_UONG);
  document.getElementById("btnTinhTien").addEventListener("click", tinhTien);
});
