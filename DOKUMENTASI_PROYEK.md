# Dokumentasi Proyek Procurement MVP

Dokumen ini menjadi referensi utama proyek dan menggantikan dokumen markdown terpisah untuk alur, approval, role, modul, desain database, dan plan CI/CD.

## Daftar Isi

- [Ringkasan Sistem](#ringkasan-sistem)
- [Scope MVP](#scope-mvp)
- [Aktor Utama](#aktor-utama)
- [Daftar Modul dan Halaman](#daftar-modul-dan-halaman)
- [Alur Input dan Dampak Antar Menu](#alur-input-dan-dampak-antar-menu)
- [Approval Matrix](#approval-matrix)
- [Role dan Permission](#role-dan-permission)
- [Klasifikasi Status](#klasifikasi-status)
- [Desain Database](#desain-database)
- [Plan CI/CD](#plan-cicd)
- [Prioritas Lanjutan](#prioritas-lanjutan)
- [Artefak Teknis yang Tetap Terpisah](#artefak-teknis-yang-tetap-terpisah)

### Detail Status

- [Master dan Approval](#1-master-dan-approval)
- [Pembelian Barang dan Jasa](#2-pembelian-barang-dan-jasa)
- [Payment dan Tagihan](#3-payment-dan-tagihan)
- [FEAB, Kasbon, dan Reimbursement](#4-feab-kasbon-dan-reimbursement)

## Ringkasan Sistem

Sistem procurement ini ditujukan untuk mendigitalisasi pembelian barang non-dagang dan jasa, dari pengajuan sampai pembayaran dan penutupan transaksi. Cakupan yang sudah dipetakan di repo meliputi:

- pembelian barang dan jasa
- tagihan
- FEAB
- kasbon
- reimbursement
- CI/CD dasar untuk frontend dan backend

## Scope MVP

- Pengajuan barang dan jasa
- Approval divisi
- Persetujuan Kepala Akunting dan klasifikasi aset atau non-aset
- Procurement, vendor, dan penawaran
- Approval Kepala Purchasing
- PO dan lampiran order
- Payment prepaid dan payment setelah realisasi
- Penerimaan barang, retur, dan aset
- Laporan jasa
- Tagihan, FEAB, kasbon, dan reimbursement pada level desain data
- Arsip dan histori transaksi


## Aktor Utama

Nama aktor berikut adalah profil bisnis awal. Otorisasi implementasi tetap berdasarkan `kode_akses`, sedangkan scope Kepala Divisi berdasarkan penugasan pada master divisi.

| Aktor | Peran inti |
|---|---|
| `Pemohon / GA` | Membuat pengajuan dan memantau statusnya |
| `Kepala Divisi` | Approval awal kebutuhan divisi |
| `Akunting` | Administrasi dokumen dan kontrol payment |
| `Kepala Akunting` | Approval akhir pengajuan, klasifikasi aset, dan approval payment |
| `Purchasing` | Procurement, vendor, penawaran, order, penerimaan, dan retur |
| `Kepala Purchasing` | Approval hasil penawaran vendor |
| `Direktur` | Approval payment di atas threshold |
| `Finance / Kasir` | Menjalankan pembayaran dan menyimpan bukti bayar |
| `Admin Asset` | Melengkapi data aset dari barang yang sudah diterima valid |
| `Admin` | Akses administratif penuh |


### Aturan utama

- Pengajuan hanya memilih satu jalur utama: `barang` atau `jasa`.
- Barang boleh dipilih dari master atau diinput sebagai usulan pada item yang sama.
- Usulan barang tidak dibuat di tabel terpisah; statusnya dibedakan di data barang.
- Jika pengajuan ditolak, pemohon harus membuat pengajuan baru. Pengajuan yang ditolak tidak bisa diperbaiki lalu disubmit ulang.
- Jasa wajib punya uraian kerja dan output yang jelas.
- Vendor dan harga hanya dikelola `Purchasing`.
- Saat input penawaran, `Purchasing` mengisi `mata uang` dan `kurs` (opsional).
- Untuk pembelian barang, `PO` dibuat otomatis oleh sistem dari penawaran yang disetujui dan item vendor yang dipilih.
- Untuk pembelian jasa, tidak ada input penawaran dan tidak ada `PO`; setelah approval selesai sistem membuat `penyelesaian_jasa_head`, lalu user mencatat log pengerjaan pada `penyelesaian_jasa_detail`.
- Semua nomor transaksi dibuat otomatis oleh backend dan tidak diinput manual user. Ini mencakup `no_pengajuan`, `no_penawaran`, `no_po`, `no_penerimaan`, `no_retur`, `no_jasa`, `no_tagihan`, nomor payment, nomor FEAB, nomor kasbon, nomor realisasi, nomor reimbursement, nomor pengembalian kasbon, nomor approval, dan nomor lampiran/dokumen sistem.
- Satu `PO` barang hanya mengacu ke satu `penawaran_vendor`. Karena `purchase_order.no_penawaran` bersifat unique, satu penawaran barang terpilih hanya dapat menghasilkan satu `PO`.
- Satu pengajuan barang tetap dapat menghasilkan banyak `PO` jika memiliki beberapa baris `penawaran_vendor` terpilih.
- Klasifikasi aset atau non-aset hanya diputuskan `Kepala Akunting`.
- Payment di atas `Rp30.000.000` memerlukan approval `Direktur`.
- Aset hanya dibentuk dari barang yang sudah diterima valid.
- Transaksi dianggap selesai jika cabang proses selesai, pembayaran tercatat, dan bukti bayar tersimpan.

## Daftar Modul dan Halaman

Bagian ini merinci group modul dan sub halaman yang ada di sistem. Setiap sub halaman ditulis bersama fitur intinya agar lebih mudah dibaca sebagai peta halaman.

### 1. Dashboard

| Sub Halaman | Fitur |
|---|---|
| `Dashboard Utama` | Ringkasan pengajuan, procurement, payment, transaksi tertahan, dan shortcut aksi cepat |
| `Task Inbox` | Daftar tugas per role, notifikasi approval, reminder dokumen, dan filter tugas aktif |

### 2. Pengajuan Pembelian

| Sub Halaman | Fitur |
|---|---|
| `Pengajuan Pembelian Barang` | Input header pengajuan dan detail barang melalui tabel item: barang master atau barang usulan, qty, satuan, estimasi harga, lampiran, catatan, dan prioritas |
| `Pengajuan Pembelian Jasa` | Input pengajuan jasa terpisah dari barang: no pengajuan, tanggal otomatis, divisi, jenis pengadaan jasa, kebutuhan jasa, lampiran multi dokumen beserta format, serta detail uraian pekerjaan, biaya, vendor/penyedia, lokasi, dan keterangan |

### 3. Master Data

| Sub Halaman | Fitur |
|---|---|
| `Master Barang` | Pencarian barang, lihat status barang aktif, usulan, atau nonaktif, cek klasifikasi aset, dan validasi duplikasi |
| `Master Vendor` | Daftar vendor, data kontak vendor, NPWP, alamat, dan URL vendor |
| `Master Divisi` | Kelola data divisi, kepala divisi, dan status divisi |
| `Master User dan Role` | Lihat dan ubah user, tetapkan satu role per user, serta atur banyak akses pada setiap role |

### 4. Review dan Approval

| Sub Halaman | Fitur |
|---|---|
| `Approval Kepala Divisi` | Review kebutuhan, approve, tolak, dan beri catatan keputusan |
| `Approval Kepala Akunting` | Approve pengajuan, tetapkan klasifikasi aset atau non-aset, atau tolak |
| `Approval Kepala Purchasing` | Review perbandingan vendor, approve penawaran, atau minta penyusunan ulang sourcing |
| `Approval Direktur` | Approve payment di atas threshold, lihat ringkasan transaksi, dan tolak bila perlu |

### 5. Penawaran dan PO 

| Sub Halaman | Fitur |
|---|---|
| `Penawaran` | Input perbandingan penawaran |
| `PO` | PO dibuat sistem dari penawaran yang disetujui, lalu dipantau dan disetujui sesuai akses |


### 6. Penerimaan dan Retur Barang

| Sub Halaman | Fitur |
|---|---|
| `Penerimaan Barang` | Pilih item PO, isi qty diterima, qty baik, dan catatan per item; qty dikirim mengikuti qty PO, sedangkan rusak, kurang, dan diproses retur dihitung sistem |
| `Retur Barang` | Retur otomatis terbentuk dari penerimaan bermasalah, purchasing melengkapi dokumen pendukung, lalu approval Kadiv dan Kepala Akunting sebelum penerimaan pengganti |

### 7. Pelaksanaan Jasa

| Sub Halaman | Fitur |
|---|---|
| `Monitoring Pelaksanaan Jasa` | Pantau status pekerjaan jasa, jadwal pelaksanaan, dan histori aktivitas |

### 9. AP dan Payment

| Sub Halaman | Fitur |
|---|---|
| `Anggaran Pembayaran` | Buat payment request, isi nominal, jatuh tempo, sumber pembayaran, dan submit approval |
| `Pembayaran` | Input metode bayar, tanggal bayar, referensi bank, nominal realisasi, dan upload bukti bayar |

### 10. Aset

| Sub Halaman | Fitur |
|---|---|
| `Daftar Item Aset` | Tampilkan barang hasil pembelian yang masuk klasifikasi aset |
| `Aktivasi Aset` | Lengkapi kode aset, nama aset, nilai perolehan, tanggal aktivasi, dan admin aset |

### 11. Laporan dan Arsip

| Sub Halaman | Fitur |
|---|---|
| `Histori Transaksi` | Lihat perjalanan status end-to-end dari pengajuan sampai penutupan |
| `Arsip Dokumen` | Simpan dan unduh dokumen procurement, payment, penerimaan, dan jasa |
| `Laporan Ringkas` | Rekap dasar procurement, payment, outstanding approval, dan transaksi selesai |

### 12. Tagihan

| Sub Halaman | Fitur |
|---|---|
| `Tagihan` | Input tagihan vendor atau non-vendor, nominal, jatuh tempo, dan deskripsi tagihan |

### 13. FEAB, Kasbon, dan Reimbursement

| Sub Halaman | Fitur |
|---|---|
| `FEAB` | Buat pengajuan anggaran biaya, isi tujuan biaya, detail estimasi, dan kebutuhan kasbon |
| `Kasbon` | Pencairan kasbon, data penerima, nominal, metode pembayaran, dan status serah terima |
| `Realisasi Biaya` | Input realisasi biaya, detail pengeluaran, selisih realisasi, dan bukti pengeluaran |
| `Reimbursement` | Buat pengajuan reimbursement dari realisasi biaya dan submit ke AP |
| `Pengembalian Kasbon` | Catat pengembalian sisa kasbon ke kasir dan arsip bukti terima |
| `Payment Selisih` | Proses pembayaran untuk reimbursement atau selisih kurang kasbon |

## Alur Input dan Dampak Antar Menu

Bagian ini menjelaskan alur input utama yang wajib tercermin di UI, API, dummy data, dan laporan. Prinsip umumnya: halaman utama hanya menampilkan tabel head, sedangkan input dan detail turunan dibuka melalui modal atau halaman detail agar user fokus pada satu transaksi.

### 0. Penomoran Transaksi

1. Semua nomor transaksi dibuat oleh backend pada saat record dibuat atau saat proses otomatis terjadi.
2. Nomor transaksi tampil sebagai read-only di UI setelah backend mengembalikan response create.
3. User tidak boleh menginput, mengubah, atau mengirim nomor transaksi sebagai sumber kebenaran.
4. Jika UI butuh preview nomor, preview hanya bersifat informasi dan backend tetap melakukan final generate saat submit.
5. Backend wajib menjamin uniqueness dengan constraint database atau sequence per jenis transaksi.
6. Format nomor dapat memakai pola bisnis, misalnya tahun, modul, divisi, bulan, dan nomor urut, tetapi implementasi urutan tetap berada di backend.
7. Untuk transaksi yang dibuat otomatis dari proses lain, nomor dibuat pada trigger proses tersebut, misalnya `no_po` saat penawaran barang disetujui dan `no_jasa` saat approval pengajuan jasa selesai.

Nomor yang wajib auto-generate:

- `no_pengajuan` untuk pengajuan barang dan jasa.
- `no_penawaran` untuk penawaran vendor barang.
- `no_po` untuk PO barang otomatis.
- `no_penerimaan` untuk penerimaan barang.
- `no_retur` untuk retur barang otomatis dari penerimaan bermasalah.
- `no_jasa` untuk monitoring atau penyelesaian jasa.
- `no_tagihan`, nomor permintaan pembayaran, dan nomor transaksi pembayaran.
- Nomor FEAB, kasbon, realisasi biaya, reimbursement, dan pengembalian kasbon.
- `no_approval` dan nomor lampiran/dokumen sistem seperti `lampiran_dokumen`.

### 1. Input Pengajuan Pembelian

#### Pengajuan barang

1. User membuka menu `Pengajuan > Barang`.
2. Sistem menampilkan tabel pengajuan sebagai halaman utama.
3. User klik `Tambah Pengajuan`.
4. Backend membuat `no_pengajuan` otomatis saat pengajuan disimpan. Jika UI menampilkan preview nomor, preview bersifat read-only dan bukan input final.
5. Tanggal pengajuan diisi otomatis oleh backend memakai tanggal hari ini.
6. Divisi diambil otomatis dari user aktif atau scope user.
7. User menambah item melalui tombol `Tambah Item`.
8. Saat memilih barang, sistem membuka modal referensi master barang yang bisa dicari.
9. Jika barang sudah ada di master, field kode, kategori, satuan, merk, tipe, dan klasifikasi terisi otomatis; user hanya mengisi qty, estimasi harga, lampiran, dan catatan.
10. Jika barang belum ada, user memakai pintasan tambah barang baru; setelah disimpan, barang berstatus `usulan` dan langsung mengisi item pengajuan.
11. Item pengajuan ditampilkan dalam tabel detail yang dapat diedit atau dihapus selama pengajuan belum diputuskan Kepala Divisi.
12. Saat pengajuan disimpan, sistem membuat `pengajuan_pembelian_head`, detail barang, dan antrean `approval_transaksi` Kepala Divisi.

Dampak ke menu lain:

- `Master Barang`: bertambah data barang jika user membuat barang usulan dari pintasan.
- `Approval Kepala Divisi`: pengajuan masuk antrean approval tanpa tombol submit status tambahan.
- `Approval Kepala Akunting`: menerima pengajuan setelah Kepala Divisi approve, termasuk kebutuhan klasifikasi aset atau non-aset.
- `Approval Kepala Purchasing`: menerima pengajuan setelah Kepala Akunting approve.
- `Penawaran`: pengajuan hanya bisa dipilih setelah status menjadi `siap_procurement`.
- `Pembelian`: nomor pengajuan akan menjadi referensi monitoring setelah PO dan penerimaan terjadi.
- `Laporan dan Arsip`: histori pengajuan dan lampiran tersimpan sebagai jejak transaksi.

#### Pengajuan jasa

1. User membuka menu `Pengajuan > Jasa`.
2. Halaman utama hanya menampilkan tabel data pengajuan jasa.
3. User klik `Tambah Pengajuan`, lalu input dilakukan di modal.
4. Backend membuat `no_pengajuan` otomatis saat pengajuan jasa disimpan. Jika UI menampilkan preview nomor, preview bersifat read-only dan bukan input final.
5. Backend mengisi tanggal pengajuan memakai tanggal hari ini.
6. Backend mengambil divisi dari user aktif atau scope akses user.
7. Frontend mengirim `jenis_pengajuan = jasa`; user tidak perlu memilih tipe barang atau jasa lagi.
8. User mengisi `prioritas`, `jenis_pengadaan` jasa (`rutin` atau `tidak_rutin`), `max_tgl_beli`, `alasan`, dan `kebutuhan_jasa`.
9. Lampiran jasa diinput sebagai multi dokumen pada header pengajuan, disimpan di `pengajuan_pembelian_head.lampiran` dalam bentuk array metadata dokumen.
10. User menambah detail jasa di modal detail berisi `uraian_jasa`, `biaya`, `vendor_penyedia` jika sudah diketahui, `lokasi_pekerjaan`, dan `keterangan`.
11. Detail jasa tidak memakai `barang`, `kode_barang`, `qty`, `satuan`, `estimasi_harga`, `lampiran barang`, atau `klasifikasi aset`.
12. Selama status masih `menunggu_persetujuan_divisi`, pemohon masih boleh mengubah header dan detail jasa.
13. Setelah Kepala Divisi memberi keputusan, header dan detail jasa dikunci dari pemohon.
14. Saat pengajuan disimpan, backend membuat `pengajuan_pembelian_head`, `pengajuan_pembelian_jasa_detail`, dan antrean `approval_transaksi` tahap pertama dalam satu transaksi database.
15. Tidak ada tombol submit status terpisah; record yang sudah disimpan otomatis masuk antrean approval.

Dampak ke menu lain:

- `Approval`: pengajuan masuk antrean Kepala Divisi, lalu Kepala Akunting, lalu Kepala Purchasing sesuai role akses dan aturan skip approval untuk user yang memiliki akses tahap berikutnya.
- `Penawaran`: pengajuan jasa tidak muncul sebagai pilihan penawaran karena jasa tidak memakai input penawaran vendor.
- `PO`: pengajuan jasa tidak membuat `purchase_order`.
- `Monitoring Pelaksanaan Jasa`: setelah semua approval selesai, backend otomatis membuat `penyelesaian_jasa_head` dengan status `berjalan`.
- `Tagihan`: jasa baru bisa menjadi referensi tagihan setelah `penyelesaian_jasa_head.status = selesai`.
- `Payment`: payment memakai tagihan atau referensi penyelesaian jasa yang sudah selesai, bukan PO.
- `Laporan dan Arsip`: menyimpan histori pengajuan jasa, lampiran header, approval, dan log pengerjaan jasa.

Catatan backend untuk pengajuan jasa:

- Validasi `jenis_pengajuan` wajib `jasa` untuk endpoint pengajuan jasa.
- `no_pengajuan` wajib dibuat backend dan unik.
- `kode_divisi` dan `tgl_pengajuan` tidak boleh dipercaya dari input user jika backend sudah memiliki konteks user aktif.
- Minimal satu baris `pengajuan_pembelian_jasa_detail` wajib ada.
- Total estimasi jasa untuk laporan dapat dihitung dari `SUM(pengajuan_pembelian_jasa_detail.biaya)`.
- File aktual dapat disimpan ke storage, sedangkan metadata file tetap direferensikan lewat `lampiran` header atau `lampiran_dokumen`.
- Jika final approval berhasil, proses pembuatan `penyelesaian_jasa_head` harus idempotent berdasarkan unique key `no_pengajuan`.

### 2. Input Penawaran

1. Purchasing membuka menu `Procurement > Penawaran`.
2. Halaman utama menampilkan tabel penawaran per nomor pengajuan.
3. Purchasing klik `Tambah Penawaran`.
4. User memilih nomor pengajuan dari modal referensi yang hanya menampilkan ringkasan pengajuan, bukan item detail.
5. Sistem mengisi no pengajuan dan daftar item pengajuan yang boleh ditawarkan.
6. Backend membuat `no_penawaran` otomatis saat penawaran disimpan. Jika UI menampilkan preview nomor, preview bersifat read-only dan bukan input final.
7. User menambah item penawaran dengan memilih item dari detail pengajuan terkait.
8. Untuk vendor atau toko, user dapat memilih dari master vendor, menambah vendor baru ke master, atau memakai vendor sekali pakai pada transaksi penawaran.
9. Kontak person atau `up` disimpan sebagai snapshot di penawaran, bukan di master vendor.
10. Field penawaran berisi vendor, up, harga, ongkir, diskon, metode pembayaran dari master kategori pembayaran, keterangan metode pembayaran, kategori pengiriman enum `loco`, `franco`, atau `tidak_ada`, pengiriman, estimasi datang dalam teks hari, dan lampiran quotation bila ada.
11. Satu item pengajuan boleh memiliki lebih dari satu penawaran vendor.
12. Tabel detail penawaran digroup berdasarkan item pengajuan agar perbandingan vendor mudah dibaca.
13. Kepala Purchasing memilih satu vendor untuk setiap item barang, lalu approve penawaran.
14. Jika pengajuan adalah barang, sistem menandai penawaran terpilih sebagai `disetujui`, penawaran lain sebagai `ditolak`, dan membuat PO otomatis.
15. Pengajuan jasa tidak masuk alur input penawaran; jasa langsung masuk ke pengerjaan setelah approval selesai.

Dampak ke menu lain:

- `PO`: record `purchase_order` hanya terbentuk otomatis untuk penawaran barang yang disetujui.
- `Pembelian`: nilai vendor, item, harga, metode pembayaran, dan histori sourcing menjadi dasar monitoring transaksi.
- `Penerimaan Barang`: hanya item PO barang yang sudah terbentuk dan aktif yang bisa dipilih saat barang datang.
- `Monitoring Pelaksanaan Jasa`: tidak memakai penawaran; record `penyelesaian_jasa_head` dibuat otomatis dari pengajuan jasa yang sudah selesai approval.
- `Master Vendor`: bertambah jika purchasing memilih opsi tambah vendor baru.
- `Kategori Pembayaran`: dipakai sebagai sumber dropdown metode pembayaran pada penawaran.
- `Laporan dan Arsip`: quotation, keputusan vendor, PO barang, dan penyelesaian jasa masuk histori procurement.

### 3. PO Otomatis dari Penawaran Barang

1. PO tidak dibuat melalui tombol tambah manual.
2. Sistem membuat PO saat Kepala Purchasing menyetujui penawaran barang.
3. Data PO memuat `id_po`, `no_po` dari sistem, `no_penawaran`, tanggal PO, status, catatan, pembuat, dan timestamp.
4. Detail bisnis PO dibaca dari relasi `purchase_order.no_penawaran -> penawaran_vendor.no_penawaran`, termasuk vendor, qty, harga, ongkir, diskon, metode pembayaran, pengiriman, dan estimasi datang.
5. Jika satu pengajuan perlu menghasilkan beberapa PO, sistem harus memilih beberapa baris `penawaran_vendor` terpilih. Satu baris penawaran tidak dipakai ulang untuk banyak PO.

Dampak ke menu lain:

- `PO`: halaman dipakai untuk monitoring dan detail, bukan input ulang.
- `Penerimaan Barang`: membaca sisa qty PO sebagai daftar barang yang bisa diterima.
- `Pembelian`: membaca PO dan penerimaan baik sebagai ringkasan pembelian aktual.
- `Payment`: menggunakan PO atau tagihan terkait sebagai sumber outstanding.

### 4. Pengerjaan Jasa

1. Pengajuan jasa yang sudah selesai approval langsung masuk ke pengerjaan jasa.
2. Tidak ada input penawaran jasa dan tidak ada PO jasa.
3. Setelah approval terakhir berhasil, backend membuat `penyelesaian_jasa_head` dari pengajuan jasa approved dengan status awal `berjalan`.
4. `penyelesaian_jasa_head.no_pengajuan` bersifat unique, sehingga satu pengajuan jasa hanya punya satu header pengerjaan jasa.
5. User membuka `Monitoring Pelaksanaan Jasa` untuk melihat header jasa dan riwayat log.
6. User klik `Tambah Log` untuk menambahkan aktivitas pengerjaan pada `penyelesaian_jasa_detail`.
7. Log pengerjaan memuat `tgl_aktivitas`, `uraian_pekerjaan`, `foto_aktivitas`, `catatan`, `status`, dan `user_input`.
8. Status log hanya `berjalan` atau `selesai`.
9. Log yang sudah `selesai` tidak boleh diubah lagi.
10. Button `Update` hanya memperbarui detail log yang masih boleh diubah.
11. Button `Selesaikan Pengerjaan` menutup seluruh aktivitas jasa: backend mengubah semua log yang masih `berjalan` menjadi `selesai`, lalu mengubah `penyelesaian_jasa_head.status` menjadi `selesai`.
12. Setelah `penyelesaian_jasa_head.status = selesai`, header dan detail log dikunci dari perubahan operasional.
13. Setelah selesai, jasa dapat masuk finance process.

Dampak ke menu lain:

- `Monitoring Pelaksanaan Jasa`: menjadi halaman utama untuk melihat status pekerjaan dan riwayat aktivitas jasa.
- `Tagihan`: tagihan jasa dibuat berdasarkan `penyelesaian_jasa_head` yang sudah `selesai`.
- `Payment`: finance memproses pembayaran berdasarkan tagihan jasa, bukan berdasarkan PO.
- `Laporan dan Arsip`: histori aktivitas jasa, foto aktivitas, lampiran pengajuan, dan histori approval masuk arsip.
- `Pengajuan Jasa`: status pengajuan tetap menjadi sumber asal transaksi, sedangkan status pelaksanaan dibaca dari `penyelesaian_jasa_head`.

Catatan backend untuk pengerjaan jasa:

- Trigger pembuatan `penyelesaian_jasa_head` berjalan setelah approval pengajuan jasa final dan harus idempotent.
- Nomor jasa dibuat sistem, misalnya `JSA-Tahun-NoUrut`, dan tidak diinput user.
- `tgl_mulai` default tanggal saat record pengerjaan dibuat.
- Insert log wajib memakai `no_urut` berurutan per `no_jasa`.
- Update status log hanya boleh dari `berjalan` ke `selesai`; tidak ada status revisi, review, atau pemeriksaan tambahan.
- Endpoint `Selesaikan Pengerjaan` harus atomic: apply semua perubahan log, update header, dan menolak request jika header sudah `selesai`.
- Finance hanya membaca jasa yang sudah selesai agar tidak memproses pekerjaan yang masih berjalan.

### 5. Input Penerimaan Barang

1. Purchasing membuka menu `Terima dan Retur > Penerimaan`.
2. Sistem menampilkan tabel penerimaan sebagai histori input.
3. User klik tambah penerimaan.
4. Nomor penerimaan dibuat otomatis oleh sistem.
5. Tanggal terima default hari ini dan dibuat backend.
6. User memilih barang yang datang dari modal kecil berisi PO yang join ke `penawaran_vendor` dan masih punya saldo qty.
7. Setelah item dipilih, sistem membuka modal input ringkas.
8. User mengisi qty diterima, qty baik, dan catatan per barang.
9. Qty dikirim tidak diinput user; nilainya mengikuti qty PO atau sisa qty PO yang dipilih.
10. Sistem menghitung `qty_rusak = qty_diterima - qty_baik`.
11. Sistem menghitung `qty_kurang = qty_dikirim - qty_diterima`.
12. Sistem menghitung `qty_diproses_retur = qty_rusak + qty_kurang`.
13. Satu proses input penerimaan bisa memilih banyak barang, tetapi setiap baris penerimaan disimpan dengan composite key `(no_penerimaan, no_urut)`.
14. Jika ada barang bermasalah, sistem otomatis membuat data retur untuk PO terkait.

Dampak ke menu lain:

- `Pembelian`: hanya qty baik yang masuk ke monitoring pembelian aktual.
- `Retur Barang`: item dengan `qty_diproses_retur > 0` otomatis membentuk retur, satu nomor retur per PO.
- `PO`: saldo qty PO berkurang sesuai barang yang diterima baik dan/atau sedang diproses retur.
- `Aset`: item barang yang diterima baik dan diklasifikasikan aset dapat masuk antrean aktivasi aset.
- `Tagihan dan Payment`: dokumen penerimaan menjadi bukti pendukung sebelum pembayaran atau pelunasan.
- `Laporan dan Arsip`: surat jalan, foto, catatan penerimaan, dan histori status disimpan sebagai arsip transaksi.

## Approval Matrix

| Tahap | Pemeriksa / approver | Kondisi | Hasil jika setuju | Hasil jika tidak setuju |
|---|---|---|---|---|
| Pengajuan awal | `Kepala Divisi` | Semua pengajuan barang dan jasa | Lanjut ke approval Kepala Akunting | Ditolak, lalu pemohon buat pengajuan baru bila masih diperlukan |
| Approval akunting | `Kepala Akunting` | Semua pengajuan yang lolos divisi | Lanjut ke approval Kepala Purchasing | Ditolak, lalu pemohon buat pengajuan baru bila masih diperlukan |
| Approval pengajuan purchasing | `Kepala Purchasing` | Pengajuan yang sudah lolos akunting | Lanjut ke procurement | Ditolak, lalu pemohon buat pengajuan baru bila masih diperlukan |
| Approval penawaran | `Kepala Purchasing` | Hasil vendor dan penawaran | Lanjut ke order pembelian | Kembali ke penyusunan penawaran |
| Approval payment | `Kepala Akunting` | Semua payment request | Lanjut ke cek threshold direktur | Ditolak atau ditahan sampai dokumen dan keputusan lengkap |
| Approval payment threshold | `Direktur` | Hanya jika nilai payment di atas threshold | Lanjut ke pembayaran | Ditolak atau ditahan sesuai keputusan direktur |

## Role dan Permission

Otorisasi memakai RBAC yang dapat dikonfigurasi:

- Satu `user` wajib memiliki tepat satu `role` melalui `user.kode_role`.
- Satu `role` dapat memiliki banyak `akses` melalui `role_akses`.
- Hak akses diperiksa memakai `kode_akses`, bukan nama role.
- Perubahan akses pada role berlaku ke seluruh user yang memakai role tersebut.
- Penugasan Kepala Divisi disimpan pada `divisi.kepala_divisi` dan tidak menambah role kedua kepada user.
- Aksi yang memiliki scope membutuhkan permission dan kecocokan penugasan. Approval divisi, misalnya, membutuhkan akses `pengajuan.approve_divisi` serta user aktif harus menjadi kepala divisi pengajuan tersebut.
- Jika satu role memiliki akses untuk beberapa tahap approval berurutan, sistem boleh melewati tahap berikutnya yang juga dapat diputuskan oleh role yang sama. Contoh: role `Kepala Akunting` yang juga diberi akses Kepala Divisi tidak perlu approve dua kali pada satu pengajuan yang sama.

Kasus rangkap jabatan: user Susi dapat memiliki satu role `Kepala Akunting`, ditunjuk sebagai `divisi.kepala_divisi` pada Divisi Akunting, lalu role tersebut diberi akses `pengajuan.approve_divisi` dan `pengajuan.approve_akunting`. Role `Kepala Divisi` biasa cukup memiliki `pengajuan.approve_divisi`.

| Kelompok | Contoh kode akses |
|---|---|
| Master akses | `master.procurement.view`, `master.procurement.manage`, `master.organization.view`, `master.organization.manage`, `role.manage_access` |
| Pengajuan | `pengajuan.view`, `pengajuan.create`, `pengajuan.update_own` |
| Approval pengajuan | `pengajuan.approve_divisi`, `pengajuan.approve_akunting`, `procurement.approve` untuk tahap Kepala Purchasing |
| Procurement | `procurement.view`, `procurement.manage`, `procurement.approve` |
| Penerimaan | `penerimaan.manage`, `retur.view`, `retur.manage`, `retur.approve` |
| Payment | `payment.view`, `payment.manage`, `payment.approve` |
| Aset dan laporan | `aset.manage`, `laporan.view` |

## Klasifikasi Status

Bagian ini mengikuti enum aktif pada `DATABASE_DESIGN.dbml`. Status hanya dipakai jika mengubah antrean kerja, hak akses, keputusan, kondisi transaksi, atau hasil akhir.

- Penyimpanan data langsung menempatkan transaksi pada antrean `menunggu_*` yang relevan tanpa langkah submit status terpisah.
- `pending`, `approved`, dan `rejected` hanya dipakai pada histori `approval_transaksi`.
- `ditolak`, `gagal`, dan `dibatalkan` menandai hasil negatif atau penghentian proses.
- `selesai`, `terbayar`, `diarsipkan`, `diselesaikan`, dan `berhasil` menandai hasil akhir domain.

### 1. Master dan Approval

#### Status aktif

| Status | Arti ringkas |
|---|---|
| `aktif` | Data master atau user dapat dipakai dalam transaksi |
| `nonaktif` | Data master atau user tidak dipakai untuk transaksi baru |

#### Status barang

| Status | Arti ringkas |
|---|---|
| `usulan` | Barang masih berupa usulan dan belum menjadi master aktif penuh |
| `aktif` | Barang sudah valid dan dapat dipilih pada pengajuan baru |
| `nonaktif` | Barang disimpan sebagai histori tetapi tidak dipakai lagi |

#### Status persetujuan generik

| Status | Arti ringkas |
|---|---|
| `pending` | Approval belum diputuskan |
| `approved` | Tahap approval disetujui |
| `rejected` | Tahap approval ditolak |

### 2. Pembelian Barang dan Jasa

#### Status pengajuan

| Status | Arti ringkas |
|---|---|
| `menunggu_persetujuan_divisi` | Menunggu keputusan `Kepala Divisi` |
| `menunggu_persetujuan_kepala_akunting` | Menunggu keputusan `Kepala Akunting` |
| `menunggu_persetujuan_kepala_purchasing` | Menunggu keputusan `Kepala Purchasing` sebelum masuk procurement |
| `ditolak` | Pengajuan dihentikan dan pemohon harus membuat pengajuan baru bila masih dibutuhkan |
| `siap_procurement` | Pengajuan lolos approval dan siap diproses `Purchasing` |
| `dibatalkan` | Pengajuan dibatalkan oleh pihak berwenang |
| `selesai` | Seluruh siklus pengajuan terkait sudah ditutup |

#### Status procurement dan PO

| Status | Arti ringkas |
|---|---|
| `menunggu_persetujuan_purchasing` | Menunggu approval `Kepala Purchasing` |
| `disetujui` | Hasil procurement atau order siap dilanjutkan |
| `dibatalkan` | Procurement atau order dibatalkan |
| `retur` | Procurement atau order ada retur |
| `selesai` | Siklus procurement atau order selesai |

#### Status penawaran vendor

| Status | Arti ringkas |
|---|---|
| `menunggu_persetujuan_purchasing` | Penawaran tersimpan dan menunggu keputusan `Kepala Purchasing` |
| `disetujui` | Penawaran disetujui sebagai hasil sourcing |
| `ditolak` | Penawaran tidak dipakai |
| `dibatalkan` | Penawaran dibatalkan dari proses |

#### Status dokumen pembelian

| Status | Arti ringkas |
|---|---|
| `terbit` | Dokumen pembelian resmi sudah dibuat |
| `menunggu_pelaksanaan` | SPK atau dokumen jasa menunggu pelaksanaan |
| `menunggu_penerimaan` | PO barang menunggu penerimaan |
| `selesai` | Kewajiban pada dokumen pembelian sudah dipenuhi |
| `dibatalkan` | Dokumen pembelian dibatalkan |

#### Status item penerimaan

| Status | Arti ringkas |
|---|---|
| `diterima` | Item diterima sesuai |
| `diterima_sebagian` | Qty item belum terpenuhi penuh |
| `bermasalah` | Item butuh retur, penggantian, atau tindak lanjut |

Status item ditentukan sistem saat penerimaan disimpan berdasarkan selisih `qty_dikirim`, `qty_diterima`, dan `qty_baik`. `qty_dikirim` berasal dari qty PO/sisa PO yang dipilih, bukan input user. Sistem menghitung `qty_rusak = qty_diterima - qty_baik`, `qty_kurang = qty_dikirim - qty_diterima`, dan `qty_diproses_retur = qty_rusak + qty_kurang`.

#### Status retur

| Status | Arti ringkas |
|---|---|
| `menunggu_persetujuan_divisi` | Retur tersimpan dan menunggu keputusan Kepala Divisi |
| `menunggu_persetujuan_kepala_akunting` | Retur sudah disetujui Kepala Divisi dan menunggu Kepala Akunting |
| `siap_penerimaan` | Retur sudah disetujui dan barang pengganti boleh diinput sebagai penerimaan |
| `selesai` | Barang pengganti sudah diterima atau retur sudah tuntas |
| `dibatalkan` | Retur dibatalkan |

#### Status penyelesaian jasa

| Status | Arti ringkas |
|---|---|
| `berjalan` | Jasa sedang dalam pelaksanaan dan aktivitas dapat terus ditambahkan |
| `selesai` | Pekerjaan jasa dan administrasinya sudah lengkap |

#### Status aset

| Status | Arti ringkas |
|---|---|
| `menunggu_aktivasi` | Data aset menunggu kelengkapan dan aktivasi |
| `aktif` | Aset aktif dan siap dipakai |
| `nonaktif` | Aset tidak dipakai aktif tetapi tetap tercatat |
| `dibatalkan` | Pencatatan aset dibatalkan |

### 3. Payment dan Tagihan

#### Status tagihan

| Status | Arti ringkas |
|---|---|
| `menunggu_persetujuan_kepala_akunting` | Menunggu approval `Kepala Akunting` |
| `menunggu_persetujuan_direktur` | Menunggu approval `Direktur` bila melewati threshold |
| `siap_dibayar` | Tagihan sudah lengkap dan siap dibayar |
| `terbayar` | Tagihan sudah dibayarkan |
| `diarsipkan` | Tagihan ditutup dan diarsipkan |
| `ditolak` | Tagihan ditolak |

#### Status permintaan pembayaran

| Status | Arti ringkas |
|---|---|
| `menunggu_dokumen` | Dokumen pendukung masih belum lengkap |
| `menunggu_persetujuan_kepala_akunting` | Menunggu approval `Kepala Akunting` |
| `menunggu_persetujuan_direktur` | Menunggu approval direktur karena threshold nilai |
| `siap_dibayar` | Approval lengkap dan siap dieksekusi |
| `dibayar` | Pembayaran sudah dilakukan |
| `dibatalkan` | Permintaan pembayaran dibatalkan |
| `selesai` | Siklus permintaan pembayaran ditutup |

#### Status transaksi pembayaran

| Status | Arti ringkas |
|---|---|
| `berhasil` | Pembayaran berhasil dieksekusi |
| `gagal` | Pembayaran gagal dan perlu tindak lanjut |
| `dibatalkan` | Transaksi pembayaran dibatalkan |

### 4. FEAB, Kasbon, dan Reimbursement

#### Status FEAB

| Status | Arti ringkas |
|---|---|
| `menunggu_persetujuan_divisi` | Menunggu approval `Kepala Divisi` |
| `menunggu_persetujuan_kepala_akunting` | Menunggu approval `Kepala Akunting` |
| `disetujui` | FEAB disetujui |
| `ditolak` | FEAB ditolak |
| `direalisasikan` | FEAB sudah dipakai sebagai dasar realisasi biaya |
| `dibatalkan` | FEAB dibatalkan |
| `selesai` | Siklus FEAB sudah ditutup |

#### Status kasbon

| Status | Arti ringkas |
|---|---|
| `menunggu_pencairan` | Kasbon tersimpan dan menunggu pencairan |
| `dicairkan` | Dana kasbon sudah dikeluarkan |
| `diterima_pemohon` | Dana sudah diterima pemohon |
| `diselesaikan` | Siklus kasbon selesai |
| `dibatalkan` | Kasbon dibatalkan |

#### Status realisasi biaya

| Status | Arti ringkas |
|---|---|
| `menunggu_verifikasi` | Realisasi tersimpan dan menunggu verifikasi |
| `selesai` | Realisasi biaya selesai diproses |

#### Status reimbursement

| Status | Arti ringkas |
|---|---|
| `menunggu_persetujuan_kepala_akunting` | Menunggu approval `Kepala Akunting` |
| `menunggu_persetujuan_direktur` | Menunggu approval `Direktur` bila threshold terpenuhi |
| `siap_dibayar` | Reimbursement siap dibayar |
| `terbayar` | Reimbursement sudah dibayar |
| `diarsipkan` | Proses reimbursement ditutup |
| `ditolak` | Reimbursement ditolak |

#### Status pengembalian kasbon

| Status | Arti ringkas |
|---|---|
| `menunggu_kasir` | Pengembalian tersimpan dan menunggu penerimaan kasir |
| `diterima_kasir` | Uang pengembalian sudah diterima kasir |
| `diarsipkan` | Dokumen pengembalian sudah ditutup |
| `dibatalkan` | Pengembalian kasbon dibatalkan |

## Desain Database

Format implementasi utama tetap memakai [DATABASE_DESIGN.dbml](./DATABASE_DESIGN.dbml), sehingga struktur data bisa langsung diimport ke `dbdiagram.io`.

### Cakupan domain data

| Domain | Entitas utama |
|---|---|
| Master dan akses | `role`, `divisi`, `user`, `barang`, `vendor` |
| Workflow approval | `approval_transaksi` |
| Pembelian barang dan jasa | `pengajuan_pembelian_head`, `pengajuan_pembelian_barang_detail`, `pengajuan_pembelian_jasa_detail`, `penawaran_vendor`, `purchase_order`, `penerimaan_barang`, `retur_barang_head`, `retur_barang_detail`, `penyelesaian_jasa_head`, `penyelesaian_jasa_detail`, `aset` |
| Tagihan dan payment | `tagihan`, `permintaan_pembayaran`, `transaksi_pembayaran` |
| FEAB, kasbon, reimbursement | `feab`, `feab_detail`, `kasbon`, `realisasi_biaya`, `realisasi_biaya_detail`, `reimbursement`, `pengembalian_kasbon` |
| Lampiran | `lampiran_dokumen` |

### Prinsip desain

- User memiliki satu role, sedangkan daftar akses role bersifat many-to-many melalui `role_akses`.
- Nama role hanya label bisnis; backend wajib mengotorisasi endpoint dengan `kode_akses` dan scope data.
- Relasi `divisi.kepala_divisi` adalah penugasan organisasi, bukan relasi role tambahan.
- Transaksi multi-item umumnya memakai header-detail. Penerimaan barang memakai satu tabel dengan composite key `(no_penerimaan, no_urut)` karena setiap baris adalah hasil penerimaan item PO.
- Pengajuan pembelian memakai satu header untuk barang dan jasa, tetapi detail barang dan detail jasa dipisah karena atribut transaksinya berbeda.
- Detail pengajuan barang memuat item barang, qty, satuan, estimasi harga, lampiran, dan catatan. Detail pengajuan jasa memuat uraian pekerjaan, biaya, vendor/penyedia, lokasi pekerjaan, dan keterangan.
- Lampiran pengajuan jasa berada di header pengajuan sebagai satu kolom `lampiran` multi dokumen beserta format file, sehingga jenis dokumen tidak perlu dijabarkan sebagai kolom terpisah.
- Barang usulan menggunakan tabel barang yang sama, dibedakan melalui status.
- Approval tidak dipisah lagi ke banyak tabel domain. Semua approval dan review bertahap disatukan ke `approval_transaksi` dengan kombinasi `modul_persetujuan`, `no_referensi`, `tahap_persetujuan`, dan `urutan_tahap`.
- Pendekatan approval generik dipilih agar skema lebih ramping, lebih mudah dirawat, dan lebih mudah dipakai ulang untuk modul baru seperti `tagihan` dan `reimbursement`.
- `vendor` dipakai sebagai master referensi umum. Kontak person atau `up` disimpan pada `penawaran_vendor` sebagai snapshot transaksi karena kontak dapat berubah setiap kali penawaran dipakai.
- `penawaran_vendor` diposisikan sebagai header penawaran barang tanpa tabel detail penawaran terpisah.
- `mata_uang`, `kurs`, `ongkir`, `diskon`, `keterangan_pembayaran`, `kategori_pengiriman`, dan estimasi datang untuk pembelian barang dicatat langsung di `penawaran_vendor`.
- `purchase_order` adalah model order aktif khusus pembelian barang dari penawaran barang yang disetujui.
- `purchase_order.no_penawaran` mereferensikan `penawaran_vendor.no_penawaran` dan bersifat unique, sehingga satu penawaran barang terpilih hanya menghasilkan satu PO.
- Detail item, vendor, qty, harga, ongkir, diskon, metode pembayaran, pengiriman, dan estimasi datang pada PO barang dibaca dari snapshot `penawaran_vendor` terkait.
- Satu pengajuan barang dapat menghasilkan banyak PO melalui beberapa baris `penawaran_vendor` terpilih.
- `penyelesaian_jasa_head.no_pengajuan` mereferensikan pengajuan jasa; cabang jasa tidak membuat `penawaran_vendor` dan tidak membuat `purchase_order`.
- `penyelesaian_jasa_head` dibuat otomatis setelah approval pengajuan jasa selesai, sedangkan `penyelesaian_jasa_detail` menyimpan log aktivitas pengerjaan jasa sampai siap masuk finance process.
- Payment menggunakan modul bersama agar bisa dipakai oleh procurement, tagihan, dan reimbursement.
- Lampiran dibuat generik agar tidak perlu tabel file terpisah per modul.

### Catatan implementasi

- `PO` auto-generate hanya dari penawaran barang yang sudah disetujui. Tidak ada aktivitas tambah atau batal manual di halaman PO; halaman PO dipakai untuk monitoring dan detail dokumen barang.
- Blok `dokumen_pembelian` di DBML saat ini masih nonaktif atau commented dan belum menjadi model aktif.
- `penyelesaian_jasa_head` dan `penyelesaian_jasa_detail` dipakai untuk cabang jasa setelah approval pengajuan selesai.
- `aset` hanya terbentuk dari item penerimaan yang valid.
- `tagihan` pada model aktif berdiri sendiri dan hanya mereferensikan `vendor`, belum mereferensikan `dokumen_pembelian`.
- Approval `tagihan` dan `reimbursement` langsung dimulai dari `Kepala Akunting` dan dicatat di `approval_transaksi`.
- `pengembalian_kasbon` dipisah karena itu adalah alur uang masuk kembali ke kasir.
- Enum `jenis_dokumen_pembelian` dan `status_dokumen_pembelian` disiapkan untuk model dokumen pembelian yang saat ini masih nonaktif.

## Plan CI/CD

### Arsitektur ringkas

- Source code disimpan di `GitHub`
- Frontend dan backend dipisah
- Build pipeline memakai `Cloud Build`
- Image backend disimpan di `Artifact Registry`
- Deploy runtime memakai `Cloud Run`
- Notifikasi pipeline diarahkan ke `WhatsApp`

### Branch strategy

- `staging` untuk testing
- `main` untuk production

### Alur backend

1. Merge ke `staging` atau `main`.
2. `Cloud Build` menjalankan `build + test + migration check`.
3. Image backend dikirim ke `Artifact Registry`.
4. API dideploy ke `Cloud Run`.
5. Production menjalankan smoke test `/health`.
6. Notifikasi sukses dikirim setelah verifikasi minimum lolos.

### Alur frontend

1. Merge ke `staging` atau `main`.
2. `Cloud Build` menjalankan `build + deploy web`.
3. Deploy web staging atau production.
4. Jalankan smoke test web untuk production.
5. Kirim notifikasi sukses setelah deploy tervalidasi.

### Standar minimum pipeline

- Build gagal menghentikan deploy
- Test gagal menghentikan deploy
- Migration check backend dijalankan sebelum deploy production
- Smoke test production dijalankan setelah deploy
- Secret, workflow file, dan naming image belum didefinisikan detail di repo ini

## Prioritas Lanjutan

- API contract
- Wireframe sederhana
- Test scenario
- UAT plan

## Artefak Teknis yang Tetap Terpisah

- [Checklist perencanaan](./cheklist.md)
- [File desain database DBML](./DATABASE_DESIGN.dbml)
- [Requirement backend per halaman](./FITUR_REQUIREMENT_BACKEND.md)
