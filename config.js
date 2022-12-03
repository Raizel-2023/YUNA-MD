import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js' 

//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰  
global.owner = [
  [' 393271166550 ', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 💖🐈', true],
  [' 393271166550 '] 
]
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [' 393271166550'] 
global.prems = [' 393271166550 '], 
  
  
//⊱ ━━━━━.⋅ لغه ⋅.━━━━ ⊰ 
//أضف اللغة التي تريد أن يمتلكها بوت
//  es = اسباني         id = الإندونيسية 
//  en = انجليزي         pt = برتغال 
//  ar = عرب  

global.lenguajeGB = ar  //لغه YUNA-MD, مثال: es | en | pt...

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.APIs = { // API Prefix. 
  
//⊱ ━━━━━.⋅ name: 'https://website' ⋅.━━━━ ⊰
  aria: 'https://ariarestapii.herokuapp.com',
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  'https://violetics.pw': 'beta'
},
  
global.APIKeys = { // APIKey Here
  //⊱ ━━━━━.⋅ 'https://website': 'مفتاح الايبي' ⋅.━━━━ ⊰
  'https://ariarestapii.herokuapp.com': 'aria',
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

//⊱ ━━━━━.⋅ KEY ⋅.━━━━ ⊰

global.Key360 = ['964f-0c75-7afc'] //keys ephoto360
//global.beta = ['https://violetics.pw'] //keys ephoto360

global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = 'YUNA-MD 🐻'
global.author = 'YUNA BOT'

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ الإصدار | الرقم | حسابات ⋅.━━━━ ⊰

global.vs = '1.3.7'
global.version = vs

global.gt = 'YUNA-MD'
global.gatabot = gt

global.yt = 'https://youtube.com/'
global.youtube = yt

global.ig = 'https://www.instagram.com/a_e_b_2003'
global.gatadiosig = ig

global.md = 'https://github.com/ahmed1p7'
global.gatabot = md

global.nna = 'https://chat.whatsapp.com/IxeB9yBYrNp85CLmKykmMM'
global.nnagrupo = nna //UPDATE YUNA
global.nna2 = 'IxeB9yBYrNp85CLmKykmMM'

global.nn = 'https://chat.whatsapp.com/KSgHcPpZiXV7fMAscoptfw'
global.nngrupo = nn //Grupo 1

global.nnn = 'https://chat.whatsapp.com/KSgHcPpZiXV7fMAscoptfw'
global.nnngrupo = nnn //Grupo 2

global.nnnt = 'https://chat.whatsapp.com/KSgHcPpZiXV7fMAscoptfw'
global.nnntgrupo = nnnt //Grupo 3

global.nnntt = 'https://chat.whatsapp.com/KSgHcPpZiXV7fMAscoptfw'
global.nnnttgrupo = nnntt //Grupo 4

global.nnnttt = 'https://chat.whatsapp.com/KSgHcPpZiXV7fMAscoptfw'
global.nnntttgrupo = nnnttt //Grupo 5

global.paypal = 'https://paypal.me/yunbot'
global.donar = paypal

global.asistencia = 'Wa.me/393271166550' //Dudas? escríbeme...

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ بيانات ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '╰⊱✅⊱ *نتيجة* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *تحذير* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *معلومات* ⊱⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *خطاء* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *استخدمها بشكل خاطئ* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *تقرير* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *نجاح* ⊱💚⊱╮\n\n'
global.exito = eg

//مثال
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ معلومات ⋅.━━━━ ⊰

global.wm = ' YUNA-MD: YUNA'
global.igfg = 'YUNA-MD'
global.wait = '*⌛ _جاري التحميل..._ ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ _جاري التحميل..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _جاري التحميل..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _جاري التحميل..._ ▬▬▬▬▬▬▭*'
global.nomorown = ' 393271166550' 
global.pdoc = ['', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━lolkeys━━━━━━━━━

global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
//global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
global.lolkeysapi = ['85faf717d0545d14074659ad']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━ img ━━━━━━━━━

global.img = 'https://imgur.com/a/9DkMFw1.jpg'
global.img2 = 'https://imgur.com/a/BUTLV1v.jpg'

global.img3 = 'https://i.imgur.com/FpGvSKJ.jpg' //prem
global.img4 = 'https://i.imgur.com/UnaYoNp.jpg' //prem

global.img5 = 'https://i.imgur.com/FpGvSKJ.jpeg'
global.img6 = 'https://i.imgur.com/FpGvSKJ.jpeg'
global.img7 = 'https://i.imgur.com/FpGvSKJ.jpeg'
global.img8 = 'https://i.imgur.com/FpGvSKJ.jpeg'
global.img9 = 'https://i.imgur.com/FpGvSKJ.jpeg'

global.img10 = 'https://imgur.com/a/qKzg7Ad.jpg'
global.img11 = 'https://i.imgur.com/yOnMwMg.jpg'
global.img12 = 'https://i.imgur.com/Hff1jGB.jpg'
global.img13 = 'https://i.imgur.com/Hff1jGB.jpeg'
global.img14 = 'https://i.imgur.com/yOnMwMg.jpeg'
global.img15 = 'https://i.imgur.com/fAlRou0.jpeg'

global.redesMenu = [nna, nn, nnn, nnnt, nnntt, nnnttt, md, ig, paypal, yt]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15]
global.gataVidMenu = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
 
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'

global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
                               }
                              }
                             }

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

