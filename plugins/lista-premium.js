let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `๐๏ธ ุจุฑููููู : ุงููุณุชุฎุฏููู 
*โญโขยทโโโโโโโโโโโโโโโโโโโยทโข*
โ *ูุฌููุน : ${prem.length} ูุณุชุฎุฏู* ${prem ? '\n' + prem.map(([jid], i) => `
โ *${i + 1}.* ${conn.getName(jid) == undefined ? 'ูุง ููุฌุฏ ูุณุชุฎุฏููู' : conn.getName(jid)}
โ ${isOwner ? '@' + jid.split`@`[0] : jid}\nโ - - - - - - - - -`.trim()).join('\n') : ''}
*โฐโขยทโโโโโโโโโโโโโโโโโโโยทโข*`
await conn.sendButton(m.chat, caption, `๐๏ธ ุจุฑููููู โข ${vip ? 'โ' : 'โ'}\n${wm}`, null, [ 
[`${vip ? 'โฆ ูู  ุจุฑูููููโฆ': 'โฆ  โฆ'}`, `${vip ? '.allmenu': '.pase premium'}`]], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listapremium)$/i

export default handler
