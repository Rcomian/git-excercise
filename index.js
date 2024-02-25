const printGreeting = require('./greetingPrinter');
const printDate = require('./datePrinter');
const TaskScheduler = require('./taskScheduler');

printGreeting();
printDate();

const scheduler = new TaskScheduler();

scheduler.addIntervalTask('reminder', 5000, () => {
    console.log('Remember to take breaks!');
});

scheduler.addTimeoutTask('meetingAlert', 10000, () => {
    console.log('Meeting starts in 10 minutes!');
});

// Cancel the 'reminder' task after 30 seconds
setTimeout(() => {
    scheduler.cancelTask('reminder');
}, 20000);
