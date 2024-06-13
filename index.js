const body = document.getElementsByTagName("body")[0];

const createElement = (tagName, classList, innerText = "") => {
  const element = document.createElement(tagName);

  classList.forEach((className) => {
    element.classList.add(className);
  });

  element.innerText = innerText;

  return element;
};

const buttonContainer = createElement("div", ["buttonContainer"]);
const taskButton = createElement("button", ["taskButton"], "Add Task");
const boardContainer = createElement("div", ["boardContainer"]);

buttonContainer.appendChild(taskButton);
body.appendChild(buttonContainer);
body.appendChild(boardContainer);

const editSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_11_53)">
<path d="M11.3334 2.00001C11.5032 1.79936 11.7132 1.63605 11.95 1.52046C12.1869 1.40488 12.4454 1.33956 12.7091 1.32868C12.9728 1.3178 13.2359 1.36159 13.4816 1.45727C13.7273 1.55294 13.9503 1.69839 14.1362 1.88435C14.3222 2.07032 14.4671 2.29272 14.5617 2.53737C14.6563 2.78202 14.6986 3.04356 14.6858 3.30533C14.673 3.56709 14.6054 3.82333 14.4873 4.05772C14.3692 4.29211 14.2033 4.4995 14 4.66667L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00001Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 3.33334L12.6667 6.00001" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_11_53">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const removeSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4H14" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3334 14.6667H4.66671C4.00004 14.6667 3.33337 14 3.33337 13.3333V4" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33337 4.00001V2.66668C5.33337 2.00001 6.00004 1.33334 6.66671 1.33334H9.33337C10 1.33334 10.6667 2.00001 10.6667 2.66668V4.00001" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66663 7.33334V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33337 7.33334V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const createBoard = (title, number, color) => {
  const board = createElement("div", ["board"]);
  const boardHeader = createElement("div", ["boardHeader"]);
  const headerTitle = createElement("div", ["headerTitle"]);
  const circle = createElement("div", ["circle", color]);
  const label = createElement("h3", ["label"], `${title}`);
  const count = createElement("p", ["count"], `${number}`);
  const taskListContainer = createElement("div", ["taskListContainer"]);

  // circle.classList.add("circle");
  // circle.classList.add(color);

  headerTitle.appendChild(circle);
  headerTitle.appendChild(label);

  boardHeader.appendChild(headerTitle);
  boardHeader.appendChild(count);

  board.appendChild(boardHeader);
  board.appendChild(taskListContainer);

  boardContainer.appendChild(board);
};

const createTask = (data, index) => {
  const taskListContainer =
    document.getElementsByClassName("taskListContainer")[index];
  const taskContainer = document.createElement("div");
  const taskList = document.createElement("div");
  const circle = document.createElement("div");
  const task = document.createElement("p");
  const taskButtonContainer = document.createElement("div");
  const editButton = document.createElement("button");
  const edit = document.createElement("div");
  const removeButton = document.createElement("button");
  const remove = document.createElement("div");

  taskList.className = "taskList";
  taskContainer.className = "taskContainer";
  taskButtonContainer.className = "taskButtonContainer";
  edit.className = "edit";
  remove.className = "remove";
  editButton.classList.add("button");
  removeButton.classList.add("button");
  circle.classList.add("circle");
  circle.classList.add("outline");

  task.innerHTML = data;
  edit.innerHTML = editSvg;
  remove.innerHTML = removeSvg;

  editButton.appendChild(edit);
  removeButton.appendChild(remove);

  taskContainer.appendChild(circle);
  taskContainer.appendChild(task);

  taskButtonContainer.appendChild(editButton);
  taskButtonContainer.appendChild(removeButton);

  taskList.appendChild(taskContainer);
  taskList.appendChild(taskButtonContainer);

  taskListContainer.appendChild(taskList);
};

const boards = [
  {
    title: "Todo",
    bgcolor: "white",
  },
  {
    title: "In Progress",
    bgcolor: "yellow",
  },
  {
    title: "Done",
    bgcolor: "green",
  },
  {
    title: "Blocked",
    bgcolor: "red",
  },
];

const data = {
  todo: [
    {
      description: "learn javascript step by step",
    },
  ],
  inProgress: [
    {
      description: "study for four hours",
    },
    {
      description: "study for four hours",
    },
    {
      description: "study for four hours",
    },
    {
      description: "study for four hours",
    },
    {
      description: "study for four hours",
    },
  ],
  done: [
    {
      description: "come to class at 2:30 pm",
    },
  ],
  blocked: [
    {
      description: "absent from class",
    },
    {
      description: "absent from class",
    },
    {
      description: "absent from class",
    },
    {
      description: "absent from class",
    },
  ],
};

boards.map((el) => {
  createBoard(el.title, 5, el.bgcolor);
  console.log(el);
});

const keys = Object.keys(data);

keys.map((el, index) =>
  data[el].map((task) => createTask(task.description, index))
);
