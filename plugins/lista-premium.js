let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `🎟️ بريميوم : المستخدمين 
*╭•·–––––––––––––––––––·•*
│ *مجموع : ${prem.length} مستخدم* ${prem ? '\n' + prem.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'لا يوجد مستخدمون' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.sendButton(m.chat, caption, `🎟️ بريميوم ⇢ ${vip ? '✅' : '❌'}\n${wm}`, null, [ 
[`${vip ? '✦ كن  بريميوم✦': '✦  ✦'}`, `${vip ? '.allmenu': '.pase premium'}`]], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listapremium)$/i

export default handler
