export const semifinaltwo = [{
    "img": "at.png",
    "name": "Austria"
}, {
    "img": "cz.png",
    "name": "Czech Republic"
}, {
    "img": "ee.png",
    "name": "Estonia"
}, {
    "img": "gr.png",
    "name": "Greece"
}, {
    "img": "is.png",
    "name": "Iceland"
}, {
    "img": "md.png",
    "name": "Moldova"
}, {
    "img": "pl.png",
    "name": "Poland"
}, {
    "img": "sm.png",
    "name": "San Marino"
}, {
    "img": "rs.png",
    "name": "Serbia"
}, {
    "img": "al.png",
    "name": "Albania"
}, {
    "img": "am.png",
    "name": "Armenia"
}, {
    "img": "bg.png",
    "name": "Bulgaria"
}, {
    "img": "dk.png",
    "name": "Denmark"
}, {
    "img": "fi.png",
    "name": "Finland"
}, {
    "img": "ge.png",
    "name": "Georgia"
}, {
    "img": "lv.png",
    "name": "Latvia"
}, {
    "img": "pt.png",
    "name": "Portugal"
}, {
    "img": "ch.png",
    "name": "Switzerland"
}, {
    "img": "fr.png",
    "name": "France"
}, {
    "img": "es.png",
    "name": "Spain"
}, {"img": "United Kingdom.png", "name": "United Kingdom"}]

var download = require('download-file');
data.forEach((e) => {
    download(e.img, {directory: './images', filename: e.name + ".png"})
})
