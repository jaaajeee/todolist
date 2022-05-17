import React, {useState, useEffect} from 'react'

const Header = () => {
  const [setDay, setDayState] = useState(false)


  const getDay = () => {
      let d = new Date();
      let weekday = new Array(7);
        weekday[0] = "Sunday 👍";
        weekday[1] = "Monday 💪😀";
        weekday[2] = "Tuesday 😜";
        weekday[3] = "Wednesday 😌☕️";
        weekday[4] = "Thursday 🤗";
        weekday[5] = "Friday 🍻";
        weekday[6] = "Saturday 😴";

      let n = weekday[d.getDay()];
      let randomWordArray = Array(
        "Oh my, it's ",
        "Whoop, it's ",
        "Happy ",
        "Seems it's ",
        "Awesome, it's ",
        "Have a nice ",
        "Happy fabulous ",
        "Enjoy your "
      );
      const randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
        if (d.getHours() < 12) {
          return randomWord + "morning " + n;
        } else if (d.getHours() >= 12 && d.getHours() < 18) {
          return randomWord + "afternoon " + n;
        } else {
          return randomWord + "evening " + n;
        }
  }

  return (
    <div className='Header'>
        <h1>To do list</h1>
        <h2>{getDay()}</h2>
    </div>
  )
}

export default Header;

