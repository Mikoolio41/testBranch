//Define Global Variables for easier use

// const fullName = document.getElementById("fullName").value;
// const income = document.getElementById("income").value;
document
  .querySelector(`button[name="submit"]`)
  .addEventListener("click", getData);

let categoryColor = {
  category: [
    "mortgage",
    "utilities",
    "healthcare",
    "insurance",
    "groceries",
    "vacation",
    "lifestyle",
    "entertainment",
    "shopping",
  ],
  color: [
    "blue",
    "green",
    "red",
    "yellow",
    "purple",
    "pink",
    "turquoise",
    "azure",
    "magenta",
  ],
};

let expenseArray = {
  month: ["January"],
  income: [30000],
  mortgage: [6000],
  utilities: [5000],
  healthcare: [4000],
  insurance: [3000],
  groceries: [2000],
  vacation: [2500],
  lifestyle: [3500],
  entertainment: [2500],
  shopping: [1500],
};
let percentArray = {
  month: ["January"],
  income: [30000],
  mortgage: [20],
  utilities: [16.7],
  healthcare: [13.3],
  insurance: [10],
  groceries: [6.7],
  vacation: [8.3],
  lifestyle: [11.7],
  entertainment: [8.3],
  shopping: [5],
};

const ctx = document.getElementById("chartsum");

const expenseChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: expenseArray.month,
    datasets: [
      {
        label: categoryColor.category[0],
        data: expenseArray.mortgage,
        backgroundColor: categoryColor.color[0],
      },
      {
        label: categoryColor.category[1],
        data: expenseArray.utilities,
        backgroundColor: categoryColor.color[1],
      },
      {
        label: categoryColor.category[2],
        data: expenseArray.healthcare,
        backgroundColor: categoryColor.color[2],
      },
      {
        label: categoryColor.category[3],
        data: expenseArray.insurance,
        backgroundColor: categoryColor.color[3],
      },
      {
        label: categoryColor.category[4],
        data: expenseArray.groceries,
        backgroundColor: categoryColor.color[4],
      },
      {
        label: categoryColor.category[5],
        data: expenseArray.vacation,
        backgroundColor: categoryColor.color[5],
      },
      {
        label: categoryColor.category[6],
        data: expenseArray.lifestyle,
        backgroundColor: categoryColor.color[6],
      },
      {
        label: categoryColor.category[7],
        data: expenseArray.entertainment,
        backgroundColor: categoryColor.color[7],
      },
      {
        label: categoryColor.category[8],
        data: expenseArray.shopping,
        backgroundColor: categoryColor.color[8],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Month",
          color: "#191",
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "NIS",
          color: "#191",
        },
      },
    },
  },
});

const ctx1 = document.getElementById("chartpercent");

const percentChart = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: percentArray.month,
    datasets: [
      {
        label: categoryColor.category[0],
        data: percentArray.mortgage,
        backgroundColor: categoryColor.color[0],
      },
      {
        label: categoryColor.category[1],
        data: percentArray.utilities,
        backgroundColor: categoryColor.color[1],
      },
      {
        label: categoryColor.category[2],
        data: percentArray.healthcare,
        backgroundColor: categoryColor.color[2],
      },
      {
        label: categoryColor.category[3],
        data: percentArray.insurance,
        backgroundColor: categoryColor.color[3],
      },
      {
        label: categoryColor.category[4],
        data: percentArray.groceries,
        backgroundColor: categoryColor.color[4],
      },
      {
        label: categoryColor.category[5],
        data: percentArray.vacation,
        backgroundColor: categoryColor.color[5],
      },
      {
        label: categoryColor.category[6],
        data: percentArray.lifestyle,
        backgroundColor: categoryColor.color[6],
      },
      {
        label: categoryColor.category[7],
        data: percentArray.entertainment,
        backgroundColor: categoryColor.color[7],
      },
      {
        label: categoryColor.category[8],
        data: percentArray.shopping,
        backgroundColor: categoryColor.color[8],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Month",
          color: "#191",
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "NIS",
          color: "#191",
        },
      },
    },
  },
});
// document
//   .querySelector(`input[name="submit"]`)
//   .addEventListener("submit", getData);

// Fetch the data from the HTML form

function getData(e) {
  e.preventDefault();

  // Create variables for the data

  let month = document.querySelector(`input[name="month"]`).value;
  let income = Number(
    document.querySelector(`input[name="customer_income"]`).value
  );
  let mortgage = Number(document.querySelector(`input[name="mortgage"]`).value);
  let utilities = Number(
    document.querySelector(`input[name="utilities"]`).value
  );
  let healthcare = Number(
    document.querySelector(`input[name="healthcare"]`).value
  );
  let insurance = Number(
    document.querySelector(`input[name="insurance"]`).value
  );
  let groceries = Number(
    document.querySelector(`input[name="groceries"]`).value
  );
  let vacation = Number(document.querySelector(`input[name="vacation"]`).value);
  let lifestyle = Number(
    document.querySelector(`input[name="lifestyle"]`).value
  );
  let entertainment = Number(
    document.querySelector(`input[name="entertainment"]`).value
  );
  let shopping = Number(document.querySelector(`input[name="shopping"]`).value);

  let newMonth = {
    month: month,
    income: income,
    mortgage: mortgage,
    utilities: utilities,
    healthcare: healthcare,
    insurance: insurance,
    groceries: groceries,
    vacation: vacation,
    lifestyle: lifestyle,
    entertainment: entertainment,
    shopping: shopping,
  };

  let newMonthPercent = {
    month: month,
    income: income,
    mortgage: Number(((mortgage / income) * 100).toFixed(1)),
    utilities: Number(((utilities / income) * 100).toFixed(1)),
    healthcare: Number(((healthcare / income) * 100).toFixed(1)),
    insurance: Number(((insurance / income) * 100).toFixed(1)),
    groceries: Number(((groceries / income) * 100).toFixed(1)),
    vacation: Number(((vacation / income) * 100).toFixed(1)),
    lifestyle: Number(((lifestyle / income) * 100).toFixed(1)),
    entertainment: Number(((entertainment / income) * 100).toFixed(1)),
    shopping: Number(((shopping / income) * 100).toFixed(1)),
  };

  // Append data to table

  let expenseTable = document.querySelector(`table[class="greenTable"]`);
  let expenseTH = document.querySelector("thead");
  let newColumnHead = expenseTH.appendChild(document.createElement("th"));
  let newThText = document.createTextNode(newMonth.month);
  newColumnHead.appendChild(newThText);

  // Append Data to Chart arrays

  for (let i in expenseArray) {
    expenseArray[i].push(newMonth[i]);
  }

  for (let i in percentArray) {
    percentArray[i].push(newMonthPercent[i]);
  }

  expenseChart.update();
  percentChart.update();

  console.log(document.querySelector(`input[name="month"]`).value);
  console.log(newMonth);

  // Test stuff
  // console.log(expenseChart.data.datasets[0].data);
  // console.log(expenseChart.data.datasets);
  console.log(expenseArray);
  console.log(percentArray);
}
