// ================= LOGIN =================
function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "" || p === "") {
    alert("Username dan Password wajib diisi");
    return;
  }

  alert("Login berhasil");
  window.location = "index.html";
}

// ================= SIMPAN TRANSAKSI =================
function simpanTransaksi() {
  let nama = document.getElementById("nama").value;
  let buku = document.getElementById("buku").value;
  let jumlah = document.getElementById("jumlah").value;

  if (nama === "" || buku === "" || jumlah === "") {
    alert("Semua field wajib diisi");
    return;
  }

  let transaksi = {
    nama: nama,
    buku: buku,
    jumlah: jumlah,
    tanggal: new Date().toLocaleDateString("id-ID"),
    status: "Dipinjam",
  };

  let data = JSON.parse(localStorage.getItem("transaksi")) || [];
  data.push(transaksi);
  localStorage.setItem("transaksi", JSON.stringify(data));

  alert("Transaksi berhasil disimpan");

  // reset form
  document.getElementById("nama").value = "";
  document.getElementById("buku").value = "";
  document.getElementById("jumlah").value = "";
}

// ================= TAMPILKAN DATA =================
function tampilkanTransaksi() {
  let data = JSON.parse(localStorage.getItem("transaksi")) || [];
  let tbody = document.getElementById("dataTransaksi");

  tbody.innerHTML = "";

  data.forEach((t, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${t.nama}</td>
        <td>${t.buku}</td>
        <td>${t.jumlah}</td>
        <td>${t.tanggal}</td>
        <td><span class="badge bg-success">${t.status}</span></td>
      </tr>
    `;
  });
}
