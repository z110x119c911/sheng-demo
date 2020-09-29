"use strict";

$(document).ready(function () {
  //set click number
  var ClickNumber = 0;
  var dataArr = data; //onload

  window.onload = function () {
    type_List();
    unit_List();
    metal_List(); //custom setting
  }; //---------------------------------------------------------------------------------------------


  $('#allList').change(function () {
    var except_product_str = "<option disabled selected>---\u9078\u64C7\u54C1\u540D---</option>";
    var alltype = $('#allList').val();

    if (alltype == '廚具') {
      for (var i = 0; i < dataArr.testArea.length; i++) {
        var string = "<option value=\"".concat(dataArr.testArea[i].test, "\">").concat(dataArr.testArea[i].test, "</option>");
        except_product_str += string;
      }

      $('#table_product').empty().append(except_product_str);
    } else if (alltype == '額外項目') {
      for (var _i = 0; _i < dataArr.type.length; _i++) {
        var _string = "<option value=\"".concat(dataArr.type[_i].name, "\">").concat(dataArr.type[_i].name, "</option>");

        except_product_str += _string;
      }

      $('#table_product').empty().append(except_product_str);
    }
  }); //----自訂選項隱藏設定---------------------------------------------------------------

  $('#checkbox').click(function () {
    $('#normal_display').toggle();
    $('#custom_display').toggleClass('d-none');
  }); //----匯出按鈕設定---------------------------------------------------------------------------

  $('#submit').click(function (e) {
    //取編號
    ClickNumber++; //let input empty 為了覆蓋原本的value

    $('[name="need_clean"]').empty(); //取得選擇與材質
    //桶身

    var barrel = $('#barrel').val(); //檯面

    var mesa = $('#mesa').val(); //門板

    var plates = $('#plates').val(); //客戶資訊customer_information

    $('#customer_Name_ouput').append($('#customer_Name').val());
    $('#customer_Phone_ouput').append($('#customer_Phone').val());
    $('#customer_Date_ouput').append($('#customer_Date').val());
    $('#work_Address_ouput').append($('#customer_Address').val()); //Material_select
    //桶身

    $('#barrel_span_material').append(barrel); //門板

    $('#mesa_span_material').append(mesa); //門板

    $('#plates_span_material').append(plates); // preview table list

    var data = [];
    var listString = ''; //

    var table_product = '';

    if ($('#normal_display').is(':visible')) {
      table_product = $('#table_product').val();
      $('#custom_setting').attr('disabled');
    } else {
      table_product = $('#custom_setting').val();
      $('#table_product').attr('disabled');
    } //


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
    data.push(obj_table);
    console.log(obj_table); //run data of table list

    for (var i = 0; i < data.length; i++) {
      listString += "\n            <tr>\n                <td class=\"text-center\">".concat(data[i].ClickNumber, "</td>\n                <td>").concat(data[i].product, "</td>\n                <td>").concat(data[i].kind, "</td>\n                <td>").concat(data[i].number, "</td>\n                <td>").concat(data[i].quantity, "</td>\n                <td>").concat(data[i].price, "</td>\n                <td>").concat(data[i].totalPrice, "</td>\n                <td>").concat(data[i].text, "</td>\n            </tr>\n        ");
    }

    $('#list').append(listString);
  }); // 各個click設定------------------------------------------------------------
  //hide all setting UI

  $('#hide_Form').click(function () {
    $('#main').slideToggle();
  }); //remove Table all DOM

  $('#reset_ALLMaterial').click(function () {
    ClickNumber = 0;
    $('#list').empty();
  }); //remove Table last DOM

  $('#reset_LastOne').click(function () {
    if (ClickNumber > 0) {
      ClickNumber--;
    } else if (ClickNumber < 0) {
      ClickNumber = 0;
    }

    $('#list').children("tr:last").remove();
  }); //清除自訂選項input內容

  $('#custom_setting_clear').click(function () {
    $('#custom_setting').val("");
  }); //清除自訂選項input內容

  $('#table_clear').click(function () {
    $('#table_quantity').val("");
    $('#table_price').val("");
    $('#table_totalPrice').val("");
    $('#table_text').val("");
  }); //自訂函示

  function type_List() {
    var allListstr = ''; //類別

    for (var i = 0; i < dataArr.allList.length; i++) {
      var string = "<option value=\"".concat(dataArr.allList[i].name, "\">").concat(dataArr.allList[i].name, "</option>");
      allListstr += string;
    }

    $('#allList').append(allListstr);
  }

  function unit_List() {
    var unitstr = ''; //單位

    for (var i = 0; i < dataArr.unit.length; i++) {
      var string = "<option value=\"".concat(dataArr.unit[i].size, "\">").concat(dataArr.unit[i].size, "</option>");
      unitstr += string;
    }

    $('#table_number').append(unitstr);
  }

  function metal_List() {
    var barrelstr = '';
    var mesastr = '';
    var platesstr = ''; //三種材質 start

    for (var i = 0; i < dataArr.barrelMaterial.length; i++) {
      var string = "<option value=\"".concat(dataArr.barrelMaterial[i].name, "\">").concat(dataArr.barrelMaterial[i].name, "</option>");
      barrelstr += string;
    }

    $('#barrel').append(barrelstr);

    for (var _i2 = 0; _i2 < dataArr.mesaMaterial.length; _i2++) {
      var _string2 = "<option value=\"".concat(dataArr.mesaMaterial[_i2].name, "\">").concat(dataArr.mesaMaterial[_i2].name, "</option>");

      mesastr += _string2;
    }

    $('#mesa').append(mesastr);

    for (var _i3 = 0; _i3 < dataArr.platesMaterial.length; _i3++) {
      var _string3 = "<option value=\"".concat(dataArr.platesMaterial[_i3].name, "\">").concat(dataArr.platesMaterial[_i3].name, "</option>");

      platesstr += _string3;
    }

    $('#plates').append(platesstr);
  }
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover',
    delay: 300,
    placement: 'bottom'
  });
});
"use strict";
"use strict";

var data = {
  "allList": [{
    "name": "廚具"
  }, {
    "name": "額外項目"
  }],
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
  //單位
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
  }],
  //額外項目
  "type": [{
    "name": "上系統櫥櫃"
  }, {
    "name": "下系統櫥櫃(含檯面)"
  }, {
    "name": "電器櫃"
  }, {
    "name": "冰箱上櫃"
  }, {
    "name": "冰槽桶身更改"
  }, {
    "name": "修飾版"
  }, {
    "name": "檯面加工工資"
  }, {
    "name": "水槽"
  }, {
    "name": "水槽加工工資"
  }, {
    "name": "水龍頭"
  }, {
    "name": "抽屜"
  }, {
    "name": "拉籃"
  }, {
    "name": "側拉籃"
  }, {
    "name": "緩衝轉角小怪"
  }, {
    "name": "緩衝高身置物籃"
  }, {
    "name": "鉸鏈"
  }, {
    "name": "上/下掀門"
  }, {
    "name": "把手"
  }, {
    "name": "瓦斯爐"
  }, {
    "name": "排油煙機"
  }, {
    "name": "烘碗機"
  }, {
    "name": "踢腳"
  }, {
    "name": "強化烤漆玻璃"
  }, {
    "name": "安裝費"
  }, {
    "name": "清運"
  }],
  "testArea": [{
    "test": "測試1"
  }, {
    "test": "測試2"
  }, {
    "test": "測試3"
  }]
};
$(document).ready(function () {
  $('#TestSubmit').click(function () {});
});
//# sourceMappingURL=all.js.map
