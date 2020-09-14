"use strict";

$(document).ready(function () {
  $('#submit').click(function () {
    var plates = $('#plates').val();
    var mesa = $('#mesa').val();
    var Barrel = $('#Barrel').val();
    var barrelMaterial = $('#barrelMaterial').val();
    var customer = $('#customer').val();
    var str = '';
    str += "\n        <tr>\n            <th scope=\"row\">".concat(customer, "</th>\n            <td>").concat(plates, "</td>\n            <td>").concat(mesa, "</td>\n            <td>").concat(Barrel, "</td>\n            <td>").concat(barrelMaterial, "</td>\n        </tr>\n        ");
    $('#add_meta').append(str);
  });
});
//# sourceMappingURL=all.js.map
