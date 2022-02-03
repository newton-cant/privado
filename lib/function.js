const fs = require('fs');
const cheerio = require('cheerio');
const fetch = require('node-fetch')
const FormData = require('form-data')
const { default: Axios } = require('axios');
const { exec } = require('child_process');
const { spawn } = require('child_process')
const { getRandom } = require('./functions')

exports.simih = simih = async (text) => {
anu = await fetchJson(`https://lolizit-api.herokuapp.com/api/simsimi_br?msg=${text}&apikey=Tobi`)
return anu.resultado.resposta
}

function webp2gifFile(path) {
 return new Promise((resolve, reject) => {
const bodyForm = new FormData()
bodyForm.append('new-image-url', '')
bodyForm.append('new-image', fs.createReadStream(path))
Axios({
method: 'post',
url: 'https://s6.ezgif.com/webp-to-mp4',
data: bodyForm,
headers: {
'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`
}
}).then(({ data }) => {
const bodyFormThen = new FormData()
const $ = cheerio.load(data)
const file = $('input[name="file"]').attr('value')
const token = $('input[name="token"]').attr('value')
const convert = $('input[name="file"]').attr('value')
const gotdata = {
file: file,
token: token,
convert: convert
}
bodyFormThen.append('file', gotdata.file)
bodyFormThen.append('token', gotdata.token)
bodyFormThen.append('convert', gotdata.convert)
Axios({
method: 'post',
url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
data: bodyFormThen,
headers: {
'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
}
}).then(({ data }) => {
const $ = cheerio.load(data)
const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
resolve({
status: true,
message: "Created By MRHRTZ",
result: result
})
}).catch(reject)
}).catch(reject)
})
}

exports.getBase64 = getBase64 = async (url) => {
const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
const buffer = await response.buffer();
const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
if (buffer)
return videoBase64;
};

exports.getBuffer = getBuffer = async (url) => {
const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
const anu = fs.readFileSync('./src/emror.jpg')
if (!res.ok) return { type: 'image/jpeg', result: anu }
const buff = await res.buffer()
if (buff)
return { type: res.headers.get('content-type'), result: buff }
}

fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})
})

exports.createExif = (pack, auth) =>{
const code = [0x00,0x00,0x16,0x00,0x00,0x00]
const exif = {"sticker-pack-id": "com.tobi.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
let len = JSON.stringify(exif).length
if (len > 256) {
len = len - 256
code.unshift(0x01)
} else {
code.unshift(0x00)
}
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
const __ = Buffer.from(len, "hex")
const ___ = Buffer.from(code)
const ____ = Buffer.from(JSON.stringify(exif))
fs.writeFileSync('./database/stik/data.exif', Buffer.concat([_, __, ___, ____]), function (err) {
console.log(err)
if (err) return console.error(err)
return `./database/stik/data.exif`
})

}
exports.modStick = (media, tobi, mek, from) => {
out = getRandom('.webp')
try {
console.log(media)
spawn('webpmux', ['-set','exif', './database/stik/data.exif', media, '-o', out])
.on('exit', () => {
tobi.sendMessage(from, fs.readFileSync(out), 'stickerMessage', {quoted: mek})
fs.unlinkSync(out)
fs.unlinkSync(media)
})
} catch (e) {
console.log(e)
tobi.sendMessage(from, 'Terjadi keslahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
}
}

exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.text())
.then(text => {
resolve(text)
})
.catch((err) => {
reject(err)
})
})

exports.anagramaAleatorio = anagramaAleatorio = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
	original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
	original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'SAYO',
embaralhada: 'YOSA',
dica: 'CRIADOR'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},

{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'CAORROCHO',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]

exports.quizCarrOccupation = quizCarrOccupation = 
[{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
}]

module.exports = {
webp2gifFile,
}