"use strict";

function readNumbers() {
  const s1 = document.getElementById("num1").value.trim();
  const s2 = document.getElementById("num2").value.trim();
  const a = Number(s1);
  const b = Number(s2);
  if (s1 === "" || s2 === "" || !Number.isInteger(a) || !Number.isInteger(b)) {
    return null;
  }
  return { a, b };
}

function showResult(text, isError) {
  const out = document.getElementById("result");
  out.textContent = text;
  out.classList.toggle("error", Boolean(isError));
}

function multiply() {
  const nums = readNumbers();
  if (!nums) { showResult("Vui lòng nhập hai số nguyên hợp lệ!", true); return; }
  showResult(nums.a * nums.b, false);
}

function divide() {
  const nums = readNumbers();
  if (!nums) { showResult("Vui lòng nhập hai số nguyên hợp lệ!", true); return; }
  if (nums.b === 0) { showResult("Không thể chia cho 0!", true); return; }
  showResult(nums.a / nums.b, false);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnMultiply").addEventListener("click", multiply);
  document.getElementById("btnDivide").addEventListener("click", divide);
});
