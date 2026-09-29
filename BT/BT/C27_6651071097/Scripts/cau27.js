"use strict";

// Tính lại cột "Tổng" = Số lượng * Đơn giá của một dòng
function capNhatTong(tr) {
  const sl = tr.querySelector(".sl");
  const dg = tr.querySelector(".dg");
  const tong = tr.querySelector(".tong");
  const a = Number(sl.value.trim());
  const b = Number(dg.value.trim());

  const hopLe = function (input, v) {
    const ok = input.value.trim() !== "" && !isNaN(v) && v >= 0;
    input.classList.toggle("invalid", !ok);
    return ok;
  };
  const okA = hopLe(sl, a);
  const okB = hopLe(dg, b);
  tong.value = okA && okB ? a * b : "";
}

document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.querySelector("#bang tbody");

  // Ủy quyền sự kiện: xóa dòng khi bấm nút "Xóa"
  tbody.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-xoa")) {
      e.target.closest("tr").remove();
    }
  });

  // Tự tính lại tổng khi sửa số lượng / đơn giá
  tbody.addEventListener("input", function (e) {
    if (e.target.classList.contains("sl") || e.target.classList.contains("dg")) {
      capNhatTong(e.target.closest("tr"));
    }
  });
});
