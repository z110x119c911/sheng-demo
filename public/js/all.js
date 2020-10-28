"use strict";

$(document).ready(function () {
  //set click number
  var ClickNumber = 0;
  var dataArr = data; //onload

  window.onload = function () {
    type_List();
    unit_List();
    metal_List(); //custom setting
  }; // $("[class='type_list']").onload = function(){
  //     type_List();
  // }
  //---------------------------------------------------------------------------------------------


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
    $("select[id='type_list']").append(allListstr);
  }

  function unit_List() {
    var str = ''; //單位

    for (var i = 0; i < dataArr.unit.length; i++) {
      var string = "<option value=\"".concat(dataArr.unit[i].size, "\">").concat(dataArr.unit[i].size, "</option>");
      str += string;
    }

    console.log(str);
    $('#table_number').append(str);
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

$(document).ready(function () {
  var dataArr = data;

  window.onload = function () {
    ALL_List();
    unit_List(); //桶身

    var barrelstr = '';

    for (var i = 0; i < dataArr.barrelMaterial.length; i++) {
      var string = "<option value=\"".concat(dataArr.barrelMaterial[i].name, "\">").concat(dataArr.barrelMaterial[i].name, "</option>");
      barrelstr += string;
    }

    $('#barrel').append(barrelstr); //門板

    var mesastr = '';

    for (var _i = 0; _i < dataArr.mesaMaterial.length; _i++) {
      var _string = "<option value=\"".concat(dataArr.mesaMaterial[_i].name, "\">").concat(dataArr.mesaMaterial[_i].name, "</option>");

      mesastr += _string;
    }

    $('#mesa').append(mesastr); //門板

    var platesstr = '';

    for (var _i2 = 0; _i2 < dataArr.platesMaterial.length; _i2++) {
      var _string2 = "<option value=\"".concat(dataArr.platesMaterial[_i2].name, "\">").concat(dataArr.platesMaterial[_i2].name, "</option>");

      platesstr += _string2;
    }

    $('#plates').append(platesstr);
  };

  $('.list1').change(function () {
    var value = $('.list1').val();

    if (value !== '自訂') {
      $('#type_area1').show();
      $('#customer1').hide();
    } else {
      $('#customer1').show();
      $('#type_area1').hide();
    }
  });
  $('.list2').change(function () {
    var value = $('.list2').val();

    if (value !== '自訂') {
      $('#type_area2').show();
      $('#customer2').hide();
    } else {
      $('#customer2').show();
      $('#type_area2').hide();
    }
  });
  $('.list3').change(function () {
    var value = $('.list3').val();

    if (value !== '自訂') {
      $('#type_area3').show();
      $('#customer3').hide();
    } else {
      $('#customer3').show();
      $('#type_area3').hide();
    }
  });
  $('.list4').change(function () {
    var value = $('.list4').val();

    if (value !== '自訂') {
      $('#type_area4').show();
      $('#customer4').hide();
    } else {
      $('#customer4').show();
      $('#type_area4').hide();
    }
  });
  $('.list5').change(function () {
    var value = $('.list5').val();

    if (value !== '自訂') {
      $('#type_area5').show();
      $('#customer5').hide();
    } else {
      $('#customer5').show();
      $('#type_area5').hide();
    }
  });
  $('.list6').change(function () {
    var value = $('.list6').val();

    if (value !== '自訂') {
      $('#type_area6').show();
      $('#customer6').hide();
    } else {
      $('#customer6').show();
      $('#type_area6').hide();
    }
  });
  $('.list7').change(function () {
    var value = $('.list7').val();

    if (value !== '自訂') {
      $('#type_area7').show();
      $('#customer7').hide();
    } else {
      $('#customer7').show();
      $('#type_area7').hide();
    }
  });
  $('.list8').change(function () {
    var value = $('.list8').val();

    if (value !== '自訂') {
      $('#type_area8').show();
      $('#customer8').hide();
    } else {
      $('#customer8').show();
      $('#type_area8').hide();
    }
  });
  $('.list9').change(function () {
    var value = $('.list9').val();

    if (value !== '自訂') {
      $('#type_area9').show();
      $('#customer9').hide();
    } else {
      $('#customer9').show();
      $('#type_area9').hide();
    }
  });
  $('.list10').change(function () {
    var value = $('.list10').val();

    if (value !== '自訂') {
      $('#type_area10').show();
      $('#customer10').hide();
    } else {
      $('#customer10').show();
      $('#type_area10').hide();
    }
  });
  $('.list11').change(function () {
    var value = $('.list11').val();

    if (value !== '自訂') {
      $('#type_area11').show();
      $('#customer11').hide();
    } else {
      $('#customer11').show();
      $('#type_area11').hide();
    }
  });
  $('.list12').change(function () {
    var value = $('.list12').val();

    if (value !== '自訂') {
      $('#type_area12').show();
      $('#customer12').hide();
    } else {
      $('#customer12').show();
      $('#type_area12').hide();
    }
  });
  $('.list13').change(function () {
    var value = $('.list13').val();

    if (value !== '自訂') {
      $('#type_area13').show();
      $('#customer13').hide();
    } else {
      $('#customer13').show();
      $('#type_area13').hide();
    }
  });
  $('.list14').change(function () {
    var value = $('.list14').val();

    if (value !== '自訂') {
      $('#type_area14').show();
      $('#customer14').hide();
    } else {
      $('#customer14').show();
      $('#type_area14').hide();
    }
  });
  $('.list15').change(function () {
    var value = $('.list15').val();

    if (value !== '自訂') {
      $('#type_area15').show();
      $('#customer15').hide();
    } else {
      $('#customer15').show();
      $('#type_area15').hide();
    }
  });
  $('.list16').change(function () {
    var value = $('.list16').val();

    if (value !== '自訂') {
      $('#type_area16').show();
      $('#customer16').hide();
    } else {
      $('#customer16').show();
      $('#type_area16').hide();
    }
  });
  $('.list17').change(function () {
    var value = $('.list17').val();

    if (value !== '自訂') {
      $('#type_area17').show();
      $('#customer17').hide();
    } else {
      $('#customer17').show();
      $('#type_area17').hide();
    }
  });
  $('.list18').change(function () {
    var value = $('.list18').val();

    if (value !== '自訂') {
      $('#type_area18').show();
      $('#customer18').hide();
    } else {
      $('#customer18').show();
      $('#type_area18').hide();
    }
  });
  $('.list19').change(function () {
    var value = $('.list19').val();

    if (value !== '自訂') {
      $('#type_area19').show();
      $('#customer19').hide();
    } else {
      $('#customer19').show();
      $('#type_area19').hide();
    }
  });
  $('.list20').change(function () {
    var value = $('.list20').val();

    if (value !== '自訂') {
      $('#type_area20').show();
      $('#customer20').hide();
    } else {
      $('#customer20').show();
      $('#type_area20').hide();
    }
  });

  function ALL_List() {
    var str = ''; //類別

    for (var i = 0; i < dataArr.all.length; i++) {
      var string = "<option value=\"".concat(dataArr.all[i].name, "\">").concat(dataArr.all[i].name, "</option>");
      str += string;
    }

    $("select[id='ALL_list']").append(str);
  }

  function unit_List() {
    var str = ''; //單位

    for (var i = 0; i < dataArr.unit.length; i++) {
      var string = "<option value=\"".concat(dataArr.unit[i].size, "\">").concat(dataArr.unit[i].size, "</option>");
      str += string;
    }

    $("select[id='unit']").append(str);
  }
});
"use strict";

$(document).ready(function () {
  $(document).keydown(function (event) {
    if (event.keyCode == '13') {
      $('#enter').click();
    }
  });
  $('#enter').click(function () {
    // ---------------------------------
    //主類別
    var value1 = $('.list1').val();
    var value2 = $('.list2').val();
    var value3 = $('.list3').val();
    var value4 = $('.list4').val();
    var value5 = $('.list5').val();
    var value6 = $('.list6').val();
    var value7 = $('.list7').val();
    var value8 = $('.list8').val();
    var value9 = $('.list9').val();
    var value10 = $('.list10').val();
    var value11 = $('.list11').val();
    var value12 = $('.list12').val();
    var value13 = $('.list13').val();
    var value14 = $('.list14').val();
    var value15 = $('.list15').val();
    var value16 = $('.list16').val();
    var value17 = $('.list17').val();
    var value18 = $('.list18').val();
    var value19 = $('.list19').val();
    var value20 = $('.list20').val();
    $('#a1').empty().append(value1);
    $('#b1').empty().append(value2);
    $('#c1').empty().append(value3);
    $('#d1').empty().append(value4);
    $('#e1').empty().append(value5);
    $('#f1').empty().append(value6);
    $('#g1').empty().append(value7);
    $('#h1').empty().append(value8);
    $('#i1').empty().append(value9);
    $('#j1').empty().append(value10);
    $('#k1').empty().append(value11);
    $('#l1').empty().append(value12);
    $('#m1').empty().append(value13);
    $('#n1').empty().append(value14);
    $('#o1').empty().append(value15);
    $('#p1').empty().append(value16);
    $('#q1').empty().append(value17);
    $('#r1').empty().append(value18);
    $('#s1').empty().append(value19);
    $('#t1').empty().append(value20); // ---------------------------------
    //自訂

    var self_value1 = $('#customer1 input').val();
    var self_value2 = $('#customer2 input').val();
    var self_value3 = $('#customer3 input').val();
    var self_value4 = $('#customer4 input').val();
    var self_value5 = $('#customer5 input').val();
    var self_value6 = $('#customer6 input').val();
    var self_value7 = $('#customer7 input').val();
    var self_value8 = $('#customer8 input').val();
    var self_value9 = $('#customer9 input').val();
    var self_value10 = $('#customer10 input').val();
    var self_value11 = $('#customer11 input').val();
    var self_value12 = $('#customer12 input').val();
    var self_value13 = $('#customer13 input').val();
    var self_value14 = $('#customer14 input').val();
    var self_value15 = $('#customer15 input').val();
    var self_value16 = $('#customer16 input').val();
    var self_value17 = $('#customer17 input').val();
    var self_value18 = $('#customer18 input').val();
    var self_value19 = $('#customer19 input').val();
    var self_value20 = $('#customer20 input').val();
    $('#a1').empty().append(self_value1);
    $('#b1').empty().append(self_value2);
    $('#c1').empty().append(self_value3);
    $('#d1').empty().append(self_value4);
    $('#e1').empty().append(self_value5);
    $('#f1').empty().append(self_value6);
    $('#g1').empty().append(self_value7);
    $('#h1').empty().append(self_value8);
    $('#i1').empty().append(self_value9);
    $('#j1').empty().append(self_value10);
    $('#k1').empty().append(self_value11);
    $('#l1').empty().append(self_value12);
    $('#m1').empty().append(self_value13);
    $('#n1').empty().append(self_value14);
    $('#o1').empty().append(self_value15);
    $('#p1').empty().append(self_value16);
    $('#q1').empty().append(self_value17);
    $('#r1').empty().append(self_value18);
    $('#s1').empty().append(self_value19);
    $('#t1').empty().append(self_value20); // ---------------------------------
    //數量

    var num_value1 = $('#num1').val();
    var num_value2 = $('#num2').val();
    var num_value3 = $('#num3').val();
    var num_value4 = $('#num4').val();
    var num_value5 = $('#num5').val();
    var num_value6 = $('#num6').val();
    var num_value7 = $('#num7').val();
    var num_value8 = $('#num8').val();
    var num_value9 = $('#num9').val();
    var num_value10 = $('#num10').val();
    var num_value11 = $('#num11').val();
    var num_value12 = $('#num12').val();
    var num_value13 = $('#num13').val();
    var num_value14 = $('#num14').val();
    var num_value15 = $('#num15').val();
    var num_value16 = $('#num16').val();
    var num_value17 = $('#num17').val();
    var num_value18 = $('#num18').val();
    var num_value19 = $('#num19').val();
    var num_value20 = $('#num20').val();
    $('#a2').empty().append(num_value1);
    $('#b2').empty().append(num_value2);
    $('#c2').empty().append(num_value3);
    $('#d2').empty().append(num_value4);
    $('#e2').empty().append(num_value5);
    $('#f2').empty().append(num_value6);
    $('#g2').empty().append(num_value7);
    $('#h2').empty().append(num_value8);
    $('#i2').empty().append(num_value9);
    $('#j2').empty().append(num_value10);
    $('#k2').empty().append(num_value11);
    $('#l2').empty().append(num_value12);
    $('#m2').empty().append(num_value13);
    $('#n2').empty().append(num_value14);
    $('#o2').empty().append(num_value15);
    $('#p2').empty().append(num_value16);
    $('#q2').empty().append(num_value17);
    $('#r2').empty().append(num_value18);
    $('#s2').empty().append(num_value19);
    $('#t2').empty().append(num_value20); // ---------------------------------
    //單位

    var unit_value1 = $('.unit1').val();
    var unit_value2 = $('.unit2').val();
    var unit_value3 = $('.unit3').val();
    var unit_value4 = $('.unit4').val();
    var unit_value5 = $('.unit5').val();
    var unit_value6 = $('.unit6').val();
    var unit_value7 = $('.unit7').val();
    var unit_value8 = $('.unit8').val();
    var unit_value9 = $('.unit9').val();
    var unit_value10 = $('.unit10').val();
    var unit_value11 = $('.unit11').val();
    var unit_value12 = $('.unit12').val();
    var unit_value13 = $('.unit13').val();
    var unit_value14 = $('.unit14').val();
    var unit_value15 = $('.unit15').val();
    var unit_value16 = $('.unit16').val();
    var unit_value17 = $('.unit17').val();
    var unit_value18 = $('.unit18').val();
    var unit_value19 = $('.unit19').val();
    var unit_value20 = $('.unit20').val();
    $('#a3').empty().append(unit_value1);
    $('#b3').empty().append(unit_value2);
    $('#c3').empty().append(unit_value3);
    $('#d3').empty().append(unit_value4);
    $('#e3').empty().append(unit_value5);
    $('#f3').empty().append(unit_value6);
    $('#g3').empty().append(unit_value7);
    $('#h3').empty().append(unit_value8);
    $('#i3').empty().append(unit_value9);
    $('#j3').empty().append(unit_value10);
    $('#k3').empty().append(unit_value11);
    $('#l3').empty().append(unit_value12);
    $('#m3').empty().append(unit_value13);
    $('#n3').empty().append(unit_value14);
    $('#o3').empty().append(unit_value15);
    $('#p3').empty().append(unit_value16);
    $('#q3').empty().append(unit_value17);
    $('#r3').empty().append(unit_value18);
    $('#s3').empty().append(unit_value19);
    $('#t3').empty().append(unit_value20); // ---------------------------------
    //單價

    var price_value1 = $('.price1').val();
    var price_value2 = $('.price2').val();
    var price_value3 = $('.price3').val();
    var price_value4 = $('.price4').val();
    var price_value5 = $('.price5').val();
    var price_value6 = $('.price6').val();
    var price_value7 = $('.price7').val();
    var price_value8 = $('.price8').val();
    var price_value9 = $('.price9').val();
    var price_value10 = $('.price10').val();
    var price_value11 = $('.price11').val();
    var price_value12 = $('.price12').val();
    var price_value13 = $('.price13').val();
    var price_value14 = $('.price14').val();
    var price_value15 = $('.price15').val();
    var price_value16 = $('.price16').val();
    var price_value17 = $('.price17').val();
    var price_value18 = $('.price18').val();
    var price_value19 = $('.price19').val();
    var price_value20 = $('.price20').val();
    $('#a4').empty().append(price_value1);
    $('#b4').empty().append(price_value2);
    $('#c4').empty().append(price_value3);
    $('#d4').empty().append(price_value4);
    $('#e4').empty().append(price_value5);
    $('#f4').empty().append(price_value6);
    $('#g4').empty().append(price_value7);
    $('#h4').empty().append(price_value8);
    $('#i4').empty().append(price_value9);
    $('#j4').empty().append(price_value10);
    $('#k4').empty().append(price_value11);
    $('#l4').empty().append(price_value12);
    $('#m4').empty().append(price_value13);
    $('#n4').empty().append(price_value14);
    $('#o4').empty().append(price_value15);
    $('#p4').empty().append(price_value16);
    $('#q4').empty().append(price_value17);
    $('#r4').empty().append(price_value18);
    $('#s4').empty().append(price_value19);
    $('#t4').empty().append(price_value20); // ---------------------------------
    //小計

    if (price_value1 != 0) {
      $('#a5').empty().append(price_value1 * num_value1);
    } else {
      $('#a5').empty().append('');
    }

    if (price_value2 != 0) {
      $('#b5').empty().append(price_value2 * num_value2);
    } else {
      $('#b5').empty().append('');
    }

    if (price_value3 != 0) {
      $('#c5').empty().append(price_value3 * num_value3);
    } else {
      $('#c5').empty().append('');
    }

    if (price_value4 != 0) {
      $('#d5').empty().append(price_value4 * num_value4);
    } else {
      $('#d5').empty().append('');
    }

    if (price_value5 != 0) {
      $('#e5').empty().append(price_value5 * num_value5);
    } else {
      $('#e5').empty().append('');
    }

    if (price_value6 != 0) {
      $('#f5').empty().append(price_value6 * num_value6);
    } else {
      $('#f5').empty().append('');
    }

    if (price_value7 != 0) {
      $('#g5').empty().append(price_value7 * num_value7);
    } else {
      $('#g5').empty().append('');
    }

    if (price_value8 != 0) {
      $('#h5').empty().append(price_value8 * num_value8);
    } else {
      $('#h5').empty().append('');
    }

    if (price_value9 != 0) {
      $('#i5').empty().append(price_value9 * num_value9);
    } else {
      $('#i5').empty().append('');
    }

    if (price_value10 != 0) {
      $('#j5').empty().append(price_value10 * num_value10);
    } else {
      $('#j5').empty().append('');
    }

    if (price_value11 != 0) {
      $('#k5').empty().append(price_value11 * num_value11);
    } else {
      $('#k5').empty().append('');
    }

    if (price_value12 != 0) {
      $('#l5').empty().append(price_value12 * num_value12);
    } else {
      $('#l5').empty().append('');
    }

    if (price_value13 != 0) {
      $('#m5').empty().append(price_value13 * num_value13);
    } else {
      $('#m5').empty().append('');
    }

    if (price_value14 != 0) {
      $('#n5').empty().append(price_value14 * num_value14);
    } else {
      $('#n5').empty().append('');
    }

    if (price_value15 != 0) {
      $('#o5').empty().append(price_value15 * num_value15);
    } else {
      $('#o5').empty().append('');
    }

    if (price_value16 != 0) {
      $('#p5').empty().append(price_value16 * num_value16);
    } else {
      $('#p5').empty().append('');
    }

    if (price_value17 != 0) {
      $('#q5').empty().append(price_value17 * num_value17);
    } else {
      $('#q5').empty().append('');
    }

    if (price_value18 != 0) {
      $('#r5').empty().append(price_value18 * num_value18);
    } else {
      $('#r5').empty().append('');
    }

    if (price_value19 != 0) {
      $('#s5').empty().append(price_value19 * num_value19);
    } else {
      $('#s5').empty().append('');
    }

    if (price_value20 != 0) {
      $('#t5').empty().append(price_value20 * num_value20);
    } else {
      $('#t5').empty().append('');
    } // let count_value1 = $('#a5').val();
    // let count_value2 = $('#b5').val();
    // let count_value3 = $('#c5').val();
    // let count_value4 = $('#d5').val();
    // let count_value5 = $('#e5').val();
    // let count_value6 = $('#f5').val();
    // let count_value7 = $('#g5').val();
    // let count_value8 = $('#h5').val();
    // let count_value9 = $('#i5').val();
    // let count_value10 = $('#j5').val();
    // let count_value11 = $('#k5').val();
    // let count_value12 = $('#l5').val();
    // let count_value13 = $('#m5').val();
    // let count_value14 = $('#n5').val();
    // let count_value15 = $('#o5').val();
    // let count_value16 = $('#p5').val();
    // let count_value17 = $('#q5').val();
    // let count_value18 = $('#r5').val();
    // let count_value19 = $('#s5').val();
    // let count_value20 = $('#t5').val();


    var TotalDollar = price_value1 * num_value1 + price_value2 * num_value2 + price_value3 * num_value3 + price_value4 * num_value4 + price_value5 * num_value5 + price_value6 * num_value6 + price_value7 * num_value7 + price_value8 * num_value8 + price_value9 * num_value9 + price_value10 * num_value10 + price_value11 * num_value11 + price_value12 * num_value12 + price_value13 * num_value13 + price_value14 * num_value14 + price_value15 * num_value15 + price_value16 * num_value16 + price_value17 * num_value17 + price_value18 * num_value18 + price_value19 * num_value19 + price_value20 * num_value20;
    $('#total').append(TotalDollar); // ---------------------------------
    //附加說明

    var note_value1 = $('#note1').val();
    var note_value2 = $('#note2').val();
    var note_value3 = $('#note3').val();
    var note_value4 = $('#note4').val();
    var note_value5 = $('#note5').val();
    var note_value6 = $('#note6').val();
    var note_value7 = $('#note7').val();
    var note_value8 = $('#note8').val();
    var note_value9 = $('#note9').val();
    var note_value10 = $('#note10').val();
    var note_value11 = $('#note11').val();
    var note_value12 = $('#note12').val();
    var note_value13 = $('#note13').val();
    var note_value14 = $('#note14').val();
    var note_value15 = $('#note15').val();
    var note_value16 = $('#note16').val();
    var note_value17 = $('#note17').val();
    var note_value18 = $('#note18').val();
    var note_value19 = $('#note19').val();
    var note_value20 = $('#note20').val();
    $('#a6').empty().append(note_value1);
    $('#b6').empty().append(note_value2);
    $('#c6').empty().append(note_value3);
    $('#d6').empty().append(note_value4);
    $('#e6').empty().append(note_value5);
    $('#f6').empty().append(note_value6);
    $('#g6').empty().append(note_value7);
    $('#h6').empty().append(note_value8);
    $('#i6').empty().append(note_value9);
    $('#j6').empty().append(note_value10);
    $('#k6').empty().append(note_value11);
    $('#l6').empty().append(note_value12);
    $('#m6').empty().append(note_value13);
    $('#n6').empty().append(note_value14);
    $('#o6').empty().append(note_value15);
    $('#p6').empty().append(note_value16);
    $('#q6').empty().append(note_value17);
    $('#r6').empty().append(note_value18);
    $('#s6').empty().append(note_value19);
    $('#t6').empty().append(note_value20); //取得選擇與材質
    //桶身

    var barrel_val = $('#barrel').val(); //檯面

    var mesa_val = $('#mesa').val(); //門板

    var plates_val = $('#plates').val(); //Material_select
    //桶身

    $('#barrel_span_material').append(barrel_val); //門板

    $('#mesa_span_material').append(mesa_val); //門板

    $('#plates_span_material').append(plates_val); //客戶資訊customer_information

    $('#customer_Name_ouput').append($('#customer_Name').val());
    $('#customer_Phone_ouput').append($('#customer_Phone').val());
    $('#customer_Date_ouput').append($('#customer_Date').val());
    $('#work_Address_ouput').append($('#customer_Address').val());
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
  }],
  "all": [{
    "name": "自訂"
  }, {
    "name": "-----廚具-----"
  }, {
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
  }]
};
//# sourceMappingURL=all.js.map
