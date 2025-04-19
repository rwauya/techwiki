fetch('/data/products.json')
  .then(r => r.json())
  .then(data => {
    const body = document.getElementById('comp-body');
    data.slice(0,3).forEach(p => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${p.image}" width="40"> ${p.title}</td>
        <td>${p.boost}</td>
        <td>${p.memory}</td>
        <td>${p.price}</td>
        <td><a href="${p.link}" target="_blank">Buy</a></td>`;
      body.appendChild(row);
    });
  });