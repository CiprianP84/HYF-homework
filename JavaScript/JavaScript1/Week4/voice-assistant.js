let userName = "";
let todos = [];

function getReply(command) {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.startsWith("hello my name is ")) {
        const name = command.substring(17);
        userName = name;
        return `Nice to meet you ${userName}`;
    } else if (lowerCommand === "what is my name") {
        if (userName) {
            return `Your name is ${userName}`;
        } else {
            return "I don't know your name yet.";
        }
    } else if (lowerCommand.startsWith("add ") && lowerCommand.endsWith(" to my todo")) {
        const todo = command.substring(4, command.length - 12);
        todos.push(todo);
        return `${todo} added to your todo`;
    } else if (lowerCommand.startsWith("remove ") && lowerCommand.endsWith(" from my todo")) {
        const todo = command.substring(7, command.length - 14);
        const index = todos.indexOf(todo);
        if (index > -1) {
            todos.splice(index, 1);
            return `Removed ${todo} from your todo`;
        } else {
            return `${todo} is not in your todo list`;
        }
    } else if (lowerCommand === "what is on my todo?") {
        if (todos.length > 0) {
            return `You have ${todos.length} todo${todos.length > 1 ? 's' : ''} - ${todos.join(' and ')}`;
        } else {
            return "Your todo list is empty";
        }
    } else if (lowerCommand === "what day is it today?") {
        const today = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return today.toLocaleDateString('en-US', options);
    } else if (lowerCommand.startsWith("what is ")) {
        const mathExpression = lowerCommand.substring(8).replace("?", "").trim();
        try {
            const result = eval(mathExpression);
            return `${mathExpression} is ${result}`;
        } catch (error) {
            return "I can't compute that";
        }
    } else if (lowerCommand.startsWith("set a timer for ")) {
        const minutes = parseInt(lowerCommand.substring(16).replace(" minutes", ""));
        if (!isNaN(minutes) && minutes > 0) {
            setTimeout(() => {
                console.log("Timer done");
            }, minutes * 60000);
            return `Timer set for ${minutes} minutes`;
        } else {
            return "Please specify a valid number of minutes";
        }
    } else {
        return "Command not recognized";
    }
}

// Example usage:
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you Benjamin"
console.log(getReply("What is my name")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo"
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("What is on my todo?")); // "You have 1 todo - singing in the shower"
console.log(getReply("What day is it today?")); // "30. of August 2019" (example)
console.log(getReply("What is 3 + 3")); // "3 + 3 is 6"
console.log(getReply("Set a timer for 4 minutes")); // "Timer set for 4 minutes"
// Note: After 4 minutes, "Timer done" will be logged to the console
