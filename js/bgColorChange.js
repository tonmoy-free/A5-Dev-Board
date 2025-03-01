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
      completeButtons[i].addEventListener('click', function(event) {
        const numberCount = document.getElementById("number");
        let number = parseInt(numberCount.innerText);
        number -= 1;
        numberCount.innerText = number;

        const totalNumber =document.getElementById('total-number')
        let totalNumberInt = parseInt(totalNumber.innerText);
        totalNumberInt +=1;
         totalNumber.innerText = totalNumberInt;


        event.target.classList.add('disabled');
        event.target.disabled = true;
      });
    }