//Emojis RPG - Referencias
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬 مستوى ',
      limit: lenguajeGB.eDiamante(),
      exp: lenguajeGB.eExp(),
      bank: '🏦 بنك',
      diamond: lenguajeGB.eDiamantePlus(),
      health: '❤️ الصحة',
      kyubi: lenguajeGB.eMagia(),
      joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(),
      stamina: lenguajeGB.eEnergia(),
      role: '💪 دور',
      premium: '🎟️ مميز',
      pointxp: '📧 نقطة إكس بي ',
      gold: lenguajeGB.eOro(),
      
      trash: lenguajeGB.eBasura(),
      crystal: '🔮 بلور',
      intelligence: '🧠 الذكاء ',
      string: lenguajeGB.eCuerda(),
      keygold: '🔑  مفتاح الذهب ',
      keyiron: '🗝️ مفتاح حديد',
      emas: lenguajeGB.ePinata(),
      fishingrod: '🎣 صنارة الصيد ',
      gems: '🍀 ورقة حظ',
      magicwand: '⚕️ العصا السحرية',
      mana: '🪄 يتهجى  ',
      agility: '🤸🏻 رشاقة',
      darkcrystal: '♠️ كريستال داكن',
      iron: lenguajeGB.eHierro(),
      rock: lenguajeGB.eRoca(),
      potion: lenguajeGB.ePocion(),
      superior: '💼  متفوق',
      robo: '🚔 سرقة',
      upgrader: '🧰 ترقيه',
      wood: lenguajeGB.eMadera(),
      
      strength: '🦹‍ ♀️ قوة',
      arc: '🏹  قوس',
      armor: '🥼 درع',
      bow: '🏹 قوس متطور ',
      pickaxe: '⛏️ بيكاكس',
      sword: lenguajeGB.eEspada(),
      
      common: lenguajeGB.eCComun(),
      uncoommon: lenguajeGB.ePComun(),
      mythic: lenguajeGB.eCMistica(),
      legendary: lenguajeGB.eClegendaria(),
      petFood: lenguajeGB.eAMascots(), //?
      pet: lenguajeGB.eCMascota(),//?
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      ayam: '🐓 ديك ',
      babi: '🐖 خنزير',
      Jabali: '🐗 خنزير بري',
      bull: '🐃 ثور',    
      buaya: '🐊 تمساح',    
      cat: lenguajeGB.eGato(),    
      centaur: lenguajeGB.eCentauro(),
      chicken: '🐓 دجاجه',
      cow: '🐄 بقرة', 
      dog: lenguajeGB.ePerro(),
      dragon: lenguajeGB.eDragon(),
      elephant: '🐘 فيل',
      fox: lenguajeGB.eZorro(),
      giraffe: '🦒 زرافة',
      griffin: lenguajeGB.eAve(), //Mascota : Griffin',
      horse: lenguajeGB.eCaballo(),
      kambing: '🐐 ماعز',
      kerbau: '🐃 جاموس ',
      lion: '🦁 أسد',
      money: lenguajeGB.eGataCoins(),
      monyet: '🐒 قرد',
      panda: '🐼 باندا',
      snake: '🐍 افعة',
      phonix: '🕊️ فينيكس',
      rhinoceros: '🦏 وحيد القرن',
      wolf: lenguajeGB.eLobo(),
      tiger: '🐅 نمر',
      cumi: '🦑 حبار ',
      udang: '🦐 جمبري ',
      ikan: '🐟 سمك',
      
      fideos: '🍝 نودلز',
      ramuan: '🧪 مكون جديد ',
      knife: '🔪 سكين'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase()
    let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
    }
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emott[results[0][0]]
  }
}


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emottt = {
      exp: lenguajeGB.eExp(), limit: lenguajeGB.eDiamante(), diamond: lenguajeGB.eDiamantePlus(), joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(), berlian: lenguajeGB.eJoya(), kyubi: lenguajeGB.eMagia(), gold: lenguajeGB.eOro(),
      money: lenguajeGB.eGataCoins(), tiketcoin: lenguajeGB.eGataTickers(), stamina: lenguajeGB.eEnergia(),
            
      potion: lenguajeGB.ePocion(), aqua: lenguajeGB.eAgua(), trash: lenguajeGB.eBasura(), wood: lenguajeGB.eMadera(),
      rock: lenguajeGB.eRoca(), batu: lenguajeGB.ePiedra(), string: lenguajeGB.eCuerda(), iron: lenguajeGB.eHierro(),
      coal: lenguajeGB.eCarbon(), botol: lenguajeGB.eBotella(), kaleng: lenguajeGB.eLata(), kardus: lenguajeGB.eCarton(),
      
      eleksirb: lenguajeGB.eEletric(), emasbatang: lenguajeGB.eBarraOro(), emasbiasa: lenguajeGB.eOroComun(), rubah: lenguajeGB.eZorroG(),
      sampah: lenguajeGB.eBasuraG(), serigala: lenguajeGB.eLoboG(), kayu: lenguajeGB.eMaderaG(), sword: lenguajeGB.eEspada(),
      umpan: lenguajeGB.eCarnada(), healtmonster: lenguajeGB.eBillete(), emas: lenguajeGB.ePinata(), pancingan: lenguajeGB.eGancho(),
      pancing: lenguajeGB.eCanaPescar(),
       
      common: lenguajeGB.eCComun(), uncoommon: lenguajeGB.ePComun(), mythic: lenguajeGB.eCMistica(),
      pet: lenguajeGB.eCMascota(),//?
      gardenboxs: lenguajeGB.eCJardineria(),//?
      legendary: lenguajeGB.eClegendaria(),
      
      anggur: lenguajeGB.eUva(), apel: lenguajeGB.eManzana(), jeruk: lenguajeGB.eNaranja(), mangga: lenguajeGB.eMango(), pisang: lenguajeGB.ePlatano(),
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      centaur: lenguajeGB.eCentauro(), griffin: lenguajeGB.eAve(), kucing: lenguajeGB.eGato(), naga: lenguajeGB.eDragon(),
      fox: lenguajeGB.eZorro(), kuda: lenguajeGB.eCaballo(), phonix: lenguajeGB.eFenix(), wolf: lenguajeGB.eLobo(),
      anjing: lenguajeGB.ePerro(),
 
      petFood: lenguajeGB.eAMascots(), //?
      makanancentaur: lenguajeGB.eCCentauro(), makanangriffin: lenguajeGB.eCAve(),
      makanankyubi: lenguajeGB.eCMagica(), makanannaga: lenguajeGB.eCDragon(), makananpet: lenguajeGB.eACaballo(), makananphonix: lenguajeGB.eCFenix()
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emottt[results[0][0]]
  }
}

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
      money: '🐱', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', //?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
