import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππππΌπππ πΏπ ππππππ πππ πππΌπ "@"\nπππππππ\n*${usedPrefix + command} mundo_dos_animes81*\n\nππππ ππππ ππππππ ππππππΌππ πππππππ πππππ "@"\nπππΌππππ\n*${usedPrefix + command} universo_editx*`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let gata = `
π€ ππππΌπππ(πΌ) | ππππ
${json.result.username}
βββββββββββββββββ
β¨ ππππ½ππ | ππΌππ
${json.result.nickname}
βββββββββββββββββ
β ππππππΏππππ | πππππππππ 
${json.result.followers}
βββββββββββββββββ
βοΈ ππππππΏππ | πππππππππ
${json.result.followings}
βββββββββββββββββ
β€οΈ ππ πππππΌ | πππππ
${json.result.likes}
βββββββββββββββββ
π πππ½πππΎπΌπΎπππππ | πππππ
${json.result.video}
βββββββββββββββββ
π π½πππππΌπΓπΌ | πΏπππΎπππππππ
${json.result.bio}
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gata, m, false)
} catch (e) {
throw `${lenguajeGB['smsAvisoFG']()}ππ ππ πππΎπππππ ππ ππππ½ππ πΏπ ππππΌπππ.\n\nππ ππππππΌππ πππππΏ.`
}
let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)  

}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.exp = 48
export default handler
