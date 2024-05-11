const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add');
const list = document.getElementById('list');
const form = document.getElementById('form');

function addTask(event) {
  event.preventDefault();
  const task = taskInput.value.trim();

  const tasks = task.split(',');

  tasks.forEach((task) => {
    if (task.trim() !== '') {
      const li = document.createElement('li');

      li.textContent = task;
      list.appendChild(li);

      taskInput.value = '';
    } else {
      alert('Your input is not valid!');
    }
  });
}

function deleteTask(e) {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
}

function main() {
  list.addEventListener('click', deleteTask);
  form.addEventListener('submit', addTask);

  console.log('Application has started!');
}

main();
