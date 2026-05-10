export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Terjadi kesalahan — LAZISNU MWC Secang</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #f8fafc; color: #0f172a; padding: 24px;
  }
  .card {
    max-width: 480px; width: 100%; background: #fff; border: 1px solid #e2e8f0;
    border-radius: 16px; padding: 32px; text-align: center;
    box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.1);
  }
  h1 { font-size: 22px; margin: 0 0 8px; color: #15803d; }
  p { font-size: 15px; line-height: 1.55; color: #475569; margin: 0 0 20px; }
  .actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
  button, a {
    display: inline-block; padding: 10px 18px; border-radius: 8px; font-size: 14px;
    font-weight: 600; cursor: pointer; text-decoration: none; border: 1px solid transparent;
    transition: opacity 0.15s;
  }
  button:hover, a:hover { opacity: 0.9; }
  .primary { background: #15803d; color: #fff; }
  .secondary { background: #fff; color: #0f172a; border-color: #e2e8f0; }
</style>
</head>
<body>
  <div class="card">
    <h1>Terjadi kesalahan</h1>
    <p>Maaf, halaman ini sedang bermasalah. Silakan coba muat ulang atau kembali ke beranda.</p>
    <div class="actions">
      <button class="primary" onclick="location.reload()">Muat ulang</button>
      <a class="secondary" href="/">Beranda</a>
    </div>
  </div>
</body>
</html>`;
}
