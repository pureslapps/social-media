class User {
  constructor(email, password) {
  this.email = email
  this.password = password
  this.inbox = []
  this.blockList = []
  }

sendMessage(rec) {
  let msg = new Message()

  if (!rec.blockList.icludes(this.email))

  rec.inbox.push(msg)

  blockUser(user) {
    this.blockedList.push(user.email)

  }
  }
}

class Message {
  constructor(content) {
    this.content = prompt ("Enter a Message")
  }
}

user1 = new User('jorge@example.com', '1111')
user2 = new User('cloud@smash.com', '11111')
user3 = new User('jade@mk.com', "mkmkmk")

class Block {
  constructor(content) {
    this.content = promt ("who would you like to block")
  }
}

// msg = new Mesaage("Why do the Knicks suck?")

let user1form = document.getElementById('user1-form')
let user2inbox = document.getElementById('user2-inbox')
window.addEventListener('keydown', function(event){
  if (event.which == 13) {
    sendMessage()
  }
})


function sendMessage() {
  let text = doccument.getElementById('msg-content')
  let p = document.createElement('p')
  p.innerText = text.value
  user2inbox.appendChild(p)
  text.value = ""
  text.focus()
  alert(text.value)
}

// user1form.addEventListener('submit', function(event)) {
//   sendMessage()
// })
