// utils/csvReader.js
export function readCSV(url) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').map(row => row.split(','));
            const headers = rows[0]; // 获取表头
            const records = rows.slice(1).map(row => {
                const record = {};
                headers.forEach((header, index) => {
                    record[header] = row[index];
                });
                return record;
            });
            return records;
        });
}