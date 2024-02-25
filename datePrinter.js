function printDate() {
    const now = new Date();
    console.log(`Today's date is: ${now.toLocaleDateString()}`);
    console.log(`Current time is: ${now.toLocaleTimeString()}`);
}

module.exports = printDate;
