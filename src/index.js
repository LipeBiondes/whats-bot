const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const client = new Client()

client.on('ready', () => {
  console.log('Client is ready!')
})

client.on('qr', qr => {
  qrcode.generate(qr, { small: true })
})

client.on('message', message => {
  //Verificando se a mensagem é de um grupo
  if (message.from.includes('@c.us')) {
    client.sendMessage(
      message.from,
      `Olá, eu sou o seu atendente virtual Max da loja Alefe Jóias! selecione uma das opções abaixo: \n 1 - Consultar saldo \n 2 - Extrato \n 3 - Transferência \n 4 - Pagamento \n 5 - Recarga \n 6 - Sair \n\n Digite o número correspondente a opção desejada.`
    )
  }
  if (message.from.includes('@c.us') && message.body === '1') {
    client.sendMessage(message.from, 'Digite o número da sua conta corrente')
  }
  if (message.from.includes('@c.us') && message.body === '2') {
    client.sendMessage(message.from, 'Digite o número da sua conta corrente')
  }
  if (message.from.includes('@c.us') && message.body === '3') {
    client.sendMessage(message.from, 'Digite o número da sua conta corrente')
  }
  if (message.from.includes('@c.us') && message.body === '4') {
    client.sendMessage(message.from, 'Digite o número da sua conta corrente')
  }
  if (message.from.includes('@c.us') && message.body === '5') {
    client.sendMessage(message.from, 'Digite o número da sua conta corrente')
  }
  if (message.from.includes('@c.us') && message.body === '6') {
    client.sendMessage(message.from, 'Até a próxima!')
  }
})

client.initialize()
