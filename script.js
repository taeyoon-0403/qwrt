const button = document.getElementById("click-btn");
const resultText = document.getElementById("result-text");

// localStorage에서 카운트 불러오기, 없으면 0으로 시작
let count = localStorage.getItem("jiwooCount") || 0;

function updateText() {
  resultText.textContent = `지금까지 ${count}명의 사람들이 정지우가 븅슨인 걸 알아냈습니다!`;
}

// 버튼 누르면 카운트 증가
button.addEventListener("click", () => {
  count++;
  localStorage.setItem("jiwooCount", count);
  updateText();
});

// 페이지 처음 로드될 때 텍스트 반영
updateText();
