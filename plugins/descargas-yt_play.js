import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'YUNA-MD', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${lenguajeGB['smsAvisoMG']()} أدخل الاسم أو العنوان \nمثال\n*${usedPrefix + command} ما تيسر من سورة التغابن*   `
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()}تعذر العثور على الصوت/الفيديو. جرب اسما أو عنوانا آخر`
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*

ও عنوات:
» ${title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও الوصف:
» ${description}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও تاريخ النشر:
» ${publishedTime}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও المودة:
» ${durationH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও المشاهدات:
» ${viewH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও الرابط:
» ${url}

*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*`, thumbnail, [['قـائمـة☘️', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' 📡 اختر طريقة التحميل' + fin,
rows: [
{title: "صوت (النوع 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "صوت (النوع 2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "صوت النوع ملف) ", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "فيديو (النوع 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "فيديو (النوع 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "فيديو (النوع ملف) ", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' 🔎عرض نتائج البحث ' + fin,
rows: [
{title: "جميع نتائج البحث", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `  * نتائج البحث: ${text}*`,
  footer: global.wm,
  title: `${htki} *♻️ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎* ${htka}`,
  buttonText: `🍄 𝙀𝙇𝙀𝙍𝙂𝙄𝙍 🍁`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}catch(e){
m.reply(`${lenguajeGB['smsAvisoFG']()} حاول مره ثانيه `)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.money = 200
export default handler
