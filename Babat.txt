Tema : Finance Technology
Name : Babat
Contoh : https://bibit.id/saham (Bagian 'Simulasikan Investasi Saham Kamu di Bibit')

Flow Pemrograman
----------------
Login / Register -> Home (User) -> Show / Edit Profile ?
                                -> Isi saldo (Saldo default: 0) 
                                -> Pilih investasi saham di company mana (Fitur sort: berdasarkan keuntungan terbanyak / terkecil pertahun)
                                -> Melihat seluruh company yang telah diinvest dan melakukan divest pada salah satu company yang diinvest
                                -> Logout
                 -> Home (Admin) -> Edit company (Nama, Gambar, Deskripsi, Keuntungan pertahun berapa %)
                                 -> Delete company
                                 -> Logout
Fitur MVP        -> Setelah regristasi muncul email 'Terimakasih sudah memilih aplikasi Babat sebagai pilihan anda untuk melakukan investasi' (nodemailer)
                                 
Routes
------                                
GET /login 
GET /register --> Membuat user baru

GET /users --> Menampilkan button logout, saldo sekarang + button isi saldo, dan seluruh list company yang ada
GET /users/:userId/balance --> Menambahkan saldo user
POST /users/:userId/balance --> Submit saldo user
GET /users/:userId/company/:companyId/invest  --> Melakukan invest company yang dipilih user
GET /users/:userId/company --> Menampilkan seluruh company yang telah diinvest oleh user
GET /users/:userId/company/:companyId/divest --> Menghapus investasi user pada company yang dipilih

GET /admins --> Menampilkan seluruh list company yang ada + jumlah total user yang telah melakukan invest
GET /admins/company/:companyId --> Edit pada company yang sudah ada
POST /admins/company/:companyId --> Update company yang telah di edit
GET /admins/company/:companyId --> Menghapus company dari daftar company yang ada

GET /logout

Todos
-----
1. Seeder
  - Admin (Name, email, gender, password)
  - Companies

2. Register (User only!) -> Create new user (Name, email, gender, password)

User
3. Login
4. Read all companies
5. Read all invested companies by user
6. Add balance
7. Invest to selected company
8. Divest selected company

Admin
9. Read all companies and total users invested to which companies
10. Edit companies
11. Delete companies

12. Logout