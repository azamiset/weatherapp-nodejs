const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempStatus = "Clouds";

const getCurrentDay = () => {
  var weekday = new Array(7);
  weekday[0] = "Ahad";
  weekday[1] = "Senin";
  weekday[2] = "Selasa";
  weekday[3] = "Rabu";
  weekday[4] = "Kamis";
  weekday[5] = "Jumat";
  weekday[6] = "Sabtu";

  let currentTime = new Date();
  let day = weekday[currentTime.getDay()]
  return day;
}
// getCurrentDay();

const getCurrentTime = () => {
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ];

  var now = new Date();
  var month = months[now.getMonth()];
  var day = now.getDate();
  // var year = now.getFullYear();
  var hours = now.getHours();
  var mins = now.getMinutes();

  var period = 'AM';

  if (hours > 11) {
    period = 'PM';
    if (period > 12) hours -= 12;
  }

  if (mins < 10) {
    mins = '0' + mins;
  }

  let times = `${month} ${day} | ${hours}:${mins}${period}`;
  console.log(times);

  return times;
}
getCurrentTime();

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();
