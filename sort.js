(function () {
  const table = document.querySelector('table.list_table');
  if (!table) return;

  const tbody = table.querySelector('tbody');
  if (!tbody) return;

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
})();
