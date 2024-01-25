const express = require('express')
const exphbs = require('express-handlebars') // untuk membuat instance dari Express Handlebars (exphbs) dengan konfigurasi tertentu. 
const app = express()
const port = 3000
const session = require('express-session')
const flash = require('express-flash') //buat pop up gagal login
const upload = require('./src/middlewares/uploadFile')//img
const bcrypt = require('bcrypt')

//koneksi ke file file config buat ke database
const { development } = require('./src/config/config.json')
const { Sequelize, QueryTypes } = require('sequelize')
const SequelizePool = new Sequelize(development)
let models = require("./src/models")
let myprojects = models.myprojects


// middleware sessionnya
app.use(session({
    cookie: {
        httpOnly: true,   //httpOnly: Cookie hanya dapat diakses oleh server, tidak dapat diakses oleh JavaScript di sisi klien
        secure: false,   //secure: Jika true, cookie hanya akan dikirim melalui koneksi HTTPS.
        maxAge: 2 * 60 * 60 * 1000  //maxAge: Waktu kedaluwarsa cookie dalam milidetik. Dalam contoh ini, cookie akan kedaluwarsa setelah 2 jam.
    },
    resave: false,  //resave: Ini adalah opsi yang menunjukkan apakah sesi harus disimpan ulang ke penyimpanan meskipun tidak ada perubahan. Biasanya diatur ke false.
    store: session.MemoryStore(), //digunakan, yang menyimpan sesi di memori.
    secret: 'session_storage', //kata kunci rahasia yang digunakan untuk mengamankan cookie sesi.
    saveUninitialized: true //
}))

//flash midelwarenya
app.use(flash()) //buat memanggil fungsi flash yang gagal login kayak alert
//buat manggil hbs
app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use('/assets', express.static('src/assets'))
app.use('/uploads', express.static('src/uploads'))
app.use(express.urlencoded({ extended: false })) //body parse pengubbaah ke json (peng aktivenya)

app.get('/', home)
app.get('/api', api)
app.get('/contact', contact)
app.get('/add_my_project', add_my_project)
app.get('/detail/:id', detail)
app.get('/hof', hof)
app.get('/oop', oop)
app.get('/edit/:id', edit)
app.get('/delete/:id', penangananDelete)
app.get('/register', register)
app.get('/login', login)
app.get('/logout', logout)
app.get('/sukseshapus', sukseshapus)
app.get('/suksestambah', suksestambah)
app.get('/berasildiedit', berasildiedit)
app.get('/berasildiedit', berasildiedit)

app.post('/penangananEdit/:id', penangananEdit)
app.post('/createBlog',upload.single('image'), penagananCreate)
app.post('/register', penagananregister)
app.post('/addlogin', addlogin)

const myProject = []


// durasi
function calculateDuration(star_date, end_date) {
    // Mengubah string tanggal input menjadi objek Date
    const startDateObject = new Date(star_date)
    const endDateObject = new Date(end_date)

    const selisihWaktu = endDateObject - startDateObject

    const milidetik = 24 * 60 * 60 * 1000
    const hari = Math.floor(selisihWaktu / milidetik)
    const bulan = Math.floor(hari / 30)
    const tahun = Math.floor(bulan / 12)

    const resethari = hari % 30
    const resetbulan = bulan % 12

    return {
        resethari,
        resetbulan,
        tahun
    }
}

//ambil data dari database buat edit
async function getSingleDataFromDatabase(id) {
    try {
        const project = await SequelizePool.query(
            "SELECT * FROM myprojects WHERE id = :id",
            {
                replacements: { id },
                type: Sequelize.QueryTypes.SELECT,
            }
        )
        return project[0] // Mengambil data pertama dari hasil query
    } catch (error) {
        console.error(error)
        throw error
    }
}

function sukseshapus(req, res) {
    res.render('sukseshapus')
}
function suksestambah(req, res) {
    res.render('suksestambah')
}
function berasildiedit(req, res) {
    res.render('berasildiedit')
}
async function penangananEdit(req, res) {
    try {
        const { id } = req.params
        const { project_name, description, star_date, end_date, checkedTechnologies } = req.body
        const duration = calculateDuration(star_date, end_date)
        const logos = checkedTechnologies

        await SequelizePool.query(
            `
            UPDATE myprojects SET 
            projectname = :project_name,
            description = :description,
            star_date = :star_date,
            end_date = :end_date,
            resethari = :resethari,
            resetbulan = :resetbulan,
            tahun = :tahun,
            logos = ARRAY[:logos]
            WHERE id = :id
            `,
            {
                replacements: {
                    id,
                    project_name,
                    description,
                    star_date,
                    end_date,
                    resethari: duration.resethari,
                    resetbulan: duration.resetbulan,
                    tahun: duration.tahun,
                    logos,
                },
                type: Sequelize.QueryTypes.UPDATE,
            }
        )

        res.redirect('/berasildiedit')
    } catch (error) {
        console.log(error);
    }


    // const { id } = req.params
    // const { project_name, description, star_date, end_date, checkedTechnologies } = req.body

    // const indexint = parseInt(id) //ubah dulu dari string ke int karna splice pertamanya harus int tidk boleh string
    // const duration = calculateDuration(star_date, end_date)
    // const logos = checkedTechnologies

    // myProject.splice(indexint, 1, {
    //     project_name,
    //     description,
    //     logos: Array.isArray(logos) ? logos : [logos],
    //     star_date,
    //     end_date,
    //     duration
    // })
    // const abc = myProject


    // res.redirect('/add_my_project')
}

