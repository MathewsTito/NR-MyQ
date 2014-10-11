NR-MyQ
======

Node Red Node for MyQ. Current supported commands are

*STATUS : To get current status of the garage door.
*OPEN: To open the garage door.
*CLOSE: To close the garage door.

The node can be configured with <i>a command</i> and <i>a device</i>. However these configurations
may be overridden at runtime (if needed) by the <b>msg.command</b> and <b>msg.device</b> properties.

Pre-requesites
------------

		myqnode (npm install myqnode)

		es6-promise (npm install es6-promise)


Installation
-----------

Clone the repository and execute the script <i>install.sh</i> after making it executable 
		
		chmod +x install.sh
