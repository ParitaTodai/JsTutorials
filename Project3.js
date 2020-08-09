 
const calcy = () =>{
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = "";
  
  
    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    alert("Your total grades are : "+totalGrades);
  
    let perc = (totalGrades/400) * 100;
    alert("Your total Percentage is : " + parseFloat(perc).toFixed(2)+"%");
 
  
    if(perc <= 100  && perc >= 80){
      grades = 'A';
    }else if(perc <= 79  && perc >= 60){
       grades = 'B';
    }else if(perc <= 59  && perc >= 40){
       grades = 'C';
    }else{
       grades = 'F';
    }
  
    if(perc >= 39.5){
      document.getElementById('showData').innerHTML = ` Out of <span style="color:green;font-weight:bold;font-size:20px;">400</span> your total is : <span style="color:green;font-weight:bold;font-size:20px;"> ${totalGrades}</span> <br>  percentage is :  <span style="color:green;font-weight:bold;font-size:20px;">${parseFloat(perc).toFixed(2)}%. </span> <br> Your grade is <span style="color:green;font-weight:bold;font-size:20px;">${grades}</span>. <br>  You are <span style="color:green;font-weight:bold;font-size:20px;">Pass</span>. `
    }
    else{
      document.getElementById('showData').innerHTML = ` Out of <span style="color:green;font-weight:bold;font-size:20px;">400</span> your total is : <span style="color:green;font-weight:bold;font-size:20px;"> ${totalGrades}</span> <br> percentage is : <span style="color:green;font-weight:bold;font-size:20px;">${parseFloat(perc).toFixed(2)}%. </span> <br> <br> Your grade is <span style="color:green;font-weight:bold;font-size:20px;">${grades}</span>. You are <span style="color:green;font-weight:bold;font-size:20px;">Fail</span>. `
    }
  
    
  }