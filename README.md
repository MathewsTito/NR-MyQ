NR-MyQ
======

Node Red Node for MyQ. Current supported commands are

* <b>STATUS</b>: To get current status of the garage door.
* <b>OPEN</b>: To open the garage door.
* <b>CLOSE</b>: To close the garage door.

The node can be configured with <i>a command</i> and <i>a device</i>. However these configurations
may be overridden at runtime (if needed) by the <b>msg.command</b> and <b>msg.device</b> properties.

Pre-requesites
------------

Requires the <b>myqnode</b> and <b>es6-promise</b> node modules. Install using npm as follows

		$ npm install myqnode
		$ npm install es6-promise


Installation
-----------

Clone the repository and execute the script <i>install.sh</i> after making it executable 
		
		$ chmod +x install.sh
		$ ./install.sh
