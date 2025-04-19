let pages = [];
let idx;
fetch('/index.json')
  .then(r => r.json())
  .then(data => {
    pages = data;
    idx = lunr(function() {
      this.ref('url');
      this.field('title');
      this.field('content');
      data.forEach(page => this.add(page));
    });
  });

document.getElementById('search-box').addEventListener('input', e => {
  const res = idx.search(e.target.value).slice(0,5);
  const out = document.getElementById('search-results');
  out.innerHTML = '';
  res.forEach(r => {
    const pg = pages.find(p => p.url === r.ref);
    const li = document.createElement('li');
    li.innerHTML = `<a href="${r.ref}">${pg.title}</a>`;
    out.appendChild(li);
  });
});