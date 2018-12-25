
function newTask(title, description) {
	const task = {
		title: title, 
		description: description,
		complete: false,

		logTaskState: function () {
			console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
		},
		completeTask: function() {
			this.complete = true;
		}
	}
	return task;
}

// DRIVER CODE BELOW

const task1 = newTask("clean litter", "take the 💩 out of the litter box")
const task2 = newTask("do laundry", "😨")

const tasks = [task1, task2];

task1.logTaskState()
task1.completeTask()
task1.logTaskState()
