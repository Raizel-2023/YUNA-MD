import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) {
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
نتائج البحث

• 📌 عنوان: ${title}
• 👨‍🎤 فنان: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'اسفة لم اعرف'}
• 💾 البوم: ${album.name || 'آسفة لم أعرف'}
• 🌐 النوع : ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'آسفة لم أعرف'}
• 📆 تاريخ الإصدار: ${release_date || 'أسى لم أعرف'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '*[❗]منشن صوت *'
}
handler.command = /^quemusica|بحث1|whatmusic$/i
export default handler
