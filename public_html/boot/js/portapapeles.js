//https://stackoverflow.com/questions/285522/find-html-label-associated-with-a-given-input
//le empuja el label al input en el DOM
var labels = document.getElementsByTagName('LABEL');
for (var i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor != '') {
         var elem = document.getElementById(labels[i].htmlFor);
         if (elem)
            elem.label = labels[i];         
    }
}

var inputIds = [
    'user-type',
    'extension-number',
    'device-info',
    'main-issue',
    'lmi-session',
    'steps-done',
    'final-resolution',
]

document.addEventListener('copy', function(e){
  event.preventDefault();
  if (event.clipboardData) {
    var result = '';
    var userType = document.getElementById('user-type');
    result += userType.label.innerHTML + ":\r\n";
    result += userType.value + "\r\n\r\n";

    var extensionNumber = document.getElementById('service');
    result += extensionNumber.label.innerHTML + ":\r\n";
    result += extensionNumber.value + "\r\n\r\n";
      
    var extensionNumber = document.getElementById('extension-number');
    result += extensionNumber.label.innerHTML + ":\r\n";
    result += extensionNumber.value + "\r\n\r\n";
      
    var extensionNumber = document.getElementById('network');
    result += extensionNumber.label.innerHTML + ":\r\n";
    result += extensionNumber.value + "\r\n\r\n";

    var devicesInfo = document.getElementsByName('device-info');
    console.log(deviceInfo)
    result += devicesInfo[0].label.innerHTML + ":\r\n";
    for (var i = 1; i <= devicesInfo.length; i++) {
         var deviceInfo = document.getElementById('device-info-' + i).value;
         var macId = document.getElementById('mac-id-' + i).value;
         result += deviceInfo + ' / ' + macId + "\r\n";
    }
    result += "\r\n\r\n";

    var mainIssue = document.getElementById('main-issue');
    result += mainIssue.label.innerHTML + ":\r\n";
    result += mainIssue.value + "\r\n\r\n";

    var lmiSession = document.getElementById('lmi-session');
    result += lmiSession.label.innerHTML + ":\r\n";
    result += lmiSession.value + "\r\n\r\n";

    var stepsDone = document.getElementById('steps-done');
    result += stepsDone.label.innerHTML + ":\r\n";
    result += stepsDone.value + "\r\n\r\n";

    var finalResolution = document.getElementById('final-resolution');
    result += finalResolution.label.innerHTML + ":\r\n";
    result += finalResolution.value;

    console.log(result)
    
    event.clipboardData.setData("text/plain", result);
  }
});

function submitForm() {
    event.preventDefault();
    document.execCommand("Copy");
}

var devices = 1;

function newDevice() {
    devices++;
    var form = document.getElementById('form1');
    var anchor = document.getElementById('anchor');

    var deviceInfoElem = document.getElementById('device-info-1');
    var newDeviceInfo = deviceInfoElem.cloneNode(true);
    newDeviceInfo.value = "Yealink";
    newDeviceInfo.id = newDeviceInfo.name + '-' + devices;
    form.insertBefore(newDeviceInfo, anchor);

    var macIdElem = document.getElementById('mac-id-1');
    var newMacId = macIdElem.cloneNode(true);
    newMacId.value = "";
    newMacId.id = newMacId.name + '-' + devices;
    form.insertBefore(newMacId, anchor);
}


