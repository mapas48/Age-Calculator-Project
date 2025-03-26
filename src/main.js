import { DateTime } from "luxon"
import { Interval } from "luxon";

const dateInput = document.querySelector('.dateClass');
const CalInput = document.querySelector('.button');
const youAge = document.querySelector('.YouAge');




function AgeCalculator() {
      const dateValue = dateInput.value;
      if (dateValue == "") {
        youAge.textContent = "debes poner tu fecha de cumpleaños y que el año sea mayor a 1900"
        
      }
      const date = DateTime.fromISO(dateValue);
      console.log(typeof date.year)
      if (date.year == 1900) {
        youAge.textContent = "debes poner el año que sea mayor a 1900"
      } 
      const datenow = DateTime.now()
      let result = Interval.fromDateTimes(date.c,datenow);

      

      let resultYear = result.length('months') / 12;

      let operatYearsRound = Math.round(resultYear);

      let monthForYourBDH =   date.c.month - datenow.month;

      let resMonthForYourBDH = monthForYourBDH;

      let dayForYourBDH =  date.c.day - datenow.day;
      let resDayForYourBDH = dayForYourBDH.toLocaleString()
      let newResDay = resDayForYourBDH.slice(1,3);
      const resMonth = resMonthForYourBDH +  12;
      let content = `Tu Edad es: ${operatYearsRound} Años`;

      if (resMonthForYourBDH >= 1) {
        content = `Tu Edad es: ${operatYearsRound} Años y Falta ${resMonthForYourBDH} Meses para tu cumpleaños`;
        
      
      }else if (resMonthForYourBDH <= 0 ){
        
        content = `Tu Edad es: ${operatYearsRound} Años y Falta ${resMonth} Meses para tu cumpleaños`;
      }
      if(resMonthForYourBDH == 0){
        content = `Tu Edad es: ${operatYearsRound} Años y Falta ${newResDay} Dias para tu cumpleaños`;
        
      }
     if (newResDay.length == 0 && resMonthForYourBDH == 0) {
      datenow.plus({month: 1});
      let dayLeft = datenow.daysInMonth - date.c.day;
      content = `Tu Edad es: ${operatYearsRound} Años y faltan ${dayLeft} Dias y ${resMonth} Meses para tu cumpleaños `
     }

      youAge.textContent = content;
      
}


CalInput.addEventListener('click',AgeCalculator)
