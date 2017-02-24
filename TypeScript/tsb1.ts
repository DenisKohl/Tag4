function testFunc(val){
	return "Test, " + val;
}

var val = "Value";

document.body.innerHTML = testFunc(val);