// taskScheduler.js

class TaskScheduler {
    constructor() {
        this.tasks = [];
    }

    addIntervalTask(taskName, interval, callback) {
        console.log(`Adding interval task: ${taskName}, Interval: ${interval}ms`);
        const task = setInterval(callback, interval);
        this.tasks.push({ taskName, task, type: 'interval' });
    }

    addTimeoutTask(taskName, timeout, callback) {
        console.log(`Adding timeout task: ${taskName}, Timeout: ${timeout}ms`);
        const task = setTimeout(callback, timeout);
        this.tasks.push({ taskName, task, type: 'timeout' });
    }

    cancelTask(taskName) {
        const taskIndex = this.tasks.findIndex(t => t.taskName === taskName);
        if (taskIndex !== -1) {
            const task = this.tasks[taskIndex];
            if (task.type === 'interval') {
                clearInterval(task.task);
            } else {
                clearTimeout(task.task);
            }
            console.log(`Cancelled task: ${taskName}`);
            this.tasks.splice(taskIndex, 1);
        } else {
            console.log(`Task not found: ${taskName}`);
        }
    }
}

module.exports = TaskScheduler;
