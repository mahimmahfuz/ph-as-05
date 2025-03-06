const completedBtn = document.querySelectorAll("#dashboard_card .item .dashboard_card_bottom .right button");
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