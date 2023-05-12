## Tema : Finance Technology
## Name : Babat
### Contoh : https://bibit.id/saham (Bagian 'Simulasikan Investasi Saham Kamu di Bibit')

## Flow Pemrograman

1. Login / Register 
2. Home (User) 
 - Pilih investasi saham di company mana (Fitur sort: berdasarkan keuntungan terbanyak / terkecil pertahun)
 - Melihat seluruh company yang telah diinvest
 - Menampilkan chart ROI dari tertinggi ke rendah
 - Logout
3. Home (Admin) 
 - CRUD investment
 - Logout
4. Fitur MVP 
 - Menampilkan chart ROI dari tertinggi ke rendah
                                 
## Routes

| Method | Route                                    | Deskripsi                                                           |
| :----- | :--------------------------------------- | :------------------------------------------------------------------ |
| GET    | /                                        | Login atau Signup                                                   |
| GET    | /login                                   | Form Login                                                          |
| POST   | /login                                   |                                                                     |
| GET    | /register                                | Form Register                                                       |
| POST   | /register                                |                                                                     |
| GET    | /users                                   | Menampilkan `Home` sisi user / member                               |
| GET    | /users/shows                             | Menampilkan `Investasi` apa saja yang dipilih user                  |
| GET    | /users/:UserId/company/:CompanyId/invest | Melakukan `invest`                                                  |
| POST   | /users/:UserId/company/:CompanyId/invest |                                                                     |
| GET    | /admins                                  | Menampilkan `Home` sisi admin                                       |
| GET    | /admins/investment/add                   | `Add` new investment                                                |
| GET    | /admins/investment/:InvestmentId/edit    | `Edit` pada investment yang sudah ada                               |
| POST   | /admins/investment/:InvestmentId/edit    | `Update` investment yang telah di edit                              |
| GET    | /admins/investment/:InvestmentId/delete  | `Delete` investment dari daftar company yang ada                    |
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