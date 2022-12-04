
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*كتابة التقرير*\n*مثال:*\n*${usedPrefix + command} الامر ${usedPrefix} play لا يعمل* .`
if (text.length < 8) throw `${fg} ✨ *الحد الأدنى 10 أحرف لإعداد التقرير.*\n\n✨ *شكرا لك*`
if (text.length > 1000) throw `${fg} 😼 *الحد الأقصى 1000 حرف لإعداد التقرير.*\n\n😼 *شكرا لك.*`
let teks = `*╭━━[ التقرير. ]━━━⬣*\n*┃*\n*┃* *رقم*\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *رساله*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
conn.reply(' 393271166550@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
conn.reply('3896068765@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`╰⊱💚⊱ *نجاح* ⊱💚⊱╮\n*تم إرسال التقرير إلى منشئ المحتوى الخاص بي. سيكون لديك إجابة قريبا. إذا كان التقرير خاطئا، سا ناتجاهله. *`)

}

handler.help = ['reporte', 'بلاغ'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|بلاغ|reportes|reportar)$/i 
export default handler
