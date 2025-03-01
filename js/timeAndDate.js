const currentDateDiv = document.getElementById('current-date');
const currentDate = new Date();

const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

// Split the formatted date into two lines
const dateParts = formattedDate.split(', ');
const firstLine = dateParts[0] + ' ,';
const secondLine = dateParts[1] + ' ' + dateParts[2];

currentDateDiv.innerHTML = `
            <p class="text-xl pl-4 text-[#00303C] ">
            ${firstLine}
            <br>
            <span class="font-bold text-[#00303C]">
            ${secondLine}
            </span>
            </p>
            `;