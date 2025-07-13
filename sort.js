(function () {
  const table = document.querySelector('table.list_table');
  if (!table) return;

  const tbody = table.querySelector('tbody');
  if (!tbody) return;

    // 並び替え関数
  const sortTable = () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    if (rows.length <= 1) return; // データ行がなければ何もしない
    const header = rows[0];
     const dataRows = rows.slice(1);

    const sortedRows = dataRows.sort((a, b) => {
      const aText = a.cells[0]?.innerText.trim() || '';
      const bText = b.cells[0]?.innerText.trim() || '';
      return aText.localeCompare(bText, 'ja');
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
