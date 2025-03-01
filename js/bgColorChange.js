// const bg =  document.getElementById("bg-color-btn")
// const colors = ['bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-blue-500'];

// const body = document.getElementById("body");
// // body.classList.add("bg-red-600");
// // for( let color of colors){
// //     bg.addEventListener("click",function(event){
// //         console.log(color[1]);
// //     })
// // }


const completeButtons = document.querySelectorAll('.complete-button');

for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener('click', function (event) {
        const numberCount = document.getElementById("number");
        let number = parseInt(numberCount.innerText);
        number -= 1;
        numberCount.innerText = number;

        const totalNumber = document.getElementById('total-number')
        let totalNumberInt = parseInt(totalNumber.innerText);
        totalNumberInt += 1;
        totalNumber.innerText = totalNumberInt;


        event.target.classList.add('disabled');
        event.target.disabled = true;
        

         alert("Board Updated Successfully")
         if(totalNumberInt === 29){
            alert('Congrates!!!You have completed all the current task');
         }

        const hading = document.querySelectorAll('.hadding');
        const fgh = hading[0].innerText;



        const container = document.getElementById("activity-log");

        const paragraph = document.createElement("p");
        //      paragraph.classList.add("bg-blue-500");


        paragraph.innerHTML = `
        <p class="text-base p-6 bg-[#F4F7FF] rounded-md">
        You have Complete The Task ${fgh};
        </p>
        `
        container.appendChild(paragraph);
    });
}




