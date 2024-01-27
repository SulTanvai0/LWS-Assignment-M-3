const data = [
  {
    id: 1,
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Web", "Python", "API"],
    priority: "high",
    isFavorite: true,
  },
  {
    id: 2,
    title: "API Data Synchronization with Python",
    description:
      "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
    tags: ["Python", "API", "Data Synchronization"],
    priority: "medium",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Efficient Web API Connectivity in Python",
    description:
      "Develop a Python-based solution for connecting an API to a third-party database securely focusing on efficient data   handling and exchange",
    tags: ["Web", "Python", "API"],
    priority: "low",
    isFavorite: true,
  },
];

function getTaskData() {
  return data;
}

export { getTaskData };
