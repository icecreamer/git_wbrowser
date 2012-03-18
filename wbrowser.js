function wbrowser_application(checknum,pid,args){
	var app = new eyeos.application.wbrowser(checknum,pid,args);
	app.drawGUI();
}

qx.Class.define("eyeos.application.wbrowser",{
	extend:eyeos.system.EyeApplication,

	construct:function(checknum,pid,args){
		arguments.callee.base.call(this,'wbrowser',checknum,pid);
	},
	events:{
			"post": "qx.event.type.Data"
        },
	members:{
		drawGUI:function(){
			var win = new qx.ui.window.Window('wbrowser',"index.php?extern=/images/16x16/apps/preferences-web-browser-shortcuts.png");
			win.setAllowClose(true);
			win.setAllowMaximize(true);
			win.setAllowMinimize(true);
    		        //win.setLayout(new qx.ui.layout.VBox());
			layout=new qx.ui.layout.Grid(0,0);
			win.setLayout(layout);
			win.set({width:800,height:800});
			win.setContentPadding(0);
    		        //var firstComposite = new qx.ui.container.Composite(new qx.ui.layout.HBox(2));
			//var firstComposite = new qx.ui.container.Composite(new qx.ui.layout.Grid());
			//win.add(firstComposite,{row:0,column:0});


			//add history menubutton
			//var historyButton=new qx.ui.menubar.Button("History");
			//var bookmarkButton=new qx.ui.menubar.Button("BookMark");
			//var historyButton=new qx.ui.menubar.MenuBar();
			//var bookmarkButton=new qx.ui.menubar.MenuBar();
			//win.add(historyButton,{row:0,column:0});
			//win.add(bookmarkButton,{row:0,column:1});
			//var filebutton=new qx.ui.form.Button("file");
			//historyButton.add(filebutton);
			
			//var file=new qx.ui.menu.Menu("files");
			//var first=new qx.ui.menu.Button("first");
			//var second=new qx.ui.menu.Button("second";)
			//file.add(first);
			//file.addAfter(second,first);
			//win.add(file,{row:0,column:0});

			/*//add the menubar
			var menuBar=new qx.ui.menu.MenuBar();
			win.add(menuBar,{row:0,column:0});
			//add the history,bookmark button
			var history=new qx.ui.menu.Button("history");
			var bookmark=new qx.ui.menu.Button("bookmark");
			menuBar.add(history);
			menuBar.add(bookmark);
   			*/

			//add the toolbar
			var toolbar = new qx.ui.toolbar.ToolBar();
			toolbar.setHeight(20);
			win.add(toolbar,{row:0,column:0});
			//add the backward button
			var backButton = new qx.ui.toolbar.Button("",'index.php?extern=/backward.png');
			backButton.setShow("icon");//show the label or icon 
			backButton.setEnabled(false);
			//toolbar.add(backButton);
			toolbar.add(backButton);
			//add the forward button
			var forwardButton = new qx.ui.toolbar.Button("",'index.php?extern=/forward.png');
			forwardButton.setShow("icon");
			forwardButton.setEnabled(false);
			toolbar.add(forwardButton);
			//add the refresh button
			var refreshButton = new qx.ui.toolbar.Button("",'index.php?extern=/refresh.png');
			refreshButton.setShow("icon");
			toolbar.add(refreshButton);
                       //add the url field
			var urlField = new qx.ui.form.TextArea("please enter the url....");
			urlField.setWidth(750);
			urlField.setHeight(10);
			toolbar.add(urlField);
			//add the set button
			var goButton = new qx.ui.toolbar.Button("",'index.php?extern=/images/22x22/actions/go-next.png');
			goButton.setShow("icon");
			toolbar.add(goButton);

			//splitbutton=new qx.ui.toolbar.SplitButton("history");
			//toolbar.add(splitbutton);
			
			//firstComposite.add(toolbar);
			//win.setContentPadding(0);

			//add the menu bar			
			var menubar=new qx.ui.toolbar.ToolBar();
			win.add(menubar,{row:1,column:0});
			var history=new qx.ui.toolbar.MenuButton("History(H)");
			var bookmark=new qx.ui.toolbar.MenuButton("BookMark(BM)");
			var setButton=new qx.ui.toolbar.MenuButton("Set(S)");
			menubar.add(history);
			menubar.add(bookmark);
			menubar.add(setButton);

			var iframe = new qx.ui.embed.Iframe(qx.util.ResourceManager.getInstance().toUri("http://www.baidu.com"));
		        win.add(iframe, {row:2,column:0 });

			goButton.addListener("execute", function() {
				this.fireDataEvent("post", urlField.getValue());
				iframe.setSource(urlField.getValue());
				iframe.reload();
		        }, this);

			urlField.addListener("input", function(e) {
				var value = e.getData();
				goButton.setEnabled(value.length > 0);
			}, this);

			goButton.setEnabled(false);
			
			layout.setRowFlex(2,1);
			win.open();
		}
	}
});
