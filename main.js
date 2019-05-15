class User {
  constructor(email, password) {
  this.email = email
  this.password = password
  this.inbox = []
  }

sendMessage(rec) {
  let msg = new Message()
  rec.inbox.push(msg)
  }
}

class Message {
  constructor(content) {
    this.content = prompt ("Enter a Message")
  }
}

user1 = new User('jorge@example.com', '1111')
user2 = new User('cloud@smash.com', '11111')

// msg = new Mesaage("Why do the Knicks suck?")
