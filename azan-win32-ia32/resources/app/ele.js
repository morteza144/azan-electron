const ele = require('electron');
const { app, BrowserWindow } = require('electron');
const { Menu, Tray } = require('electron');
const url = require('url');
const path = require('path');


let win;
let splash;

function createWindow () {
  splash = new BrowserWindow({width: 600, height: 338, transparent: true, frame: false, alwaysOnTop: true});
  splash.loadURL(`file://${__dirname}/splash.html`);
        // Create the browser window.
         win = new BrowserWindow({
          width: 950,
          height: 550,
          show: false,
          transparent: true,
          webPreferences: {
            nodeIntegration: true
          }
        })
        win.setMenu(null);

        win.loadURL(
                url.format({
                  pathname: path.join(__dirname, "index.html"),
                  protocol: "file:",
                  slashes: true
                })
         );
        win.on('minimize',function(event){
            event.preventDefault();
            win.hide();
        });



        win.on('close', function (event) {
                if(!app.isQuiting){
                    event.preventDefault();
                    win.hide();
                }
         return false;
        });
        setTimeout(()=>{
          splash.destroy();
          win.show();
        },12000);
}

app.whenReady().then(createWindow);






let tray = null
app.whenReady().then(() => {
        tray = new Tray(path.join(__dirname,'assets/azan.ico'))
        const contextMenu = Menu.buildFromTemplate([
              { label: 'باز کردن پنجره برنامه', click:  function(){
              win.show();
          } },
          { label: 'خروج کامل از برنامه', click:  function(){
              app.isQuiting = true;
              app.quit();
              app.quit();
              app.quit();
          } }
        ])
        // tray.setToolTip('This is my application.')
        tray.setContextMenu(contextMenu)
          tray.on('click', function  () {
           win.show();
        });
})
