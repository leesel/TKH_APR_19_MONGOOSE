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
  const users = await User.insertMany({ name: "Leesel", age: 28, status: "unknown" })
  console.log("Added Leesel as User", users)
}

// update user one
const updateUser = async () => {
  const users = await User.updateOne({ name: "Leesel", age: 28, status: "unknown"  }, { $set: { name: "Lee", age: 29, status: "active" }, $currentDate: { lastModified: true } })
  console.log("Update Leesel:", users)
}

// a delete user one
const deleteUser = async () => {
  const users = await User.deleteOne({ name: "Lee", age: 29, status: "active" })
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
  await createUser()
  await findAll()
  await updateUser()
  await findAllOlderThan25()
  await findAllActiveAndYoungerThan25()
  await deleteUser()
  process.exit()  
}
run()
