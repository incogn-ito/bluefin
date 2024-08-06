import { Home } from "../models/homes.js";

async function index(req, res) {
    //look up things
    //render index
    const homes = await Home.find({})

    res.render('homes/index', {
        homes
    })
}

async function newHome(req, res) {
    res.render('homes/new')
}

async function create(req, res) {
    const newHome = await Home.create(req.body)
    console.log(newHome)
    res.redirect('/homes')
}

async function deleteHome(req, res) {
    await Home.findByIdAndDelete(req.params.homeId)
    res.redirect('/homes')
}

async function show(req, res) {
    const home = await Home.findById(req.params.homeId)
    res.redirect('/homes/show', {
        home
    })
}

async function edit(req, res) {
    const home = await Home.findById(req.params.toyId)
    res.render('homes/edit', {
        toy
    })
 }

 async function update(req, res) {
    await Home.findByIdAndUpdate(req.params.toyId, req.body,
    {new: true})
    res.redirect(`/homes/${req.params.toyId}`)
}

export {
    index,              // remember the comma!
    newHome as new,
    create,
    deleteHome as delete,
    show,
    edit,
    update
}