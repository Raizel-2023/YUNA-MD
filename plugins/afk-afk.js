let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`${lenguajeGB['smsAfkM1A']()} *${conn.getName(m.sender)}* ${lenguajeGB['smsAfkM1B']()}${text ? ': ' + text : ''}
`)}
handler.help = ['افك [السبب]']
handler.tags = ['main']
handler.command = /^افك$/i
export default handler
