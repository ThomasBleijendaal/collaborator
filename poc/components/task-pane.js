class TaskPane extends BaseElement {
   constructor() {
    super();
    this.tasks = [];
  }

  connectedCallback() {
    this.render();
  }

  setTasks(tasks) {
    this.tasks = tasks ?? [];
    this.render();
  }

  render() {
    this.innerHTML = TaskPane.sectionHtml(this.tasks);
  } 

  static sectionHtml(tasks) {
    return `
      <section id="focusPane">
        ${TaskPane.tasksHtml(tasks)}
      </section>`;
  }

  static tasksHtml(tasks) {
    return `
      <ul>
        ${tasks.map(TaskPane.taskHtml).join('')}
      </ul>`;
  }

  static taskHtml(task) {
    let isPartial = task.subTasks != null;
    let percentage = !isPartial || task.subTasks.length == 0
      ? null 
      : Math.round((10 * task.subTasks.count(v => v.completed)) / task.subTasks.length);

    return `
      <li
        ${BaseElement.attributeHtml('class', 
          isPartial ? 'partial' : '',
          task.completed ? 'completed' : '')}
        ${BaseElement.attributeHtml('data-mention-count', task.mentions)}
        ${BaseElement.attributeHtml('data-percentage', percentage)}
        >
          <i></i>
          <span>${task.name}</span>
          ${!isPartial ? '' : TaskPane.tasksHtml(task.subTasks)}
      </li>`;
  }
}

customElements.define("task-pane", TaskPane);
