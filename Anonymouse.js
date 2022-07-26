require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Anony= async (Anony, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Anony.decodeJid(Anony.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await Anony.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!Anony.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            Anony.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await Anony.setStatus(`${Anony.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await Anony.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner 😘`)
        Anony.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

 

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Anony.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Anony.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Anony.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Anony.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
 
switch(command) {
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'react': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Anony.sendMessage(m.chat, reactionMessage)
            }
break 
case 'group': case 'link': {
      
                const templateButtons = [
  {index: 1, urlButton: {displayText: 'Join Our First Group 🥺', url: 'https://chat.whatsapp.com/Llq35p7Wo3DK2unG97N2Oe'}},
  {index: 2, callButton: {displayText: 'Developer ❤️', phoneNumber: '+94 77 103 9631'}},
  {index: 3, quickReplyButton: {displayText: 'How To Get Subtitles 😎', id: 'how'}},
]
		

const buttonMessage = {
	image: {url: 'https://telegra.ph/file/e874cd0a341d48280fbfa.jpg'},
	text: `*🔥𝙵𝙸𝚁𝙴 𝙼𝙾𝚅𝙸𝙴 𝙶𝚁𝙾𝚄𝙿🔥*

'🔥𝙵𝙸𝚁𝙴 𝙼𝙾𝚅𝙸𝙴 𝙶𝚁𝙾𝚄𝙿🔥

Whatsapp හරහා film බල්ලන. එක්වන්න අප්ගේ film සමූහයට. අපෙගේ සමූහයේන් පමනක් ලබාගත හැකි විශෙශ්ෂ feature 2 ක් තියනවා. 

1. අපගේ group වල film upload කරන්නේ. rar file විදිහට නෙවෙයි. ඒක නිසා extract කරන්න මහන්සි වෙන්න ඕනේ නෑ 😎. (❌𝙽𝙾 𝚁𝙰𝚁 𝙵𝙸𝙻𝙴𝚂)

2. 𝚏𝚒𝚕𝚖 එකට 𝚜𝚞𝚋𝚝𝚒𝚝𝚒𝚕𝚎 𝚊𝚍𝚍 කරන්න දගලන්න ඕනේ නෑ 𝚟𝚒𝚍𝚎𝚘 𝚏𝚒𝚕𝚎 එකටම 𝚜𝚞𝚋𝚝𝚒𝚕𝚎 𝚊𝚍𝚍 කරලා තියෙන්නෙ. ඔයාලට පුලුවන් කැමතිනම් 𝚜𝚞𝚋𝚝𝚒𝚝𝚕𝚎 එක 𝙳𝚎𝚜𝚊𝚋𝚕𝚎 කරලා 𝚏𝚒𝚕𝚖 එක බලන්න.

මෙන්න අප්ගේ 𝚐𝚛𝚘𝚞𝚙 𝚕𝚒𝚗𝚔. (𝚐𝚛𝚘𝚞𝚙 සීමිත බැවින් ඉක්මනට 𝚓𝚒𝚘𝚗 වෙන්න) 👇

1 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/DDABFCoorQiBsnnytDGOBs

2 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/DBFb2xv8CRa6Qc5trcTycy

3 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/HWZCmGyobEIGdfS94I3F65

4 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/BW486XJbqxU9lOFRN8KOmt

5 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/LGgfjIyijHA1zrtQv9OnJ0

6 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/FieIO5ePPaYKDhiP9WN1et

7 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/Jfu32pSomwHC1gXu088t91

8 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/JqeGkia4YpH1hEG3AdS8Eq

9 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/E9HRTnX9e5P2UUREPj1p4e

10 𝚐𝚛𝚘𝚞𝚙 👉 https://chat.whatsapp.com/Llq35p7Wo3DK2unG97N2Oe


⚠️එක 𝚐𝚛𝚘𝚞𝚙 එකකට විතරක් 𝚓𝚘𝚒𝚗 වෙන්න 𝚐𝚛𝚘𝚞𝚙 2,  3 ක ඉන්නවනම් 𝚕𝚎𝚏𝚝 වෙන්න නැත්තම් ඔක්කම 𝚐𝚛𝚘𝚞𝚙 වලින්  𝚛𝚎𝚖𝚘𝚟𝚎 කරනවා.⚠️'`,
    footer: 'Fire Films By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
    templateButtons: templateButtons,
    headerType: 4
}
Anony.sendMessage(m.chat, buttonMessage, { quoted: m})
}
break


case 'how' : {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	let how = `ඔබට අවශ්‍ය සබ්ටයිටල්ස් ලබා ගැනීමට නම් ප්‍රතමයෙන්ම Subtitle list එකේ ඔබට අව්ශ්‍ය චිත්‍රපටයේ නම තිබේදැයි බලන්න....පසුව ඔබට අවශ්‍ය චිත්‍රපටයේ නම ඉන්ග්‍රීසි සිම්පල් අකුරු මගින් ඔබගේ චිත්‍රපටයේ නම ටයිප් කර එවන්න එවිට සින්හල සබ්ටයිටල් ඔබ වෙත ලැබෙනු ඇත.... Ex:-   (  commando  )`
	
                let buttons = [
                    {buttonId: `list`, buttonText: {displayText: 'Subtitle List 🥵'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/e874cd0a341d48280fbfa.jpg' },
                    caption: how ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
		
case 'subtitle': case 'subtitles': case 'sub': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `group`, buttonText: {displayText: 'How to Get Subtitles 😎'}, type: 1},
                    {buttonId: `list`, buttonText: {displayText: 'Subtitle List 🥵'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/e874cd0a341d48280fbfa.jpg' },
                    caption: `Select Your Option 🥵`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

		

            
            case 'list' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	let list = `${pushname} 😎 Welcome to Our Subtitle Bot

*??? ??????  film ??? ???? mg ????????. ??? ?????? ?? film ?? ???? subtitles ?? ?????? ??. ?? (??? ice age film ??? subtitles ?????? ??? ??? 1 type ?? sent ?? ?????.)*

1 ice-age
2 Heropanti
3 transylvania
4 harrypotter
5 ghost-rider
6 frozen
7 olafs-frozen-adventure-2017
8 gangubai-kathiawadi
9 everything-everywhere-all-at-once
10 free-guy-2021
11 dj-tillu
12 don-2022
13 deadpool
14 bird-box
15 black-panther
16 bhool-bhulaiyaa
17 bheeshma-2020
18 aquaman-2018
19 annabelle
20 ford-v-ferrari-2019
21 acharya-2022
22 army-of-the-dead-2021
23 12th-man
24 watcher-2022
25 war-2019
26 transformers
27 thor
28 conjuring
29 the-three-stooges-2012
30 avengers
31 the-nun-2018
32 shiddat
33 pushpa-the-rise
34 maleficent
35 commando
36 doctor-strange-2016
37 attack
38 captain marvel
39 morbius
40 x men
41 captain america 
42 venom 
43 guardians-of-the-galaxy
44 fantastic-four
45 iron man
46 spider man
`

                let buttons = [
                    {buttonId: `how`, buttonText: {displayText: 'How to Get Subtitle 🥵'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/e874cd0a341d48280fbfa.jpg' },
                    caption: list ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
//Harry Potter

case 'harrypotter': case 'harry-potter': case 'potter': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `harrypotter1-4`, buttonText: {displayText: 'Harry Potter 1 - 4 ♠️'}, type: 1},
                    {buttonId: `harrypotter5-8`, buttonText: {displayText: 'Harry Potter 5 - 8 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/612bb7d836a303ff7b577.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
//conjuring

case 'conjuring': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `the-conjuring`, buttonText: {displayText: 'The Conjuring 1 ♠️'}, type: 1},
                    {buttonId: `the-conjuring-2`, buttonText: {displayText: 'The Conjuring 2 ♠️'}, type: 1},
                    {buttonId: `the-conjuring-3`, buttonText: {displayText: 'The Conjuring 3 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://static.wikia.nocookie.net/headhuntersholosuite/images/1/14/Conjuring_III%2C_The.jpg/revision/latest?cb=20200101165550' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
//Commando

case 'commando': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `commando-2013`, buttonText: {displayText: 'Commando 1 ♠️'}, type: 1},
                    {buttonId: `commando-2`, buttonText: {displayText: 'Commando 2 🔐'}, type: 1},
                    {buttonId: `commando-3`, buttonText: {displayText: 'Commando 3 ♠️'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://i.pinimg.com/564x/39/eb/f2/39ebf25c55a844d5e94968169ec40940.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'harrypotter1-4': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
            let harry1 = 'https://www.baiscopelk.com/Downloads/harry_potter_and_the_philosophers_stone_2001-zip/'
            let harry2 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-chamber-of_-secrets-2002-zip/'
            let harry3 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-prisoner-of_-azkaban-2004-zip/'
            let harry4 = 'https://www.baiscopelk.com/Downloads/harry-potter-and-the-goblet-of-fire-2005-zip/'
            
                Anony.sendMessage(m.chat, { document: { url: harry1 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-1-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry2 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-2-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry3 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-3-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry4 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-4-Fire-Anony-Sub.zip`}, { quoted: m })
             }
             break
             
case 'harrypotter5-8': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
            let harry5 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-order_-of_-the_-phoenix-2007-zip/'
            let harry6 = 'https://www.baiscopelk.com/wp-content/uploads/2017/02/Harry_Potter_and_the_Half_Blood_Prince_2009.si_.srt'
            let harry7 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-deathly-hallows-part_-1-2010-zip/'
            let harry8 = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-deathly-hallows-part_-2-2011-sinhala-sub_-zip/'
             
                Anony.sendMessage(m.chat, { document: { url: harry5 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-5-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry6 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-6-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry7 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-7-Fire-Anony-Sub.zip`}, { quoted: m })
                Anony.sendMessage(m.chat, { document: { url: harry8 }, mimetype: 'application/octet-stream', fileName: `Harrypotter-8-Fire-Anony-Sub.zip`}, { quoted: m })
             }
             break
             
             //Forzen
		
//marvel-list		
		
case 'marvel': case 'marvels': case 'mcu': case 'marvel-list-back': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `marvel-list`, buttonText: {displayText: 'Marvel film list ❤️'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/d7ad7762003b9922a6d9c.jpg' },
                    caption: `MCU films ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'marvel-list': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `spider-man`, buttonText: {displayText: 'spider man ♠️'}, type: 1},
                    {buttonId: `iron-man`, buttonText: {displayText: 'iron man 🔐'}, type: 1},
                    {buttonId: `nextmarvel`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/dd76bd699739a271bf703.jpg' },
                    caption: `Select Your film series ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nextmarvel': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `fantastic-four`, buttonText: {displayText: 'fantastic four ♠️'}, type: 1},
                    {buttonId: `doctor-strange`, buttonText: {displayText: 'doctor strange 🔐'}, type: 1},
                    {buttonId: `nextmarve2`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/9d7caf001ff06759d9524.jpg' },
                    caption: `Select Your film series ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nextmarve2': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `guardians-of-the-galaxy`, buttonText: {displayText: 'guardians of the galaxy ♠️'}, type: 1},
                    {buttonId: `venom`, buttonText: {displayText: 'venom 🔐'}, type: 1},
                    {buttonId: `nextmarve3`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/9054d7a17863e60ac0f8d.jpg' },
                    caption: `Select Your film series ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

		
case 'nextmarve3': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `x-men`, buttonText: {displayText: 'x men ♠️'}, type: 1},
                    {buttonId: `captain-america`, buttonText: {displayText: 'captain america 🔐'}, type: 1},
                    {buttonId: `nextmarve4`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/ec7a7eaf9d307d2abab7e.jpg' },
                    caption: `Select Your film series ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nextmarve4': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `morbius`, buttonText: {displayText: 'Morbius ♠️'}, type: 1},
                    {buttonId: `captain-marvel`, buttonText: {displayText: 'captain marvel 🔐'}, type: 1},
                    {buttonId: `thor1`, buttonText: {displayText: 'Thor ♠️'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/b7c8e1b5cde7be462cd4e.jpg' },
                    caption: `Select Your film series ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


//spider-man


case 'spider-man': case 'nexspider-0': case 'spiderman': case 'spider': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `spider-man-2002`, buttonText: {displayText: '🕷 Spider Man 1 (2002)'}, type: 1},
                    {buttonId: `spider-man-2-2004`, buttonText: {displayText: '🕷 Spider Man 2 (2004)'}, type: 1},
                    {buttonId: `nexspider`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/05a46a3fdb477c54b9a43.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nexspider': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `spider-man-3-2007`, buttonText: {displayText: '🕷 Spider Man 3 (2007)'}, type: 1},
                    {buttonId: `the-amazing-spider-man-2012`, buttonText: {displayText: '🕷 The Amazing Spider Man (2012)'}, type: 1},
                    {buttonId: `nexspider1`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/7ec303eac3eb1b4764f4a.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nexspider1': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `the-amazing-spider-man-2-2014`, buttonText: {displayText: '🕷 The Amazing Spider Man 2 (2014)'}, type: 1},
                    {buttonId: `spider-man-homecoming-2017`, buttonText: {displayText: '🕷 Spider Man Homecomming (2017)'}, type: 1},
                    {buttonId: `nexspider2`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/37af95b10e23c620448c4.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nexspider2': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `spider-man-far-from-home-2019`, buttonText: {displayText: '🕷 Spider Man Far From Home (2019) ♠️'}, type: 1},
                    {buttonId: `spider-man-no-way-home-2021`, buttonText: {displayText: '🕷 Spider Man No Way Home (2021) 🔐'}, type: 1},
                    {buttonId: `nexspider-0`, buttonText: {displayText: 'BACK ⇚'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/9c30a7ba06e22587e6f29.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//iron man

case 'iron-man': case 'iron': case 'ironman': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `iron-man-1`, buttonText: {displayText: '🧿 Iron Man 1 (2008)'}, type: 1},
                    {buttonId: `iron-man-2`, buttonText: {displayText: '🧿 Iron Man 2 (2010)'}, type: 1},
                    {buttonId: `iron-man-3`, buttonText: {displayText: '🧿 Iron Man 3 (2013)'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/6122aba80fe12044549f7.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//fantastic-four

case 'fantastic-four': case 'fantasticfour': case 'fantastic': case '44': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `fantastic-four-2005`, buttonText: {displayText: '♣️ Fantastic Four (2005)'}, type: 1},
                    {buttonId: `fantastic-four-2007`, buttonText: {displayText: '♣️ Fantastic Four (2007)'}, type: 1},
                    {buttonId: `fantastic-four-2015`, buttonText: {displayText: '♣️ Fantastic Four (2015)'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/9048331e23b4ec468346e.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//doctor-strange

case 'doctor-strange': case 'doctorstrange': case 'doctorstrange2': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `doctor-strange-2016`, buttonText: {displayText: '🩺 Doctor strange (2016)'}, type: 1},
                    {buttonId: `doctor-strange-2`, buttonText: {displayText: '🩺 Doctor strange 2 (2022)'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/af407b60728d474dd7342.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//guardians-of-the-galaxy

case 'guardians-of-the-galaxy': case 'guardiansofthegalaxy': case 'guardians': case '43': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `guardians-of-the-galaxy-2014`, buttonText: {displayText: '🪐 Guardians Of The Galaxy (2014)'}, type: 1},
                    {buttonId: `guardians-of-the-galaxy-vol-2-2017`, buttonText: {displayText: '🪐 Guardians Of The Galaxy vol 2 (2017)'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/a0c806abf15eee5f8a721.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//venom

case 'venom': case 'venom1': case 'venom2': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `venom-2018`, buttonText: {displayText: '🎃 Venom (2018)'}, type: 1},
                    {buttonId: `venom-let-there-be-carnage-2021`, buttonText: {displayText: '🎃 Venom Let There Be Carnage (2021)'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/6e2477ec55828b482a004.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//capton-amrica
case 'captain-america': case 'captainamerica': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `captain-america-2011`, buttonText: {displayText: '🔰 Captain America (2011)'}, type: 1},
                    {buttonId: `captain-america-2-2014`, buttonText: {displayText: '🔰 Captain America 2 (2010)'}, type: 1},
                    {buttonId: `captain-america-3-2016`, buttonText: {displayText: '🔰 Captain America 3 (2013)'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/22c6172773f36705a9d51.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
//x-men

case 'x-men': case 'xmen': case 'xmenindex': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `x-men-2000`, buttonText: {displayText: '💠 X Men (2000)'}, type: 1},
                    {buttonId: `x2-2003`, buttonText: {displayText: '💠 X2 (2003)'}, type: 1},
                    {buttonId: `nexxmen`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/28d4ffb19e8bae8471176.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nexxmen': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `x-men-the-last-stand-2006`, buttonText: {displayText: '💠 X Men The Last Stand (2006)'}, type: 1},
                    {buttonId: `x-men-origins-wolverine-2009`, buttonText: {displayText: '💠 X Men Origins Wolverine (2009)'}, type: 1},
                    {buttonId: `nexxmen1`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/2cb4ad6ae95556d38289d.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nexxmen1': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `x-men-first-class-2011`, buttonText: {displayText: '💠 X Men First Class (2011)'}, type: 1},
                    {buttonId: `x-men-days-of-future-past-2014`, buttonText: {displayText: '💠 X Men Days of Future Past (2014)'}, type: 1},
                    {buttonId: `nexxmen2`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/9b42833313d7a439688f4.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nexxmen2': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `x-men-apocalypse-2016`, buttonText: {displayText: '💠 X Men Apocalypse (2016)'}, type: 1},
                    {buttonId: `x-men-dark-phoenix-2019`, buttonText: {displayText: '💠 X Men Dark Phoenix (2019)'}, type: 1},
                    {buttonId: `xmenindex`, buttonText: {displayText: 'BACK ⇚'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/51189c1662dec58dc5380.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//morbius

case 'morbius': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `morbius-2022`, buttonText: {displayText: '♣️ Morbius (2022)'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/d5eee2f09d23cbf193d28.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

// captain-marvel

case 'captain-marvel': case 'captainmarvel': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `captain-marvel-2019`, buttonText: {displayText: '♣️ Captain Marvel (2019)'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/42001fdeb487ef7de21fe.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//ice age
case 'iceage': case 'ice-age': case 'backiceage': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `ice-age-the-great-egg-scapade-2016`, buttonText: {displayText: 'Ice Age 2016 ♠️'}, type: 1},
                    {buttonId: `ice-age-dawn-of-the-dinosaurs-2009`, buttonText: {displayText: 'Ice Age 2009 🔐'}, type: 1},
                    {buttonId: `nexticeage`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://image.tmdb.org/t/p/w500/stQoHvo0q6ZcEkji2Z1wlAxKnDq.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


case 'nexticeage': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `ice-age-the-meltdown-2006`, buttonText: {displayText: 'Ice Age 2006 ♠️'}, type: 1},
                    {buttonId: `ice-age-2002`, buttonText: {displayText: 'Ice Age 2002 🔐'}, type: 1},
                    {buttonId: `backiceage`, buttonText: {displayText: 'BACK ⇚'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://image.tmdb.org/t/p/w500/stQoHvo0q6ZcEkji2Z1wlAxKnDq.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
//heropanti
case 'heropanti': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `heropanti-2`, buttonText: {displayText: 'Heropanti 2 ♠️'}, type: 1},
                    {buttonId: `heropanti-2014`, buttonText: {displayText: 'Heropanti 2014 🔐'}, type: 1}
                          
                ]
                let buttonMessage = {
                    image: { url: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2014/05/heropanti-review-new-horizontal-size-image_0.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
		
		
//maleficent
case 'maleficent': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `maleficent-2014`, buttonText: {displayText: 'Maleficent 2014 ♠️'}, type: 1},
                    {buttonId: `maleficent-mistress-of-evil-2019`, buttonText: {displayText: 'Maleficent Mistress of evil 2019 🔐'}, type: 1}
                          
                ]
                let buttonMessage = {
                    image: { url: 'https://amc-theatres-res.cloudinary.com/v1608341852/amc-cdn/production/2/movies/53700/53730/Poster/p_800x1200_AMC_MaleficentMistressOfEvil_En_09292020.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break		
		
		
		
//avengers
case 'avengers': case 'avengers-0': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `the-avengers-2012`, buttonText: {displayText: 'The Avengers 2012♠️'}, type: 1},
                    {buttonId: `avengers-age-of-ultron-2015`, buttonText: {displayText: 'Avengers Age of ultron 2015 🔐'}, type: 1},
                    {buttonId: `nextav`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://popcornusa.s3.amazonaws.com/gallery/1556236132-marvels-.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nextav': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `avengers-infinity-war-2018`, buttonText: {displayText: 'Avengers Infinity war 2018♠️'}, type: 1},
                    {buttonId: `avengers-endgame-2019`, buttonText: {displayText: 'Avengers Endgame 2019 🔐'}, type: 1},
                    {buttonId: `avengers-0`, buttonText: {displayText: 'BACK ⇚'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
		

//transylvania
case 'transylvania': case 'hotel-transylvania': case 'backhotel': case 'hotel': case 'hoteltransylvania': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `transylvania-2012`, buttonText: {displayText: 'Transylvania 1 ♠️'}, type: 1},
                    {buttonId: `transylvania-2`, buttonText: {displayText: 'Transylvania 2 🔐'}, type: 1},
                    {buttonId: `nexthotel`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://pics.filmaffinity.com/Hotel_Transylvania_4-483494855-large.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'nexthotel': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `transylvania-3`, buttonText: {displayText: 'Transylvania 3 ♠️'}, type: 1},
                    {buttonId: `transylvania-4`, buttonText: {displayText: 'Transylvania 4 🔐'}, type: 1},
                    {buttonId: `backhotel`, buttonText: {displayText: 'BACK ⇚'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://pics.filmaffinity.com/Hotel_Transylvania_4-483494855-large.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
		
//ghost rider
case 'ghost-rider': case 'ghostrider': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `ghost-rider-spirit-of-vengeance-2011`, buttonText: {displayText: 'Ghost Rider 2011♠️'}, type: 1},
                    {buttonId: `ghost-rider-2007`, buttonText: {displayText: 'Ghost Rider 2007 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://cdn.shopify.com/s/files/1/2059/7683/products/Ghost_Rider_1_Ryan_Stegman_Variant.png?v=1646951234' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
//dead pool
case 'deadpool': case 'dead-pool': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `deadpool-2`, buttonText: {displayText: 'Dead Pool 2 ♠️'}, type: 1},
                    {buttonId: `deadpool-1`, buttonText: {displayText: 'Dead Pool 1 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
//bhool-bhulaiyaa
case 'bhool-bhulaiyaa': case 'bhoolbhulaiyaa': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `bhool-bhulaiyaa-1`, buttonText: {displayText: 'Bhool Bhulaiyaa 1 ♠️'}, type: 1},
                    {buttonId: `bhool-bhulaiyaa-2`, buttonText: {displayText: 'Bhool Bhulaiyaa 2 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://i.scdn.co/image/ab67616d0000b2734cfe2d352da6d7910961377f' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
//annabelle
case 'annabelle': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `annabelle-comes-home-2019`, buttonText: {displayText: 'Annabelle 2019 ♠️'}, type: 1},
                    {buttonId: `annabellecreation-2017`, buttonText: {displayText: 'Annabelle 2017 🔐'}, type: 1},
                    {buttonId: `annabelle-2014`, buttonText: {displayText: 'Annabelle 2014 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
	
	
//frozen
case 'frozen': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `frozen-2013`, buttonText: {displayText: 'frozen 1 ♠️'}, type: 1},
                    {buttonId: `olafs-frozen-adventure-2017`, buttonText: {displayText: 'olafs frozen 🔐'}, type: 1},
                    {buttonId: `frozen-2-2019`, buttonText: {displayText: 'frozen 2 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_FMjpg_UX1000_.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break	
	
	
	
//transformers
	case 'transformers': case 'backtrans': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `transformers-the-last-knight-2017`, buttonText: {displayText: 'Transformers 2017 ♠️'}, type: 1},
                    {buttonId: `transformers-age-of-extinction-2014`, buttonText: {displayText: 'Transformers 2014 🔐'}, type: 1},
                    {buttonId: `nexttrans`, buttonText: {displayText: 'NEXT ⇛'}, type: 1}

                   
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
case 'nexttrans': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `transformers-dark-of-the-moon-2011`, buttonText: {displayText: 'Transformers 2011 ♠️'}, type: 1},
                    {buttonId: `transformers-revenge-of-the-fallen-2009`, buttonText: {displayText: 'Transformers 2009 🔐'}, type: 1},
                    {buttonId: `next1trans`, buttonText: {displayText: 'NEXT ⇛'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
case 'next1trans': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `transformers-2007`, buttonText: {displayText: 'Transformers 2007 ♠️'}, type: 1},
                    {buttonId: `nexttrans`, buttonText: {displayText: 'BACK ⇚'}, type: 1},
                    {buttonId: `backtrans`, buttonText: {displayText: 'HOME ⇱'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_.jpg' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
//thor
case 'thor': case 'thor1': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `thor-2011`, buttonText: {displayText: 'Thor 2011 ♠️'}, type: 1},
                    {buttonId: `thor-the-dark-world-2013`, buttonText: {displayText: 'Thor 2013 🔐'}, type: 1},
                    {buttonId: `thor-ragnarok-2017`, buttonText: {displayText: 'Thor 2017 ♠️'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://igimages.gumlet.io/tamil/home/thor14062022m7.jpg?w=376&dpr=2.6' },
                    caption: `Select Your Subtitle ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


//tv-s

case 'tv-s': case 'tv': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `tv-list`, buttonText: {displayText: 'TV Series list ⇗'}, type: 1},

                   
                ]
                let buttonMessage = {
                    image: { url: 'https://www.thisisourbliss.com/wp-content/uploads/2020/03/The-Best-Shows-to-Binge-Watch-Right-Now-This-is-our-Bliss.jpg' },
                    caption: `Select Your TV Series ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

            case 'tv-list' : {
				if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	let list = `${pushname} 😎 Welcome to Our Subtitle Bot

1. Game of thrones --> subtitles ලබා ගැනිමට got ලෙස type කර send කරන්න.

2. Money Hists  --> subtitles ලබා ගැනිමට mh ලෙස type කර send කරන්න.

3. Cobra kai --> subtitles ලබා ගැනිමට ck ලෙස type කර send කරන්න.

4. Inside Edge --> subtitles ලබා ගැනිමට ih ලෙස type කර send කරන්න.

5. Legend of the Seeker --> subtitles ලබා ගැනිමට ls ලෙස type කර send කරන්න.

6. Kingdom --> subtitles ලබා ගැනිමට kd ලෙස type කර send කරන්න.


*ඉදියේදී තවත් tv series සදහා උපසිරස් බලාපොරොත්තු වන්න. 😇*
`

                let buttons = [
                    {buttonId: `how`, buttonText: {displayText: 'More Information for Get Subtitle 🥵'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/e874cd0a341d48280fbfa.jpg' },
                    caption: list ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



//got-all

case 'got': case 'got-0': case 'gameofthrones': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `got-s1`, buttonText: {displayText: '⚔️ GOT S1'}, type: 1},
                    {buttonId: `got-s2`, buttonText: {displayText: '⚔️ GOT S2'}, type: 1},
                    {buttonId: `gotnext1`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg' },
                    caption: `Select Your season ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'gotnext1': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `got-s3`, buttonText: {displayText: '⚔️ GOT S3'}, type: 1},
                    {buttonId: `got-s4`, buttonText: {displayText: '⚔️ GOT S4'}, type: 1},
                    {buttonId: `gotnext2`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://flxt.tmsimg.com/assets/p8553063_b_v13_ay.jpg' },
                    caption: `Select Your Season ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


case 'gotnext2': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `got-s5`, buttonText: {displayText: '⚔️ GOT S5'}, type: 1},
                    {buttonId: `got-s6`, buttonText: {displayText: '⚔️ GOT S6'}, type: 1},
                    {buttonId: `gotnext3`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg' },
                    caption: `Select Your Season ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'gotnext3': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `got-s7`, buttonText: {displayText: '⚔️ GOT S7'}, type: 1},
                    {buttonId: `got-s8`, buttonText: {displayText: '⚔️ GOT S8'}, type: 1},
                    {buttonId: `tv-s`, buttonText: {displayText: 'HOME ⇱'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://flxt.tmsimg.com/assets/p8553063_b_v13_ay.jpg' },
                    caption: `Select Your Season ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//money-heist

case 'moneyheist': case 'mh': case 'money-heist': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `money-heist-s1`, buttonText: {displayText: '💸 S1-Money Heist'}, type: 1},
                    {buttonId: `money-heist-s2`, buttonText: {displayText: '💸 S2-Money Heist'}, type: 1},
                    {buttonId: `moneyheistnext1`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
case 'moneyheistnext1': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `money-heist-s3`, buttonText: {displayText: '💸 S3-Money Heist'}, type: 1},
                    {buttonId: `money-heist-s4`, buttonText: {displayText: '💸 S4-Money Heist'}, type: 1},
                    {buttonId: `money-heist-s5`, buttonText: {displayText: '💸 S5-Money Heist'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg' },
                    caption: `Select Your Season ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


//Inside-Edge --->

case 'InsideEdge': case 'ih': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `inside-edge-s01`, buttonText: {displayText: '💠 Inside-Edge-S1'}, type: 1},
                    {buttonId: `inside-edge-s02`, buttonText: {displayText: '💠 Inside-Edge-S2'}, type: 1},
                    {buttonId: `tv-s`, buttonText: {displayText: 'HOME ⇱'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMDUyNjVmYTItODE2My00NzFmLWFhOTMtMWQ2NGYwNjFmOWUxXkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg' },
                    caption: `Select Your film ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//Legend.of.the.Seeker --->

case 'legendoftheseeker': case 'ls': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `legend.of.the.seeker.s01`, buttonText: {displayText: '🗡 S01 Legend of the Seeker'}, type: 1},
                    {buttonId: `legend.of.the.seeker.s02`, buttonText: {displayText: '🗡 S02 Legend of the Seeker'}, type: 1},
                    {buttonId: `tv-s`, buttonText: {displayText: 'HOME ⇱'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://cdnb.artstation.com/p/assets/images/images/009/927/703/large/kris-ugoh-lofts.jpg?1521629737' },
                    caption: `Select Your Season ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//Kingdom-all
             
case 'Kingdom': case 'kd': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `kingdom-s01`, buttonText: {displayText: '⚜️ Kingdom S01'}, type: 1},
                    {buttonId: `kingdom-s02`, buttonText: {displayText: '⚜️ Kingdom S02'}, type: 1},
                    {buttonId: `tv-s`, buttonText: {displayText: 'HOME ⇱'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BNTBlZmE4YzItNTY5Mi00NmIxLTlhZTAtOWIxNjFlNTMzNmI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg' },
                    caption: `Select Your Season ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

//cobra-kai

case 'Cobra-Kai-S01': case 'ck': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `cobra-kai-s01`, buttonText: {displayText: '🐍 Cobra Kai S01'}, type: 1},
                    {buttonId: `cobra-kai-s02`, buttonText: {displayText: '🐍 Cobra Kai S02'}, type: 1},
                    {buttonId: `cobrakainext`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BOTE1M2Q3YjQtZGMzYy00MDcwLWIzNzctYzI3MDBhMjBmYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg' },
                    caption: `Select Your Season ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'cobrakainext': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
                let buttons = [
                    {buttonId: `cobra-kai-s03`, buttonText: {displayText: '🐍 Cobra Kai S03'}, type: 1},
                    {buttonId: `cobra-kai-s04`, buttonText: {displayText: '🐍 Cobra Kai S04'}, type: 1},
                    {buttonId: `cobra-kai-s05`, buttonText: {displayText: '🐍 Cobra Kai S05'}, type: 1},
                   

                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BOTE1M2Q3YjQtZGMzYy00MDcwLWIzNzctYzI3MDBhMjBmYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg' },
                    caption: `Select Your Season ❤️`,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

            //Film List

case 'attack': 
case 'commando-2013': 
case 'commando-2': 
case 'commando-3': 
case 'ice-age-the-great-egg-scapade-2016': 
case 'ice-age-dawn-of-the-dinosaurs-2009': 
case 'ice-age-the-meltdown-2006': 
case 'ice-age-2002': 
case 'heropanti-2': 
case 'heropanti-2014': 
case 'transylvania-4': 
case 'transylvania-3':
case 'transylvania-2': 
case 'transylvania-2012': 
case 'harry-potter-and-the-deathly-hallows-part-2-2011': 
case 'harry-potter-and-the-deathly-hallows-part-1-2010': 
case 'harry-Potter-and-the-Half-Blood-Prince-2009': 
case 'harry-potter-and-the-order-of-the-phoenix-2007': 
case 'harry-potter-and-the-goblet-of-fire-2005': 
case 'harry-potter-and-the-prisoner-of-azkaban-2004': 
case 'harry-potter-and-the-chamber-of-secrets-2002': 
case 'harry-potter-and-the-philosophers-stone-2001': 
case 'ghost-rider-spirit-of-vengeance-2011': 
case 'ghost-rider-2007': 
case 'gangubai-kathiawadi': 
case 'frozen-2-2019': 
case 'olafs-frozen-adventure-2017': 
case 'frozen-2013': 
case 'free-guy': 
case 'everything-everywhere-all-at-once':  	
case 'don': 
case 'dj-tillu': 
case 'deadpool-2': 
case 'deadpool-1': 
case 'black-panther': 
case 'bird-box': 
case 'bhool-bhulaiyaa-2': 
case 'bhool-bhulaiyaa-1': 
case 'bheeshma': 
case 'aquaman': 
case 'annabelle-comes-home-2019': 
case 'annabellecreation-2017': 
case 'annabelle-2014': 
case 'ford-v-ferrari': 
case 'acharya': 
case 'army-of-the-dead': 
case '12th-man': 
case 'watcher':
case 'war': 
case 'transformers-the-last-knight-2017': 
case 'transformers-age-of-extinction-2014': 
case 'transformers-dark-of-the-moon-2011': 
case 'transformers-revenge-of-the-fallen-2009': 
case 'transformers-2007': 
case 'thor-ragnarok-2017': 
case 'thor-the-dark-world-2013': 
case 'thor-2011': 
case 'the-conjuring-3': 
case 'the-conjuring-2': 
case 'the-conjuring': 
case 'the-three-stooges-2012': 
case 'the-nun-2018': 
case 'avengers-endgame-2019': 
case 'avengers-infinity-war-2018': 
case 'avengers-age-of-ultron-2015': 
case 'the-avengers-2012': 
case 'shiddat': 
case 'pushpa-the-rise': 
case 'maleficent-mistress-of-evil-2019': 
case 'maleficent-2014': 
case 'doctor-strange':
case 'doctor-strange-2':
case 'doctor-strange-2016':
case 'morbius-2022':
case 'captain-marvel-2019':
case 'captain-america-3-2016':
case 'captain-america-2-2014':
case 'captain-america-2011':
case 'x-men-dark-phoenix-2019':
case 'x-men-apocalypse-2016':
case 'x-men-days-of-future-past-2014':
case 'x-men-first-class-2011':
case 'x-men-origins-wolverine-2009':
case 'x-men-the-last-stand-2006':
case 'x2-2003':
case 'x-men-2000':
case 'venom-let-there-be-carnage-2021':
case 'venom-2018':
case 'spider-man-no-way-home-2021':
case 'spider-man-far-from-home-2019':
case 'spider-man-homecoming-2017':
case 'the-amazing-spider-man-2-2014':
case 'the-amazing-spider-man-2012':
case 'spider-man-3-2007':
case 'spider-man-2-2004':
case 'spider-man-2002':
case 'guardians-of-the-galaxy-vol-2-2017':
case 'guardians-of-the-galaxy-2014':
case 'fantastic-four-2015':
case 'fantastic-four-2007':
case 'fantastic-four-2005':
case 'iron-man-3':
case 'iron-man-2':
case 'got-s1':
case 'got-s2':
case 'got-s3':
case 'got-s4':
case 'got-s5':
case 'got-s6':
case 'got-s7':
case 'got-s8':
case 'inside-edge-s01':
case 'inside-edge-s02':
case 'invincible-s01':
case 'legend.of.the.seeker.s01':
case 'legend.of.the.seeker.s02':
case 'money-heist-s1': 
case 'money-heist-s3':
case 'money-heist-s2':
case 'money-heist-s4':
case 'money-heist-s5':
case 'cobra-kai-s01':
case 'cobra-kai-s02':
case 'cobra-kai-s03':
case 'cobra-kai-s04':
case 'cobra-kai-s05':
case 'kingdom-s01':
case 'kingdom-s02':
case 'testt':
case 'test':
case 'invincible-S01':

case 'iron-man-1': {
             
             let link
             if (/attack/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ap1-2022/'
	
	     if (/testt/.test(command)) link = 'https://dl1.plazairan.com/Movie/The.Nun.2018/The.Nun.2018.1080p.BluRay.6CH.x265.mkv/'
	     if (/test/.test(command)) link = 'https://filmszilla.lk/links/kpdl6bahhx/'
	
             if (/commando-2013/.test(command)) link = 'https://www.baiscopelk.com/Downloads/commando-2013-2/'
             if (/commando-2/.test(command)) link = 'https://www.baiscopelk.com/Downloads/commando-2-2017-2/'
             if (/commando-3/.test(command)) link = 'https://www.baiscopelk.com/Downloads/commando-3-2019-zip/'

             if (/iron-man/.test(command)) link = 'https://www.baiscopelk.com/Downloads/iron-man-2008-3/'
             if (/iron-man-2/.test(command)) link = 'https://www.baiscopelk.com/Downloads/iron-man-2-2010-2/'
             if (/iron-man-3/.test(command)) link = 'https://www.baiscopelk.com/Downloads/iron-man-3-2013-br/'

             if (/fantastic-four-2005/.test(command)) link = 'https://www.baiscopelk.com/Downloads/fantastic-four-2005/'
             if (/fantastic-four-2007/.test(command)) link = 'https://www.baiscopelk.com/Downloads/fantastic-4-rise-otss-2007-baiscopelk/'
             if (/fantastic-four-2015/.test(command)) link = 'https://www.baiscopelk.com/Downloads/fantastic-four-2015-br/'

             if (/guardians-of-the-galaxy-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/guardians-of-the-galaxy-2014-br/'
             if (/guardians-of-the-galaxy-vol-2-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/guardians-of-the-galaxy-vol-2-2017-br/'

             if (/spider-man-2002/.test(command)) link = 'https://www.baiscopelk.com/Downloads/spider-man-2002/'
             if (/spider-man-2-2004/.test(command)) link = 'https://www.baiscopelk.com/Downloads/spider-man-2-2004-br-zip/'
             if (/spider-man-3-2007/.test(command)) link = 'https://www.baiscopelk.com/Downloads/spider-man-3-2007-br-zip/'
             if (/the-amazing-spider-man-2012/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-amazing-spider-man-2012/'
             if (/the-amazing-spider-man-2-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-amazing-spider-man-2-2014-2/'
             if (/spider-man-homecoming-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/spider-man-homecoming-2017-br-zip/'
             if (/spider-man-far-from-home-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/spider-man-far-from-home-2019-br-zip/'
             if (/spider-man-no-way-home-2021/.test(command)) link = 'https://www.baiscopelk.com/Downloads/spider-man-no-way-home-2021-blu-ray/'

             if (/venom-2018/.test(command)) link = 'https://www.baiscopelk.com/Downloads/venom-2018-blu-ray-update/'
             if (/venom-let-there-be-carnage-2021/.test(command)) link = 'https://www.baiscopelk.com/Downloads/venom-let-there-be-carnage-2021-blu-ray/'

             if (/x-men-2000/.test(command)) link = 'https://www.baiscopelk.com/Downloads/x-men-2000/'
             if (/x2-2003/.test(command)) link = 'https://www.baiscopelk.com/Downloads/x2-2003/'
             if (/x-men-the-last-stand-2006/.test(command)) link = 'https://www.baiscopelk.com/Downloads/x-men-the-last-stand-2006/'
             if (/x-men-origins-wolverine-2009/.test(command)) link = 'https://www.baiscopelk.com/Downloads/x-men-origins-wolverine-2009/'
             if (/x-men-first-class-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/x-men-first-class-2011/'
             if (/x-men-days-of-future-past-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/x-men-days-of-future-past-2014-br/'
             if (/x-men-apocalypse-2016/.test(command)) link = 'https://www.baiscopelk.com/Downloads/x-men-apocalypse-2016-baiscopelk-com-br/'
             if (/x-men-dark-phoenix-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/x-men-dark-phoenix-2019-1-zip/'

             if (/captain-america-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/captain-america-the-first-avenger-2011/'
             if (/captain-america-2-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/captain-america-the-winter-soldier-2014-3/'
             if (/captain-america-3-2016/.test(command)) link = 'https://www.baiscopelk.com/Downloads/captain-america-civil-war-2016-brnew-baiscopelk-com-rar/'

             if (/captain-marvel-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/captain-marvel-2019-bluray-update-0-3-zip/'

             if (/morbius-2022/.test(command)) link = 'https://www.baiscopelk.com/Downloads/morbius-2022-blu-ray/'


             if (/doctor-strange-2016/.test(command)) link = 'https://www.baiscopelk.com/Downloads/doctor-strange-2016-baiscopelk/'
             if (/doctor-strange-2/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Doctor-Strange-in-the-Multiverse-of-Madness-2022-Sinhala-Subtitles-V2.zip'

             if (/maleficent-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/maleficent-2014-br/'
             if (/maleficent-mistress-of-evil-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/maleficent-mistress-of-evil-2019-blu-ray/'

             if (/pushpa-the-rise/.test(command)) link = 'https://www.baiscopelk.com/Downloads/pushpa-the-rise-2021-zip/'
             if (/shiddat/.test(command)) link = 'https://www.baiscopelk.com/Downloads/shiddat-2021/'

             
             if (/the-avengers-2012/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-avengers-2012-4/'
             if (/avengers-age-of-ultron-2015/.test(command)) link = 'https://www.baiscopelk.com/Downloads/avengers-age-of-ultron-2015-br-update/'
             if (/avengers-infinity-war-2018/.test(command)) link = 'https://www.baiscopelk.com/Downloads/201807310958-avengersinfinitywar2018-br/'
             if (/avengers-endgame-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/avengers-endgame-2019-500-br-zip/'

             if (/the-nun-2018/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-nun-2018-br_-zip/'
             if (/the-three-stooges-2012/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-three-stooges-2012/'

             
             if (/the-conjuring/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-conjuring-2013-2/'
             if (/the-conjuring-2/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-conjuring-2-2016-br/'
             if (/the-conjuring-3/.test(command)) link = 'https://www.baiscopelk.com/Downloads/the-conjuring-3-the-devil-made-me-do-it-2021-blu-ray/'

             if (/thor-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/thor2011-sinhala-sub_-new_-zip/'
             if (/thor-the-dark-world-2013/.test(command)) link = 'https://www.baiscopelk.com/Downloads/thor-the-dark-world-2013-br/'
             if (/thor-ragnarok-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/thor-ragnarok-2017-br-2/'

             if (/transformers-2007/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-2007//'
             if (/transformers-revenge-of-the-fallen-2009/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-revenge-of-the-fallen-2009/'
             if (/transformers-dark-of-the-moon-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-dark-of-the-moon-2011/'
             if (/transformers-age-of-extinction-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-age-of-extinction-2014-br/'
             if (/transformers-the-last-knight-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/transformers-the-last-knight-2017-br/'

             if (/war/.test(command)) link = 'https://www.baiscopelk.com/Downloads/war-2019-br-zip/'
             if (/watcher/.test(command)) link = 'https://www.baiscopelk.com/Downloads/watcher-2022-zip/'
             if (/12th-man/.test(command)) link = 'https://www.baiscopelk.com/Downloads/12th-%e0%b6%b8%e0%b7%91%e0%b6%b1%e0%b7%8a-2022-zip/'
             if (/army-of-the-dead/.test(command)) link = 'https://www.baiscopelk.com/Downloads/army-of-the-dead-2021/'
             if (/acharya/.test(command)) link = 'https://www.baiscopelk.com/Downloads/acharya-2022-zip/'
             if (/ford-v-ferrari/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ford-v-ferrari-2019-br/'

             if (/annabelle-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/annabelle-2014-blu-ray/'
             if (/annabellecreation-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/annabellecreation-2017-br-zip/'
             if (/annabelle-comes-home-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/annabelle-comes-home-2019-br/'


             if (/aquaman/.test(command)) link = 'https://www.baiscopelk.com/Downloads/aquaman-2018-br-zip/'
             if (/bheeshma/.test(command)) link = 'https://www.baiscopelk.com/Downloads/bheeshma-2020-updated-zip/'
	         

             if (/bhool-bhulaiyaa-1/.test(command)) link = 'https://www.baiscopelk.com/Downloads/bhool-bhulaiyaa-2007-baiscopelk/'
             if (/bhool-bhulaiyaa-2/.test(command)) link = 'https://cineru.lk/wp-content/uploads/2022/06/Bhool-Bhulaiyaa-2-2022-Sinhala-Subtitles.zip'

             if (/bird-box/.test(command)) link = 'https://www.baiscopelk.com/Downloads/bird-box-2018/'
	       
             if (/black-panther/.test(command)) link = 'https://www.baiscopelk.com/Downloads/black-panther-2018-baiscopelk-com_-zip-2/'
             
             if (/deadpool-1/.test(command)) link = 'https://www.baiscopelk.com/Downloads/deadpool-2016-baiscopelkbr-update2-zip/'
             if (/deadpool-2/.test(command)) link = 'https://www.baiscopelk.com/Downloads/deadpool-2-2018-br-1-1-zip/'

             if (/dj-tillu/.test(command)) link = 'https://www.baiscopelk.com/Downloads/dj-tillu-2022-zip/'
             	
             if (/don/.test(command)) link = 'https://www.baiscopelk.com/Downloads/don-2022-updated-zip/'
			 
	
             if (/everything-everywhere-all-at-once/.test(command)) link = 'https://www.baiscopelk.com/Downloads/everything-everywhere-all-at-once-2022-blu-ray/'
	
             if (/free-guy/.test(command)) link = 'https://www.baiscopelk.com/Downloads/free-guy_-2021-zip/'
             
             if (/frozen-2013/.test(command)) link = 'https://www.baiscopelk.com/Downloads/frozen-2013-br/'
             if (/olafs-frozen-adventure-2017/.test(command)) link = 'https://www.baiscopelk.com/Downloads/olafs-frozen-adventure-2017/'
             if (/frozen-2-2019/.test(command)) link = 'https://www.baiscopelk.com/Downloads/frozen-ii-2019-br-zip/'

             if (/gangubai-kathiawadi/.test(command)) link = 'https://www.baiscopelk.com/Downloads/gk-2022/'
             if (/ghost-rider-2007/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ghost-rider-2007-blu-ray/'
             if (/ghost-rider-spirit-of-vengeance-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ghost-rider-spirit-of-vengeance-2011-blu-ray/'

             if (/harry-potter-and-the-philosophers-stone-2001/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry_potter_and_the_philosophers_stone_2001-zip/'
             if (/harry-potter-and-the-chamber-of-secrets-2002/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-chamber-of_-secrets-2002-zip/'
             if (/harry-potter-and-the-prisoner-of-azkaban-2004/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-prisoner-of_-azkaban-2004-zip/'
             if (/harry-potter-and-the-goblet-of-fire-2005/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and-the-goblet-of-fire-2005-zip/'
             if (/harry-potter-and-the-order-of-the-phoenix-2007/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-order_-of_-the_-phoenix-2007-zip/'
             if (/harry-Potter-and-the-Half-Blood-Prince-2009/.test(command)) link = 'https://www.baiscopelk.com/wp-content/uploads/2017/02/Harry_Potter_and_the_Half_Blood_Prince_2009.si_.srt'
             if (/harry-potter-and-the-deathly-hallows-part-1-2010/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-deathly-hallows-part_-1-2010-zip/'
             if (/harry-potter-and-the-deathly-hallows-part-2-2011/.test(command)) link = 'https://www.baiscopelk.com/Downloads/harry-potter-and_-the_-deathly-hallows-part_-2-2011-sinhala-sub_-zip/'

             if (/transylvania-2012/.test(command)) link = 'https://www.baiscopelk.com/Downloads/hotel-transylvania-2012/'
             if (/transylvania-2/.test(command)) link = 'https://www.baiscopelk.com/Downloads/hotel-transylvania-2-br/'
             if (/transylvania-3/.test(command)) link = 'https://www.baiscopelk.com/Downloads/hotel-transylvania-3-a-monster-vacation-baiscopelk-com_-zip/'
             if (/transylvania-4/.test(command)) link = 'https://www.baiscopelk.com/Downloads/hotel-transylvania-4-transformania-2022-zip/'

             if (/heropanti-2014/.test(command)) link = 'https://www.baiscopelk.com/Downloads/heropanti-2014/'
             if (/heropanti-2/.test(command)) link = 'https://cineru.lk/wp-content/uploads/2022/05/Heropanti-2-2022-Sinhala-Subtitles.zip'
	
	     if (/got-s1/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/GOT%20S1.zip'
             if (/got-s2/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/GOT%20S2.zip'
             if (/got-s3/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/GOT%20S3.zip'
             if (/got-s4/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/GOT%20S4.zip'
             if (/got-s5/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/GOT%20S5.zip'
             if (/got-s6/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/GOT%20S6.zip'
             if (/got-s7/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/GOT%20S7.zip'
             
             if (/inside-edge-s01/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Inside%20Edge%20S01.zip'
             if (/inside-edge-s02/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Inside%20Edge%20S02.zip'
           

	     if (/invincible-s01/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Invincible.2021.S01.zip'

             if (/kingdom-s01/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Kingdom.2019.S01.zip'
             if (/kingdom-s02/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Kingdom.2019.S02.zip'

             if (/legend.of.the.seeker.s01/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/LEGENT%20OF%20SEEKER%20S1.zip'
             if (/legend.of.the.seeker.s02/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Legend.of.the.Seeker.S02.zip'

             if (/money-heist-s1/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Money%20Heist%20S01.zip'
             if (/money-heist-s2/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Money%20Heist%20S02.zip'
             if (/money-heist-s3/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Money_Heist_S03.zip'
             if (/money-heist-s4/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Money%20Heist%20S04.zip'
             if (/money-heist-s5/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Money%20Heist%20S05.zip'
             
             if (/cobra-kai-s01/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Cobra%20Kai%20S01.zip'
             if (/cobra-kai-s02/.test(command)) link = 'https://github.com/Malinda6104/subtitle/raw/main/subtitle/Tv/Cobra%20Kai%20S02.zip'


             if (/ice-age-2002/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ice-age-2002/'
             if (/ice-age-the-meltdown-2006/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ice-age-the-meltdown-2006/'
             if (/ice-age-dawn-of-the-dinosaurs-2009/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ice-age-dawn-of-the-dinosaurs-2009/'
             if (/ice-age-the-great-egg-scapade-2016/.test(command)) link = 'https://www.baiscopelk.com/Downloads/ice-age-the-great-egg-scapade-2016/'
             let anony = await(link)
                Anony.sendMessage(m.chat, { document: { url: anony }, mimetype: 'application/octet-stream', fileName: `Fire-Anony-Sub.zip`}, { quoted: m })
             }
             break
					
					
             
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Anony.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
// JavaScript Document
