const Task = require('./Task');
const User = require('./User');


// now we establish the relationships
// and find the commanilites to connect the two tables
User.hasMany(Task, {
    foreignKey: "user_id",
    onDelete: 'CASCADE', //STATES IF YOU DELETE USER, DELETE THE TASK
});

Task.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = {User, Task};


