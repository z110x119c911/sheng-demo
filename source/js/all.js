$(document).ready(function () {
    //set click number
    var ClickNumber = 0;
    var dataArr = data;
    //onload
    window.onload = function () {
        type_List();
        unit_List();
        metal_List();
        //custom setting
        
        
    };
//---------------------------------------------------------------------------------------------
    $('#allList').change(function(){
        let except_product_str = `<option disabled selected>---選擇品名---</option>`;
        let alltype = $('#allList').val();
        if(alltype == '廚具'){
            for (let i = 0; i < dataArr.testArea.length; i++) {
                let string = `<option value="${dataArr.testArea[i].test}">${dataArr.testArea[i].test}</option>`
                except_product_str += string;
            }
            $('#table_product').empty().append(except_product_str);
        }else if(alltype == '額外項目'){
            for (let i = 0; i < dataArr.type.length; i++) {
                let string = `<option value="${dataArr.type[i].name}">${dataArr.type[i].name}</option>`
                except_product_str += string;
            }
            $('#table_product').empty().append(except_product_str);
        }
    });
    
//----自訂選項隱藏設定---------------------------------------------------------------
    $('#checkbox').click(function(){
        $('#normal_display').toggle();
        $('#custom_display').toggleClass('d-none');
    });
//----匯出按鈕設定---------------------------------------------------------------------------
    $('#submit').click(function (e) {
        //取編號
        ClickNumber ++;
    //let input empty
    $('[name="need_clean"]').empty();
    //取得選擇與材質
        //桶身
        const barrel = $('#barrel').val();
        //檯面
        const mesa = $('#mesa').val();
        //門板
        const plates = $('#plates').val();
        //取得客戶資訊
        const Name = $('#customer_Name').val();
        const Phone = $('#customer_Phone').val();
        const Date = $('#customer_Date').val();
        const Address = $('#customer_Address').val(); 
        
        //customer_information
        $('#customer_Name_ouput').append(Name);
        $('#customer_Phone_ouput').append(Phone);
        $('#customer_Date_ouput').append(Date);
        $('#work_Address_ouput').append(Address);
        //Material_select
        //桶身
        $('#barrel_span_material').append(barrel);
        //門板
        $('#mesa_span_material').append(mesa);
        //門板
        $('#plates_span_material').append(plates);
        
        //
        
        
        // preview table list
        let data = [];
        let listString = '';
        //
        var table_product = '';
        if ($('#normal_display').is(':visible')) 
        {
            table_product = $('#table_product').val();
            $('#custom_setting').attr('disabled');
        } else {
            table_product = $('#custom_setting').val();
            $('#table_product').attr('disabled');
        }
        //
        var table_kind = $('#table_kind').val();
        var table_quantity = $('#table_quantity').val();
        var table_number = $('#table_number').val();
        var table_price = $('#table_price').val();
        var table_totalPrice = $('#table_totalPrice').val();
        var table_text = $('#table_text').val(); 

        //put data in obj
        let obj_table = {
            ClickNumber: ClickNumber,
            product: table_product,
            kind: table_kind,
            number: table_quantity,
            quantity: table_number,
            price: table_price,
            totalPrice: table_totalPrice,
            text: table_text,
        };
        data.push(obj_table);
        
        console.log(obj_table);
        //run data of table list
        for (let i = 0; i < data.length; i++) {
            listString += `
                <tr>
                    <td class="text-center">${data[i].ClickNumber}</td>
                    <td>${data[i].product}</td>
                    <td>${data[i].kind}</td>
                    <td>${data[i].number}</td>
                    <td>${data[i].quantity}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].totalPrice}</td>
                    <td>${data[i].text}</td>
                </tr>
            `;
        }
        $('#list').append(listString);
        
    });
    // ---------------------------------------------------------------------------------
    //hide all setting UI
    $('#hide_Form').click(function(){
        $('#main').slideToggle();
    });
    //remove Table all DOM
    $('#reset_ALLMaterial').click(function(){
        ClickNumber = 0;
        $('#list').empty();
    });
    //remove Table last DOM
    $('#reset_LastOne').click(function () {
        if (ClickNumber > 0){
            ClickNumber --;
        }else if(ClickNumber < 0){
            ClickNumber = 0;
        }
        $('#list').children("tr:last").remove();
        
    });
    function type_List() {
        let allListstr = '';
        //類別
        for (let i = 0; i < dataArr.allList.length; i++) {
            let string = `<option value="${dataArr.allList[i].name}">${dataArr.allList[i].name}</option>`
            allListstr += string;
        }
        $('#allList').append(allListstr);
    }
    function unit_List(){
        let unitstr = '';
        //單位
        for (let i = 0; i < dataArr.unit.length; i++) {
            let string = `<option value="${dataArr.unit[i].size}">${dataArr.unit[i].size}</option>`
            unitstr += string;
        }
        $('#table_number').append(unitstr);
    }
    function metal_List(){
        let barrelstr = '';
        let mesastr = '';
        let platesstr = '';
        //三種材質 start
        for (let i = 0; i < dataArr.barrelMaterial.length; i++) {
            let string = `<option value="${dataArr.barrelMaterial[i].name}">${dataArr.barrelMaterial[i].name}</option>`
            barrelstr += string;
        }
        $('#barrel').append(barrelstr);
        for (let i = 0; i < dataArr.mesaMaterial.length; i++) {
            let string = `<option value="${dataArr.mesaMaterial[i].name}">${dataArr.mesaMaterial[i].name}</option>`
            mesastr += string;
        }
        $('#mesa').append(mesastr);
        for (let i = 0; i < dataArr.platesMaterial.length; i++) {
            let string = `<option value="${dataArr.platesMaterial[i].name}">${dataArr.platesMaterial[i].name}</option>`
            platesstr += string;
        }
        $('#plates').append(platesstr);
    }
});
$(function(){
    $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover',
          delay: 300,
          placement: 'bottom'
      });
  });
