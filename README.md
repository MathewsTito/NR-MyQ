NR-MyQ
======

Node Red Node for MyQ. Current supported commands are

STATUS : To get current status of the garage door.
OPEN: To open the garage door.
CLOSE: To close the garage door.

The node can be configured with a command and a device. However these configurations
may be overridden at runtime (if needed) by the msg.command and msg.device properties.

Pre-requesites
------------

myqnode (npm install myqnode)

es6-promise (npm install es6-promise)


Installation
-----------

Clone the repository and execute install.sh after making it executable (chmod +x install.sh)
