const ele = require('electron');
const { app, BrowserWindow } = require('electron');
const { Menu, Tray } = require('electron');
const url = require('url');
const path = require('path');






let win
function createWindow () {
            // Create the browser window.
             win = new BrowserWindow({
              width: 1000,
              height: 1000,
              webPreferences: {
                nodeIntegration: true
              },
              icon:path.join(__dirname,'assets/azan.ico'),
              // titleBarStyle: 'customButtonsOnHover',
              //  frame: false 
            });


            win.setMenu(null);




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


            // win.loadFile('index.html')
            // loadURL('file://' + __dirname + '/index.html');
            win.loadURL(url.format({
                  pathname: path.join(__dirname, 'index.html'),
                  protocol: 'file:',
                  slashes: true
              }));
}



app.whenReady().then(createWindow)




let tray = null

app.whenReady().then(() => {
                // let iconPath = path.join(__dirname,'assets/azan.ico');
                tray = new Tray(path.join(__dirname,'assets/azan.ico'));
                const contextMenu = Menu.buildFromTemplate([
                      { label: 'نمایش پنجره برنامه', click:  function(){
                      win.show();
                  } },
                  { label: 'بستن برنامه', click:  function(){
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





