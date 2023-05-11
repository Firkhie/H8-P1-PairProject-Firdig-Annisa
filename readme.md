## Tema : Finance Technology
## Name : Babat
## Contoh : https://bibit.id/saham (Bagian 'Simulasikan Investasi Saham Kamu di Bibit')

## Flow Pemrograman

1. Login / Register 
2. Home (User) 
 - Show / Edit Profile
 - Isi saldo (Saldo default: 0) 
 - Pilih investasi saham di company mana (Fitur sort: berdasarkan keuntungan terbanyak / terkecil pertahun)
 - Melihat seluruh company yang telah diinvest dan melakukan divest pada salah satu company yang diinvest
 - Logout
3. Home (Admin) 
 - Edit company (Nama, Gambar, Deskripsi, Keuntungan pertahun berapa %)
 - Delete company
 - Logout
4. Fitur MVP 
 - Setelah regristasi muncul email 'Terimakasih sudah memilih aplikasi Babat sebagai pilihan anda untuk melakukan investasi' (nodemailer)
                                 
## Routes

| Method | Route                                    | Deskripsi                                                           |
| :----- | :--------------------------------------- | :------------------------------------------------------------------ |
| GET    | /login                                   | Form Login                                                          |
| GET    | /register                                | Form Register                                                       |
| GET    | /users                                   | Menampilkan landing page `(Profil, saldo, seluruh tabel companies)` |
| GET    | /users/:userId/balance                   | Form untuk menambahkan `Saldo` user                                 |
| POST   | /users/:userId/balance                   | Update `Saldo` user                                                 |
| GET    | /users/:userId/company/:companyId/invest | Melakukan `invest company` yang dipilih user                        |
| GET    | /users/:userId/company                   | Menampilkan seluruh company yang telah diinvest oleh user           |
| GET    | /users/:userId/company/:companyId/divest | Menghapus investasi user pada company yang dipilih                  |
| GET    | /admins                                  | Menampilkan seluruh list company yang ada dan jumlah total user     |
| GET    | /admins/company/:companyId/edit          | `Edit` pada company yang sudah ada                                  |
| POST   | /admins/company/:companyId/edit          | `Update` company yang telah di edit                                 |
| GET    | /admins/company/:companyId/delete        | `Delete` company dari daftar company yang ada                       |
| GET    | /logout                                  | Logout                                                              |


## Todos

1. Seeder
  - Admin (Name, email, gender, password)
  - Companies

2. Register (User only!) -> Create new user (Name, email, gender, password)

### User
3. Login
4. Read all companies
5. Read all invested companies by user
6. Add balance
7. Invest to selected company
8. Divest selected company

### Admin
9. Read all companies and total users invested to which companies
10. Edit companies
11. Delete companies

12. Logout