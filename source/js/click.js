$(document).ready(function () {
    $(document).keydown(function(event){
        if(event.keyCode == '13'){
            $('#enter').click();
        }
    })
    $('#enter').click(function(){
        // ---------------------------------
        //主類別
        let value1 = $('.list1').val();
        let value2 = $('.list2').val();
        let value3 = $('.list3').val();
        let value4 = $('.list4').val();
        let value5 = $('.list5').val();

        let value6 = $('.list6').val();
        let value7 = $('.list7').val();
        let value8 = $('.list8').val();
        let value9 = $('.list9').val();
        let value10 = $('.list10').val();

        let value11 = $('.list11').val();
        let value12 = $('.list12').val();
        let value13 = $('.list13').val();
        let value14 = $('.list14').val();
        let value15 = $('.list15').val();

        let value16 = $('.list16').val();
        let value17 = $('.list17').val();
        let value18 = $('.list18').val();
        let value19 = $('.list19').val();
        let value20 = $('.list20').val();

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
        $('#t1').empty().append(value20);

        // ---------------------------------
        //自訂

        let self_value1 = $('#customer1 input').val();
        let self_value2 = $('#customer2 input').val();
        let self_value3 = $('#customer3 input').val();
        let self_value4 = $('#customer4 input').val();
        let self_value5 = $('#customer5 input').val();

        let self_value6 = $('#customer6 input').val();
        let self_value7 = $('#customer7 input').val();
        let self_value8 = $('#customer8 input').val();
        let self_value9 = $('#customer9 input').val();
        let self_value10 = $('#customer10 input').val();

        let self_value11 = $('#customer11 input').val();
        let self_value12 = $('#customer12 input').val();
        let self_value13 = $('#customer13 input').val();
        let self_value14 = $('#customer14 input').val();
        let self_value15 = $('#customer15 input').val();

        let self_value16 = $('#customer16 input').val();
        let self_value17 = $('#customer17 input').val();
        let self_value18 = $('#customer18 input').val();
        let self_value19 = $('#customer19 input').val();
        let self_value20 = $('#customer20 input').val();
        

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
        $('#t1').empty().append(self_value20);


        // ---------------------------------
        //數量

        let num_value1 = $('#num1').val();
        let num_value2 = $('#num2').val();
        let num_value3 = $('#num3').val();
        let num_value4 = $('#num4').val();
        let num_value5 = $('#num5').val();

        let num_value6 = $('#num6').val();
        let num_value7 = $('#num7').val();
        let num_value8 = $('#num8').val();
        let num_value9 = $('#num9').val();
        let num_value10 = $('#num10').val();

        let num_value11 = $('#num11').val();
        let num_value12 = $('#num12').val();
        let num_value13 = $('#num13').val();
        let num_value14 = $('#num14').val();
        let num_value15 = $('#num15').val();

        let num_value16 = $('#num16').val();
        let num_value17 = $('#num17').val();
        let num_value18 = $('#num18').val();
        let num_value19 = $('#num19').val();
        let num_value20 = $('#num20').val();


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
        $('#t2').empty().append(num_value20);


        // ---------------------------------
        //單位

        let unit_value1 = $('.unit1').val();
        let unit_value2 = $('.unit2').val();
        let unit_value3 = $('.unit3').val();
        let unit_value4 = $('.unit4').val();
        let unit_value5 = $('.unit5').val();

        let unit_value6 = $('.unit6').val();
        let unit_value7 = $('.unit7').val();
        let unit_value8 = $('.unit8').val();
        let unit_value9 = $('.unit9').val();
        let unit_value10 = $('.unit10').val();

        let unit_value11 = $('.unit11').val();
        let unit_value12 = $('.unit12').val();
        let unit_value13 = $('.unit13').val();
        let unit_value14 = $('.unit14').val();
        let unit_value15 = $('.unit15').val();

        let unit_value16 = $('.unit16').val();
        let unit_value17 = $('.unit17').val();
        let unit_value18 = $('.unit18').val();
        let unit_value19 = $('.unit19').val();
        let unit_value20 = $('.unit20').val();


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
        $('#t3').empty().append(unit_value20);


        // ---------------------------------
        //單價

        let price_value1 = $('.price1').val();
        let price_value2 = $('.price2').val();
        let price_value3 = $('.price3').val();
        let price_value4 = $('.price4').val();
        let price_value5 = $('.price5').val();

        let price_value6 = $('.price6').val();
        let price_value7 = $('.price7').val();
        let price_value8 = $('.price8').val();
        let price_value9 = $('.price9').val();
        let price_value10 = $('.price10').val();

        let price_value11 = $('.price11').val();
        let price_value12 = $('.price12').val();
        let price_value13 = $('.price13').val();
        let price_value14 = $('.price14').val();
        let price_value15 = $('.price15').val();

        let price_value16 = $('.price16').val();
        let price_value17 = $('.price17').val();
        let price_value18 = $('.price18').val();
        let price_value19 = $('.price19').val();
        let price_value20 = $('.price20').val();


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
        $('#t4').empty().append(price_value20);


        // ---------------------------------
        //小計

        if(price_value1 != 0){
            $('#a5').empty().append(price_value1 * num_value1);
        }else{
            $('#a5').empty().append('');
        }
        if(price_value2 != 0){
            $('#b5').empty().append(price_value2 * num_value2);
        }else{
            $('#b5').empty().append('');
        } 
        if(price_value3 != 0){
            $('#c5').empty().append(price_value3 * num_value3);
        }else{
            $('#c5').empty().append('');
        } 
        if(price_value4 != 0){
            $('#d5').empty().append(price_value4 * num_value4);
        }else{
            $('#d5').empty().append('');
        } 
        if(price_value5 != 0){
            $('#e5').empty().append(price_value5 * num_value5);
        }else{
            $('#e5').empty().append('');
        } 
        if(price_value6 != 0){
            $('#f5').empty().append(price_value6 * num_value6);
        }else{
            $('#f5').empty().append('');
        } 
        if(price_value7 != 0){
            $('#g5').empty().append(price_value7 * num_value7);
        }else{
            $('#g5').empty().append('');
        }  
        if(price_value8 != 0){
            $('#h5').empty().append(price_value8 * num_value8);
        }else{
            $('#h5').empty().append('');
        }  
        if(price_value9 != 0){
            $('#i5').empty().append(price_value9 * num_value9);
        }else{
            $('#i5').empty().append('');
        }  
        if(price_value10 != 0){
            $('#j5').empty().append(price_value10 * num_value10);
        }else{
            $('#j5').empty().append('');
        }  
        if(price_value11 != 0){
            $('#k5').empty().append(price_value11 * num_value11);
        }else{
            $('#k5').empty().append('');
        }  
        if(price_value12 != 0){
            $('#l5').empty().append(price_value12 * num_value12);
        }else{
            $('#l5').empty().append('');
        }  
        if(price_value13 != 0){
            $('#m5').empty().append(price_value13 * num_value13);
        }else{
            $('#m5').empty().append('');
        }  
        if(price_value14 != 0){
            $('#n5').empty().append(price_value14 * num_value14);
        }else{
            $('#n5').empty().append('');
        }  
        if(price_value15 != 0){
            $('#o5').empty().append(price_value15 * num_value15);
        }else{
            $('#o5').empty().append('');
        }  
        if(price_value16 != 0){
            $('#p5').empty().append(price_value16 * num_value16);
        }else{
            $('#p5').empty().append('');
        }  
        if(price_value17 != 0){
            $('#q5').empty().append(price_value17 * num_value17);
        }else{
            $('#q5').empty().append('');
        }  
        if(price_value18 != 0){
            $('#r5').empty().append(price_value18 * num_value18);
        }else{
            $('#r5').empty().append('');
        }  
        if(price_value19 != 0){
            $('#s5').empty().append(price_value19 * num_value19);
        }else{
            $('#s5').empty().append('');
        }  
        if(price_value20 != 0){
            $('#t5').empty().append(price_value20 * num_value20);
        }else{
            $('#t5').empty().append('');
        }  
            
        // let count_value1 = $('#a5').val();
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
        
        let TotalDollar = (price_value1 * num_value1 +
                        price_value2 * num_value2 +
                        price_value3 * num_value3 +
                        price_value4 * num_value4 +
                        price_value5 * num_value5 +
                        price_value6 * num_value6 +
                        price_value7 * num_value7 +
                        price_value8 * num_value8 +
                        price_value9 * num_value9 +
                        price_value10 * num_value10 +
                        price_value11 * num_value11 +
                        price_value12 * num_value12 +
                        price_value13 * num_value13 +
                        price_value14 * num_value14 +
                        price_value15 * num_value15 +
                        price_value16 * num_value16 +
                        price_value17 * num_value17 +
                        price_value18 * num_value18 +
                        price_value19 * num_value19 +
                        price_value20 * num_value20)
        $('#total').append(TotalDollar);
        

        // ---------------------------------
        //附加說明

        let note_value1 = $('#note1').val();
        let note_value2 = $('#note2').val();
        let note_value3 = $('#note3').val();
        let note_value4 = $('#note4').val();
        let note_value5 = $('#note5').val();

        let note_value6 = $('#note6').val();
        let note_value7 = $('#note7').val();
        let note_value8 = $('#note8').val();
        let note_value9 = $('#note9').val();
        let note_value10 = $('#note10').val();

        let note_value11 = $('#note11').val();
        let note_value12 = $('#note12').val();
        let note_value13 = $('#note13').val();
        let note_value14 = $('#note14').val();
        let note_value15 = $('#note15').val();

        let note_value16 = $('#note16').val();
        let note_value17 = $('#note17').val();
        let note_value18 = $('#note18').val();
        let note_value19 = $('#note19').val();
        let note_value20 = $('#note20').val();

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
        $('#t6').empty().append(note_value20);
    //取得選擇與材質
        //桶身
        const barrel_val = $('#barrel').val();
        //檯面
        const mesa_val = $('#mesa').val();
        //門板
        const plates_val = $('#plates').val();
    //Material_select
        //桶身
        $('#barrel_span_material').append(barrel_val);
        //門板
        $('#mesa_span_material').append(mesa_val);
        //門板
        $('#plates_span_material').append(plates_val);
    //客戶資訊customer_information
        $('#customer_Name_ouput').append($('#customer_Name').val());
        $('#customer_Phone_ouput').append($('#customer_Phone').val());
        $('#customer_Date_ouput').append($('#customer_Date').val());
        $('#work_Address_ouput').append($('#customer_Address').val());
    })
});