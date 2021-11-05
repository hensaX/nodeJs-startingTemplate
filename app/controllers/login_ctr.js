const { pool } = require('./../configs/ConnPg');
const { createToken } = require('./../middlewares/JwtCreate')


const auth = (req, res) => {
    const token = createToken({ user: 'hendra', acces: 'admin' })
    res.json({ tokennya: token })
}

const tampils = (req, res) => {
    pool.query('select * from pyres where lower(coid)=lower($1)', ['dmo'])
        .then(r => res.json({ code: 200, message: `Succesfull ${r.command} # ${r.rowCount} records`, data: r.rows }))
        .catch(err => res.json({ code: 400, message: err }))
        .finally(console.log('berhasil'));

}

const hapus = (req, res) => {
    const token = createToken({ user: 'hendra', acces: 'admin' })
    res.json({ tokennya: token })
}

const ubah = (req, res) => {
    res.json({ succes: 'ini put doang' })
}

const tambah = (req, res) => {
    let datagw = req.body
    console.log(datagw)
    res.json({ succes: 'ini post doang', data: req.body })
}
module.exports = { auth, tampils, hapus, ubah, tambah }
