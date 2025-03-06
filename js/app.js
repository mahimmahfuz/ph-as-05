const completedBtn = document.querySelectorAll("#dashboard_card .item .dashboard_card_bottom .right button");
const totalTasks = document.querySelectorAll("#dashboard_card .item").length;
let completedTasks = 0;
completedBtn.forEach(element => {
    element.addEventListener("click", function() {
        alert("Board updated successfully");
        // -------------------------
        const taskCounterConst = document.getElementById("task_counter");
        function taskCounter(){
            let currentValue = parseInt(taskCounterConst.textContent)
            if (currentValue > 0) {
                let change = currentValue - 1
                taskCounterConst.textContent = "0" + change;
            }
            
        }
        taskCounter();
        const navbarCounterConst = document.getElementById("navbar_counter");
        function navbarCounter(){
            let currentValue = parseInt(navbarCounterConst.textContent)
            if (currentValue > 0) {
                let change = currentValue + 1
                navbarCounterConst.textContent = change;
            }
            
        }
        navbarCounter();
        // -------------------------
        completedTasks++;
        if (completedTasks === totalTasks) {
            alert("Congrats!!! You have completed all the current tasks");
        }
        // -------------------------
        element.disabled = true;
        element.style.backgroundColor = "#CED6FF";
        element.style.cursor = "default";
        // -------------------------
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        var pretty = [hours, ':', minutes, ':', seconds, ' ', ampm].join('');
        // -------------------------
        const taskTitle = element.closest('.item').querySelector('h1').textContent;
        function createParagraph() {
            let newParagraph = document.createElement("p");
            newParagraph.textContent = "You have Complete The Task " + taskTitle + " at " + pretty;
            document.getElementById("middling_id").appendChild(newParagraph);
        }
        createParagraph();
        // -------------------------
        document.getElementById("activity_clear").onclick = function(){
            let paragraphs = document.querySelectorAll("#activity .middling p");
            paragraphs.forEach(paragraph => {
                paragraph.remove();
            });
        }
    });
});

function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#8A2BE2', '#FF4500', '#2E8B57'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

const today = new Date();
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = today.toLocaleString('default', { month: 'short' });
document.getElementById("day").innerText = daysOfWeek[today.getDay()] + " ,";
document.getElementById("date").innerText = today.toLocaleString('default', { month: 'short' }) + " " + today.getDate() + " " + today.getFullYear();