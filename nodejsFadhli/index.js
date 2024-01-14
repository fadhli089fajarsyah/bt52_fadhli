const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use('/assets', express.static('src/assets'))

app.get('/', home)
app.get('/api', api)
app.get('/contact', contact)
app.get('/add_my_project', add_my_project)
app.get('/detail/:id', detail)
app.get('/hof', hof)
app.get('/oop', oop)

const projectName = [
    {
        id: 1,
        img: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/02/Elon-Mask-4277837640.jpg",
        title: "judull 1",
        content: "Content 1 Lorem sum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. T ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quo culpa nostrum aut nesciunt dolor quas sapiente eligendi. Ducimus consequuntur sequ"
    },
    {
        id: 2,
        title: "judull 2",
        img: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2019/01/vanesha-sampai-nangis-dalami-peran-milea-dilan-1991-bakal-bikin-baper_m_.jpg",
        content: "Content 2 Lorem sum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. T ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quo culpa nostrum aut nesciunt dolor quas sapiente eligendi. Ducimus consequuntur sequ"
    },
    {
        id: 3,
        title: "judull 3",
        img: "https://i.pinimg.com/564x/db/a5/dd/dba5dd6a537e9a4e550c4155e3e77e07.jpg",
        content: "Content 3 Lorem sum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. Tsum dolor sit amet, consectetur adipisicing elit. T ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quo culpa nostrum aut nesciunt dolor quas sapiente eligendi. Ducimus consequuntur sequ"
    }
]

function add_my_project(req, res) {
    res.render('add_my_project', {projectName})
}
function detail(req, res) {
    const { id } = req.params  
    const pengambil = projectName.find (param => param.id === parseInt(id))//find buat mencari elemen sepeerti id dan param itu parameternya buat memanggil isi di dalam objnya
    console.log(pengambil)
    res.render('detail', pengambil)
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
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})