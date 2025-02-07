function createTask(text) {
    let task = document.createElement('li');
    task.className = 'task';

    let taskLabel = document.createElement('label');
    let taskCheckBox = document.createElement('input');
    taskCheckBox.className = 'task-checkbox';
    taskCheckBox.type = 'checkbox';
    taskCheckBox.addEventListener('change', function () {
        taskSpan.classList.toggle('done', this.checked);
    });
    taskLabel.appendChild(taskCheckBox);

    let taskSpan = document.createElement('span');
    taskSpan.innerText = text;
    taskSpan.className = 'task-text';

    let taskDeleteButton = document.createElement('div');
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svg.appendChild(path);
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('viewBox', "0 0 16 16");
    svg.classList.add('bi', 'bi-trash2-fill');
    path.setAttribute('d', "M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z");
    svg.addEventListener('click', function () {
        task.remove();
    });
    taskDeleteButton.appendChild(svg);
    taskDeleteButton.className = 'delete-btn';

    task.appendChild(taskLabel);
    task.appendChild(taskSpan);
    task.appendChild(taskDeleteButton);
    return task;
}

function addTask() {
    let taskInput = document.getElementById('task-input');
    let taskText = taskInput.value.trim();
    if (!taskText) return;

    taskInput.value = '';
    let taskList = document.getElementById('task-list');
    taskList.appendChild(createTask(taskText));
}

document.getElementById('task-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
document.getElementById('task-list').appendChild(createTask('Example'));