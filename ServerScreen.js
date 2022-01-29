class serverScreen
{

//constructor
constructor()
{

//creating buttons
this.createServerButton = createButton('Create Server');
this.addServerButton = createButton('Add Server');
this.joinServerButton = createButton('Join Server');

}


//function hide
hide()
{
console.log("here2")
this.createServerButton.hide();
this.addServerButton.hide();
this.joinServerButton.hide();

}


handleMousePressed()
{

//event when createServerButton is pressed
this.createServerButton.mousePressed(()=>
{
console.log("here")
//hiding buttons
this.createServerButton.hide();
this.addServerButton.hide();
this.joinServerButton.hide();

//changing gameState
gameState = "createServer"

})


// event when addServerButton is pressed
this.addServerButton.mousePressed(()=>
{


//hiding buttons
this.createServerButtton.hide();
this.addServerButton.hide();
this.joinServerButton.hide();

//changing gameState
gameState = "addServer"

})


// event when joinServerButton is pressed
this.joinServerButton.mousePressed(()=>
{


//hiding buttons
this.createServerButtton.hide();
this.addServerButton.hide();
this.joinServerButton.hide();

//changing gameState
gameState = "joinServer"

})

}


//function display
display()
{

//giving position to buttons
this.createServerButton.position(170,100,275,65);
this.addServerButton.position(170,250,275,65);
this.joinServerButton.position(170,400,275,65);

this.handleMousePressed();

}


}