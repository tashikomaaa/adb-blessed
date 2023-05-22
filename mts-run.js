var blessed = require('blessed');
const { exec } = require('node:child_process')

// Create a screen object.
var screen = blessed.screen({
  smartCSR: true
});

screen.title = 'MTS LOCAL SERVICS';
var buttonEnable = blessed.button({
  top: "center",
  left: "40%",
  mouse: true,
  shrink: true,
  name: 'enable',
  content: ' ENABLE ',
  style: {
    fg: 'white',
    bg: 'grey',
    focus: {
      fg: 'red',
      bg: 'white'
    }
  }
})

// Append our box to the screen.
screen.append(buttonEnable);

buttonEnable.on('click', function () {
  exec("adb -s emulator-5554 shell svc data enable")
})
// Create a box perfectly centered horizontally and vertically.
var buttonDisable = blessed.button({
  top: "center",
  left: "9%",
  mouse: true,
  shrink: true,
  name: 'disable',
  content: ' DISABLE ',
  style: {
    fg: 'white',
    bg: 'grey',
    focus: {
      fg: 'red',
      bg: 'white'
    }
  }
})

// Append our box to the screen.
screen.append(buttonDisable);

buttonDisable.on('click', function () {
  exec("adb -s emulator-5554 shell svc data disable")
}) 

// Create a box perfectly centered horizontally and vertically.
var buttonClear = blessed.button({
  top: "center",
  left: "80%",
  mouse: true,
  shrink: true,
  name: 'clear',
  content: ' CLEAR CACHE ',
  style: {
    fg: 'white',
    bg: 'grey',
    focus: {
      fg: 'red',
      bg: 'white'
    }
  }
})

// Append our box to the screen.
screen.append(buttonClear);

buttonClear.on('click', function () {
  exec("adb -s emulator-5554 shell pm clear com.mytroopers.app")
})
// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Render the screen.
screen.render();
