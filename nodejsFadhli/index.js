const express = require('express')
const exphbs = require('express-handlebars') // untuk membuat instance dari Express Handlebars (exphbs) dengan konfigurasi tertentu. exphbs.create adalah metode yang disediakan oleh modul Express Handlebars 
const app = express()
const port = 3000


app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use('/assets', express.static('src/assets'))
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

app.post('/penangananEdit/:id', penangananEdit)
app.post('/createBlog', penagananCreateBlog)

const myProject = []

// durasi
function calculateDuration(star_date, end_date) {
    // Mengubah string tanggal input menjadi objek Date
    const startDateObject = new Date(star_date);
    const endDateObject = new Date(end_date);

    const selisihWaktu = endDateObject - startDateObject;

    const milidetik = 24 * 60 * 60 * 1000;
    const hari = Math.floor(selisihWaktu / milidetik);
    const bulan = Math.floor(hari / 30);
    const tahun = Math.floor(bulan / 12);

    const resethari = hari % 30;
    const resetbulan = bulan % 12;

    return {
        resethari,
        resetbulan,
        tahun
    };
}

//pengecek logo yang di pilih



function penangananEdit(req, res) {
    const { id } = req.params;
    const { project_name, description, star_date, end_date, checkedTechnologies } = req.body;

    const indexint = parseInt(id); //ubah dulu dari string ke int karna splice pertamanya harus int tidk boleh string
    const duration = calculateDuration(star_date, end_date);
    const logos = checkedTechnologies

    myProject.splice(indexint, 1, {
        project_name,
        description,
        logos: Array.isArray(logos) ? logos : [logos],
        star_date,
        end_date,
        duration
    });
    const abc = myProject


    res.redirect('/add_my_project');
}


function edit(req, res) {
    const { id } = req.params;
    const dataEdit = myProject[id]
    console.log(dataEdit)





    res.render('edit', { dataEdit, index: id,  })

}





function penangananDelete(req, res) {
    const { id } = req.params
    myProject.splice(id, 1)

    res.redirect('/add_my_project')
}




function add_my_project(req, res) {
    res.render('add_my_project', { myProject })
}
function detail(req, res) {
    const { id } = req.params

    const dataDetail = myProject[id]


    res.render('detail', { myProject: dataDetail })
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
    res.render('index')
}




function penagananCreateBlog(req, res) {
    const { project_name, description, checkedTechnologies, star_date, end_date, } = req.body

    const logos = checkedTechnologies

    const duration = calculateDuration(star_date, end_date);


    myProject.push({
        project_name,
        description,
        logos: Array.isArray(logos) ? logos : [logos],// jadi method ini kurang lebihb kayak apabila ni logos ini "laravel" maka di buat menjadi ["laravel" inti nya biar menjadi array
        duration,
        star_date,
        end_date
    });


    res.redirect('/add_my_project');
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})