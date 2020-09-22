"use strict";

$(document).ready(function () {
  //set click number
  var ClickNumber = 0; //---------------------------------------------------------------------------------------------
  //onload

  window.onload = function () {
    var dataArr = data;
    var barrelstr = '';
    var mesastr = '';
    var platesstr = '';
    var unitstr = '';

    for (var i = 0; i < dataArr.barrelMaterial.length; i++) {
      var string = "<option value=\"".concat(dataArr.barrelMaterial[i].name, "\">").concat(dataArr.barrelMaterial[i].name, "</option>");
      barrelstr += string;
    }

    for (var _i = 0; _i < dataArr.mesaMaterial.length; _i++) {
      var _string = "<option value=\"".concat(dataArr.mesaMaterial[_i].name, "\">").concat(dataArr.mesaMaterial[_i].name, "</option>");

      mesastr += _string;
    }

    for (var _i2 = 0; _i2 < dataArr.platesMaterial.length; _i2++) {
      var _string2 = "<option value=\"".concat(dataArr.platesMaterial[_i2].name, "\">").concat(dataArr.platesMaterial[_i2].name, "</option>");

      platesstr += _string2;
    }

    for (var _i3 = 0; _i3 < dataArr.unit.length; _i3++) {
      var _string3 = "<option value=\"".concat(dataArr.unit[_i3].size, "\">").concat(dataArr.unit[_i3].size, "</option>");

      unitstr += _string3;
    }

    $('#barrel').append(barrelstr);
    $('#mesa').append(mesastr);
    $('#plates').append(platesstr);
    $('#table_number').append(unitstr);
  }; //---------------------------------------------------------------------------------------------


  $('#submit').click(function (e) {
    //get click number
    ClickNumber++; //let input empty

    $('[name="need_clean"]').empty(); //取得選擇與材質
    //桶身

    var barrel = $('#barrel').val(); //檯面

    var mesa = $('#mesa').val(); //門板

    var plates = $('#plates').val(); //取得客戶資訊

    var Name = $('#customer_Name').val();
    var Phone = $('#customer_Phone').val();
    var Date = $('#customer_Date').val();
    var Address = $('#customer_Address').val(); //customer_information

    $('#customer_Name_ouput').append(Name);
    $('#customer_Phone_ouput').append(Phone);
    $('#customer_Date_ouput').append(Date);
    $('#work_Address_ouput').append(Address); //Material_select
    //桶身

    $('#barrel_span_material').append(barrel); // //門板

    $('#mesa_span_material').append(mesa); // //門板

    $('#plates_span_material').append(plates); // preview table list

    var data = [];
    var listString = ''; //get value of table list

    var table_product = $('#table_product').val();
    var table_kind = $('#table_kind').val();
    var table_quantity = $('#table_quantity').val();
    var table_number = $('#table_number').val();
    var table_price = $('#table_price').val();
    var table_totalPrice = $('#table_totalPrice').val();
    var table_text = $('#table_text').val(); //put data in obj

    var obj_table = {
      ClickNumber: ClickNumber,
      product: table_product,
      kind: table_kind,
      number: table_quantity,
      quantity: table_number,
      price: table_price,
      totalPrice: table_totalPrice,
      text: table_text
    };
    data.push(obj_table); //run data of table list

    for (var i = 0; i < data.length; i++) {
      listString += "\n                <tr>\n                    <td class=\"text-center\">".concat(data[i].ClickNumber, "</td>\n                    <td>").concat(data[i].product, "</td>\n                    <td>").concat(data[i].kind, "</td>\n                    <td>").concat(data[i].number, "</td>\n                    <td>").concat(data[i].quantity, "</td>\n                    <td>").concat(data[i].price, "</td>\n                    <td>").concat(data[i].totalPrice, "</td>\n                    <td>").concat(data[i].text, "</td>\n                </tr>\n            "); // console.log(data);
    }

    $('#list').append(listString);
  }); //hide all setting UI

  $('#hide_Form').click(function () {
    $('#main').slideToggle();
  });
  $('#reset_ALLMaterial').click(function () {
    ClickNumber = 0;
    $('#list').empty();
  }); //未完成

  $('#reset_LastOne').click(function () {
    if (ClickNumber > 0) {
      ClickNumber--;
    } else if (ClickNumber < 0) {
      ClickNumber = 0;
    }

    $('#list').children("tr:last").remove();
  });
});
"use strict";

var data = {
  // "title":"桶身選擇與材質",
  "barrel": [{
    "name": "上櫃"
  }, {
    "name": "下櫃"
  }, {
    "name": "上下櫃"
  }],
  "barrelMaterial": [{
    "name": "木桶"
  }, {
    "name": "白鐵桶"
  }, {
    "name": "白鐵雙桶"
  }, {
    "name": "發泡桶"
  }],
  // "title": "檯面選擇與材質",
  "mesa": [{
    "name": ""
  }, {
    "name": ""
  }, {
    "name": ""
  }],
  "mesaMaterial": [{
    "name": "無檯面"
  }, {
    "name": "美耐"
  }, {
    "name": "不鏽鋼"
  }, {
    "name": "人造石"
  }, {
    "name": "人造石(韓)"
  }, {
    "name": "石英石"
  }, {
    "name": "矽鋼石"
  }],
  // "title": "門板選擇與材質",
  "plates": [{
    "name": ""
  }, {
    "name": ""
  }, {
    "name": ""
  }],
  "platesMaterial": [{
    "name": "美耐門"
  }, {
    "name": "水晶門/結晶門"
  }, {
    "name": "結晶六面"
  }, {
    "name": "高壓門"
  }],
  "unit": [{
    "size": "公分"
  }, {
    "size": "片(門)"
  }, {
    "size": "式"
  }, {
    "size": "支"
  }, {
    "size": "抽"
  }, {
    "size": "組"
  }, {
    "size": "台"
  }, {
    "size": "數片"
  }]
};
$(document).ready(function () {
  $('#TestSubmit').click(function () {});
});
//# sourceMappingURL=all.js.map
