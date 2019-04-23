console.log('working');

let color = 'dark';

const lightOption = () => {
  if (color == 'dark') {
    console.log('it is dark');
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    console.log('color =', color);
    let color = 'light';
  } else if (color == 'light') {
    console.log('it is light');
    document.body.style.backgroundColor = "rgb(34, 34, 34)";
  }
};

// lightOption();
