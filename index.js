const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

// 텍스트 추가 기능
const addText = () => {
  const text = inputBox.value.trim();
  if (!text) {
    alert('글을 입력해주세요');
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${text} <span>\u00d7</span>`;
  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
};

// 클릭 이벤트 처리: 체크 또는 삭제
listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveData();
});

// 로컬 스토리지에 데이터 저장
const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

// 로컬 스토리지에서 데이터 가져와서 보여주기
const showText = () => {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;
  }
};

// 이벤트 리스너 등록
addButton.addEventListener("click", addText);
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addText();
});

showText();