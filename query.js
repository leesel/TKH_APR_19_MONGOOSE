const db = require('./db')
const User = require('./models/user')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// findAllNames one
const findAll = async () => {
  const users = await User.find()
  console.log("All users:", users)
}

// a create user one
const createUser = async () => {
  const users = await User.insertOne({ name: "Leesel", age: 28, status: "unknown" })
  console.log("Added Leesel as User", users)
}

// update user one
const updateUser = async () => {
  const users = await User.updateOne({ name: "Leesel" }, { $set: { name: "Lee", age: 29 }, $currentDate: { lastModified: true } })
  console.log("Update Leesel:", users)
}

// a delete user one
const deleteUser = async () => {
  const users = await User.deleteOne({ name: "Leesel", age: 28, status: "unknown" })
  console.log("Delete Leesel:", users)
}

// findAllOlderThan25
const findAllOlderThan25 = async () => {
  const users = await User.find({ age: { $gt: 25 } })
  console.log("older than 25", users)
}

// active and less then 25
const findAllActiveAndYoungerThan25 = async () => {
  const users = await User.find({ status: "active", age: { $lt: 25 } })
  console.log("Active and less 25", users)
}


const run = async () => {
  await findAll()
  await createUser()
  await deleteUser()
  await updateUser()
  await findAllOlderThan25()
  await findAllActiveAndYoungerThan25()
  process.exit()  
}
run()