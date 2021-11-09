const express = require("express")
const app = express()

// panggil router member
const member = require("./routers/member")

app.use("/api/member", member)


// panggil router paket
const paket = require("./routers/paket")

app.use("/api/paket", paket)

// panggil router users
const users = require("./routers/users")

app.use("/api/users", users)

// panggil router transaksi
const transaksi = require("./routers/transaksi")

app.use("/api/transaksi", transaksi)

// panggil router login
const { login } = require("./routers/login")

app.use("/api/login", login)


app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})