async function edit(req, res) {
    try {
        const { id } = req.params
        const dataEdit = await getSingleDataFromDatabase(id)
        console.log(dataEdit)

        res.render('edit', { dataEdit, index: id, })
    } catch (error) {
        console.error(error)
        
    }

    // const { id } = req.params
    // const dataEdit = myProject[id]
    // console.log(dataEdit)

    // res.render('edit', { dataEdit, index: id,  })

}

async function penangananDelete(req, res) {
    try {
        const { id } = req.params
        await SequelizePool.query(`DELETE FROM myprojects WHERE id = ${id}`)

        res.redirect('/sukseshapus')
    } catch (error) {
        console.error(error)
    }
    // const { id } = req.params
    // myProject.splice(id, 1)

    // res.redirect('/add_my_project')
}

async function add_my_project(req, res) {
    try {
        const query = await SequelizePool.query("SELECT myprojects.*, users.name AS author_name FROM myprojects LEFT JOIN users ON myprojects.author = users.id", {
            type: Sequelize.QueryTypes.SELECT
        })
        console.log(query);
        const projects = query.map(res => ({
            ...res,
            isLogin: req.session.isLogin
        }))
        res.render('add_my_project', {
            projects,
            isLogin: req.session.isLogin,
            user: req.session.user,
        })
    } catch (error) {
        console.error(error)
    }
    // res.render('add_my_project', { myProject })
}
async function detail(req, res) {
    try {
        const { id } = req.params
        const dataEdit = await getSingleDataFromDatabase(id)
        console.log()

        res.render('detail', { dataEdit, index: id, })
    } catch (error) {
        console.error(error)
    }
    // const { id } = req.params

    // const dataDetail = myProject[id]


    // res.render('detail', { myProject: dataDetail })
}

function oop(req, res) {
    res.render('oop')
}

function hof(req, res) {
    res.render('hof')
}

function contact(req, res) {
    res.render('contact')
}

function api(req, res) {
    res.render('api')
}

function home(req, res) {
    res.render('index', {
        isLogin: req.session.isLogin,
        user: req.session.user
        
    })
}

async function penagananCreate(req, res) {
    // try and catch itu  
    try {
        const { project_name, description, star_date, end_date, checkedTechnologies } = req.body
        const duration = calculateDuration(star_date, end_date)
        const logos = checkedTechnologies
        const author = req.session.idUser
        const image = req.file.filename

        const query = `
        INSERT INTO myprojects(projectname, description, star_date, end_date, resethari, resetbulan, tahun, logos, image, author, "createdAt", "updatedAt") 
        VALUES (:project_name, :description, :star_date, :end_date, :resethari, :resetbulan, :tahun, ARRAY[:logos], :image, :author, NOW(), NOW())`

        await myprojects.sequelize.query(query, {
            replacements: {
                project_name,
                description,
                star_date,
                end_date,
                resethari: duration.resethari,
                resetbulan: duration.resetbulan,
                tahun: duration.tahun,
                logos,
                author,
                image,
            },
            type: Sequelize.QueryTypes.INSERT,
        })

        res.redirect('/suksestambah')
    } catch (error) {
        console.error(error)
    }
    // const { project_name, description, checkedTechnologies, star_date, end_date, } = req.body

    // const logos = checkedTechnologies

    // const duration = calculateDuration(star_date, end_date)


    // myProject.push({
    //     project_name,
    //     description,
    //     logos: Array.isArray(logos) ? logos : [logos],// jadi method ini kurang lebihb kayak apabila ni logos ini "laravel" maka di buat menjadi ["laravel" inti nya biar menjadi array
    //     duration,
    //     star_date,
    //     end_date
    // })


    // res.redirect('/add_my_project')
}


function register(req, res) {
    res.render('register')
}



async function penagananregister(req, res) {
    try {
        const { name, email, password } = req.body
        const salt = 10

        bcrypt.hash(password, salt, async (arr, hashPassword) => {
            await SequelizePool.query(`INSERT INTO users (name, email, password, "createdAt", "updatedAt") VALUES ('${name}','${email}','${hashPassword}', NOW(), NOW())`)
        })
        // await SequelizePool.query(`INSERT INTO users (name, email, password, "createdAt", "updatedAt") VALUES ('${name}','${email}','${password}'), NOW(), NOW())`)

        res.redirect('/login')
    } catch (error) {
        console.log(error)
    }
}




function login(req, res) {
    res.render('login')
}

async function addlogin(req, res) {
    try {
        const { email, password } = req.body

        const checkEmail = await SequelizePool.query(`SELECT * FROM users WHERE email = '${email}'`, { type: QueryTypes.SELECT })

        if (checkEmail.length === 0) {
            req.flash('failed', 'Email is not registered')
            return res.redirect('/login')
        }

        bcrypt.compare(password, checkEmail[0].password, function (err, result) {
            if (err) {
                console.error('Password comparison error:', err)
                req.flash('failed', 'gagal')
                return res.redirect('/login')
            }

            if (!result) {
                req.flash('failed', 'Incorrect password')
                return res.redirect('/login')
            }

            // Passwords match
            req.session.isLogin = true
            req.session.user = checkEmail[0].name
            req.session.idUser = checkEmail[0].id
            
            return res.redirect('/')
        })
    } catch (error) {
        console.error('Login error:', error)
        req.flash('failed', 'Internal server error')
        res.redirect('/login')
    }
}


function logout(req, res) {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err)
        } else {
            res.redirect('/login') 
        }
    })
}



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})