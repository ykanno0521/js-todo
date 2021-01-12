import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createFromIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createFromIncompleteList = (text) => {
  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liを生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(text);

    // buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（完了リスト）から削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentElement.firstElementChild.innerText;

      createFromIncompleteList(text);
    });

    // divタグ子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // console.log(addTarget);

    // 完了リストに追加する
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
