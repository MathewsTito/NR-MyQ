var RED = require("../../red/red");
var myQ = require("../../node_modules/myqnode/myQ.js").myQ;
var util = require("util");


module.exports = function(RED){

		function MyQDevice(n) {
				RED.nodes.createNode(this,n);
				var node = this;

				this.userid = n.userid;
				this.password = n.password;
				this.device = n.device;
		}


		MyQDevice.prototype.close = function() {
				// Called when the node is shutdown - eg on redeploy.
				// Allows ports to be closed, connections dropped etc.
				// eg: this.client.disconnect();
				util.log("MyQDevice closed");
		}



		function MyQCommand(n) {      
				RED.nodes.createNode(this,n);
				var node = this;

				node.command = n.command;
				node.device = RED.nodes.getNode(n.device);


				node.on('input', function(msg){

					//Override the configured command and deviceId with the one in 
					//the message, if present.
					if (typeof msg.command !== "undefined"){
							node.command = msg.command;
					}

					if (typeof msg.device !== "undefined"){
							node.device.device = msg.device;
					}

					util.log("Executing MyQ Command "+node.command+" with "+node.device.userid+"("+node.device.password+")"+node.device.device);

					if (node.command === "OPEN") {
							util.log("About to invoke OPEN Command");
							myQ.openDoor(node.device.userid,node.device.password,node.device.device)
								.then(function(respObj){
												util.log("OPEN Command completed sucessfully");
												node.send({"payload": respObj});								
											},
											function(respObj){
												util.log("OPEN Command completed UNSUCESSFULLY!!");
												node.send({"payload": respObj});
											});
				 
					 } else if (node.command === "CLOSE") {
							util.log("About to invoke CLOSE Command");
			 				myQ.closeDoor(node.device.userid,node.device.password,node.device.device)
								.then(function(respObj){
												util.log("CLOSE Command completed sucessfully");
												node.send({"payload": respObj});								
											},
											function(respObj){
												util.log("CLOSE Command completed UNSUCESSFULLY!!");
												node.send({"payload": respObj});
											});      
				
					} else if (node.command === "STATUS"){
							util.log("About to invoke STATUS Command");
							myQ.getDoorStatus(node.device.userid,node.device.password,node.device.device)
								.then(function(respObj){
												util.log("STATUS Command completed sucessfully");
												util.log(respObj);
												node.send({"payload": respObj});								
											},
											function(respObj){
												util.log("STATUS Command completed UNSUCESSFULLY!!");
												util.log(respObj);
												node.send({"payload": respObj});
											});
					}

				});

		}

		MyQCommand.prototype.close = function() {
				// Called when the node is shutdown - eg on redeploy.
				// Allows ports to be closed, connections dropped etc.
				// eg: this.client.disconnect();
				util.log("MyQCommand closed");
		}


		RED.nodes.registerType("MyQ Command", MyQCommand);
		RED.nodes.registerType("myq-device", MyQDevice);

}
