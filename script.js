const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addText() {
  if (inputBox.value === "") {
    alert('글을 입력해주세요');
  } else {
    // 등록
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // 삭제
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }
  inputBox.value = "";
  saveData();
}

// 체크 활성
listContainer.addEventListener('click', function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();

  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();

  }
}, false);


// 로컬 데이터 저장 

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showText() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showText();