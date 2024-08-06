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

export {
    index,              // remember the comma!
    newHome as new,
    create,
    deleteHome as delete,
}