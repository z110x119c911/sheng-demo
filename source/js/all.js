$(document).ready(function () {
    //set click number
    var ClickNumber = 0;
//---------------------------------------------------------------------------------------------
    
    //onload
    window.onload = function(){        
        const dataArr = data;
        let barrelstr = '';
        let mesastr = '';
        let platesstr = '';
        let unitstr = '';
        for (let i = 0; i < dataArr.barrelMaterial.length; i++){
            let string = `<option value="${dataArr.barrelMaterial[i].name}">${dataArr.barrelMaterial[i].name}</option>`
            barrelstr += string;
        }
        for (let i = 0; i < dataArr.mesaMaterial.length; i++) {
            let string = `<option value="${dataArr.mesaMaterial[i].name}">${dataArr.mesaMaterial[i].name}</option>`
            mesastr += string;
        }
        for (let i = 0; i < dataArr.platesMaterial.length; i++) {
            let string = `<option value="${dataArr.platesMaterial[i].name}">${dataArr.platesMaterial[i].name}</option>`
            platesstr += string;
        }
        for (let i = 0; i < dataArr.unit.length; i++) {
            let string = `<option value="${dataArr.unit[i].size}">${dataArr.unit[i].size}</option>`
            unitstr += string;

        }
        $('#barrel').append(barrelstr);
        $('#mesa').append(mesastr);
        $('#plates').append(platesstr);
        $('#table_number').append(unitstr);
    };

//---------------------------------------------------------------------------------------------

    $('#submit').click(function (e) {
    //get click number
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
        // //門板
        $('#mesa_span_material').append(mesa);
        // //門板
        $('#plates_span_material').append(plates);

        
        // preview table list
        let data = [];
        let listString = '';
        //get value of table list
        let table_product = $('#table_product').val(); 
        let table_kind = $('#table_kind').val();
        let table_quantity = $('#table_quantity').val();
        let table_number = $('#table_number').val();
        let table_price = $('#table_price').val();
        let table_totalPrice = $('#table_totalPrice').val();
        let table_text = $('#table_text').val(); 
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
            // console.log(data);
        }
        $('#list').append(listString);
    });
    //hide all setting UI
    $('#hide_Form').click(function(){
        $('#main').slideToggle();
    });
    $('#reset_ALLMaterial').click(function(){
        ClickNumber = 0;
        $('#list').empty();
    });
    //未完成
    $('#reset_LastOne').click(function () {
        if (ClickNumber > 0){
            ClickNumber --;
        }else if(ClickNumber < 0){
            ClickNumber = 0;
        }
        $('#list').children("tr:last").remove();
        
    });
});