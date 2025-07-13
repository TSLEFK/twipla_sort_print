(function () {
  const table = document.querySelector('table');
  if (!table){
    console.log("Not found table");
    return;
  }

  const tbody = table.querySelector('tbody');
  if (!tbody) {
    console.log("Not found tbody");
    return;
  }

  const removeEmojis = (text) => text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');

  // 並び替え関数
  const sortTable = () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    if (rows.length <= 1) {
      console.log("No data rows to sort");
      return;
    }

    // ヘッダー行を取得して、データ行を分離
    const header = rows[0];
    const dataRows = rows.slice(1);

    // 2列目のテキストを取得して並び替え
    const sortedRows = dataRows.sort((a, b) => {
      const aNameText = a.cells[1]?.innerHTML.trim() || '';
      const bNameText = b.cells[1]?.innerHTML.trim() || '';
      console.log(aNameText)

      // <br>で分割。1つ目の要素がTwitter ID、2つ目が名前になっている
      const aSplitText = aNameText.split('<br>');
      const bSplitText = bNameText.split('<br>');
    
      const aText = aSplitText.length > 1 ? aSplitText[1].trim() : aSplitText[0].trim();
      const bText = bSplitText.length > 1 ? bSplitText[1].trim() : bSplitText[0].trim();

      // 絵文字を除外してソートさせる
      const aCleanedA = removeEmojis(aText);
      const aCleanedB = removeEmojis(bText);

      console.log(`Comparing: "${aCleanedA}" with "${aCleanedB}"`);
      return aCleanedA.localeCompare(aCleanedB, 'ja');
    });

    // 並び替え後に再配置（ヘッダーを先頭に、その後にソート済みデータ行）
    tbody.appendChild(header);
    sortedRows.forEach(row => tbody.appendChild(row));
  };

    // ボタンの作成
  const button = document.createElement('button');
  button.textContent = 'あいうえお順に並び替え';
  button.style.position = 'fixed';
  button.style.top = '10px';
  button.style.right = '10px';
  button.style.zIndex = '9999';
  button.style.padding = '10px 14px';
  button.style.background = '#1976d2';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.borderRadius = '6px';
  button.style.cursor = 'pointer';
  button.style.fontSize = '14px';
  button.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';

  // ボタンクリックで実行
  button.addEventListener('click', sortTable);

  // ページに追加
  document.body.appendChild(button);
})();
