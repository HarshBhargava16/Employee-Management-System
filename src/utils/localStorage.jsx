const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix Bug in Login Page",
        description: "Resolve the issue causing failed logins.",
        date: "2025-01-04",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update User Profile UI",
        description: "Redesign the user profile page for better UX.",
        date: "2025-01-01",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Implement Authentication",
        description: "Add secure authentication for admin users.",
        date: "2025-01-02",
        category: "Development",
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Database Schema",
        description: "Design the schema for the new project database.",
        date: "2025-01-03",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize API Calls",
        description: "Enhance API performance by reducing latency.",
        date: "2025-01-01",
        category: "Performance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Conduct Code Review",
        description: "Review pull requests for the latest sprint.",
        date: "2025-01-03",
        category: "Review",
      },
    ],
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Weekly Report",
        description: "Compile team progress into a report.",
        date: "2025-01-03",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Deployment Errors",
        description: "Resolve issues in the CI/CD pipeline.",
        date: "2025-01-02",
        category: "DevOps",
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Kabir",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Documentation",
        description: "Write detailed docs for the new API endpoints.",
        date: "2025-01-03",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Integrate Payment Gateway",
        description: "Add support for Stripe payments.",
        date: "2025-01-01",
        category: "Integration",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Debug Production Issues",
        description: "Analyze logs to find the root cause of errors.",
        date: "2025-01-03",
        category: "Debugging",
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Aditya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Implement Search Feature",
        description: "Add search functionality to the dashboard.",
        date: "2025-01-02",
        category: "Feature",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Add test coverage for all utility functions.",
        date: "2025-01-04",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy Staging Environment",
        description: "Set up and deploy the staging environment.",
        date: "2025-01-01",
        category: "Deployment",
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const SetLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const GetLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const Admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, Admin };
};
