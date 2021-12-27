const User = require('../api/models/user.model');
const { adminDumpData } = require('./vars');

const seed = async () => {
  try {
    // Check if the admin exist
    const isAdminExisting = await User.findOne({email: adminDumpData.email})

    // If no exists, then create new admin
    if (!isAdminExisting) {
      const user = new User(adminDumpData);
      await user.save();
      console.info("Admin created successfully!");
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = seed;
