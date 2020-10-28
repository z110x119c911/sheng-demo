$(document).ready(function () {
    const dataArr = data;
    window.onload = function(){
        ALL_List();
        unit_List()
        //桶身
        let barrelstr = '';
        for (let i = 0; i < dataArr.barrelMaterial.length; i++) {
            let string = `<option value="${dataArr.barrelMaterial[i].name}">${dataArr.barrelMaterial[i].name}</option>`
            barrelstr += string;
        }
        $('#barrel').append(barrelstr);
        //門板
        let mesastr = '';
        for (let i = 0; i < dataArr.mesaMaterial.length; i++) {
            let string = `<option value="${dataArr.mesaMaterial[i].name}">${dataArr.mesaMaterial[i].name}</option>`
            mesastr += string;
        }
        $('#mesa').append(mesastr);
        //門板
        let platesstr = '';
        for (let i = 0; i < dataArr.platesMaterial.length; i++) {
            let string = `<option value="${dataArr.platesMaterial[i].name}">${dataArr.platesMaterial[i].name}</option>`
            platesstr += string;
        }
        $('#plates').append(platesstr);



    }

    
    


    $('.list1').change(function(){
        let value = $('.list1 :selected').text();
        if(value !== '自訂'){
            $('#type_area1').show();
            $('#customer1').hide();
        }else{
            $('#customer1').show();
            $('#type_area1').hide();
        }
    })
    $('.list2').change(function(){
        let value = $('.list2 :selected').text();
        if(value !== '自訂'){
            $('#type_area2').show();
            $('#customer2').hide();
        }else{
            $('#customer2').show();
            $('#type_area2').hide();
        }
    })
    $('.list3').change(function(){
        let value = $('.list3 :selected').text();
        if(value !== '自訂'){
            $('#type_area3').show();
            $('#customer3').hide();
        }else{
            $('#customer3').show();
            $('#type_area3').hide();
        }
    })
    $('.list4').change(function(){
        let value = $('.list4 :selected').text();
        if(value !== '自訂'){
            $('#type_area4').show();
            $('#customer4').hide();
        }else{
            $('#customer4').show();
            $('#type_area4').hide();
        }
    })
    $('.list5').change(function(){
        let value = $('.list5 :selected').text();
        if(value !== '自訂'){
            $('#type_area5').show();
            $('#customer5').hide();
        }else{
            $('#customer5').show();
            $('#type_area5').hide();
        }
    })
    $('.list6').change(function(){
        let value = $('.list6 :selected').text();
        if(value !== '自訂'){
            $('#type_area6').show();
            $('#customer6').hide();
        }else{
            $('#customer6').show();
            $('#type_area6').hide();
        }
    })
    $('.list7').change(function(){
        let value = $('.list7 :selected').text();
        if(value !== '自訂'){
            $('#type_area7').show();
            $('#customer7').hide();
        }else{
            $('#customer7').show();
            $('#type_area7').hide();
        }
    })
    $('.list8').change(function(){
        let value = $('.list8 :selected').text();
        if(value !== '自訂'){
            $('#type_area8').show();
            $('#customer8').hide();
        }else{
            $('#customer8').show();
            $('#type_area8').hide();
        }
    })
    $('.list9').change(function(){
        let value = $('.list9 :selected').text();
        if(value !== '自訂'){
            $('#type_area9').show();
            $('#customer9').hide();
        }else{
            $('#customer9').show();
            $('#type_area9').hide();
        }
    })
    $('.list10').change(function(){
        let value = $('.list10 :selected').text();
        if(value !== '自訂'){
            $('#type_area10').show();
            $('#customer10').hide();
        }else{
            $('#customer10').show();
            $('#type_area10').hide();
        }
    })
    $('.list11').change(function(){
        let value = $('.list11 :selected').text();
        if(value !== '自訂'){
            $('#type_area11').show();
            $('#customer11').hide();
        }else{
            $('#customer11').show();
            $('#type_area11').hide();
        }
    })
    $('.list12').change(function(){
        let value = $('.list12 :selected').text();
        if(value !== '自訂'){
            $('#type_area12').show();
            $('#customer12').hide();
        }else{
            $('#customer12').show();
            $('#type_area12').hide();
        }
    })
    $('.list13').change(function(){
        let value = $('.list13 :selected').text();
        if(value !== '自訂'){
            $('#type_area13').show();
            $('#customer13').hide();
        }else{
            $('#customer13').show();
            $('#type_area13').hide();
        }
    })
    $('.list14').change(function(){
        let value = $('.list14 :selected').text();
        if(value !== '自訂'){
            $('#type_area14').show();
            $('#customer14').hide();
        }else{
            $('#customer14').show();
            $('#type_area14').hide();
        }
    })
    $('.list15').change(function(){
        let value = $('.list15 :selected').text();
        if(value !== '自訂'){
            $('#type_area15').show();
            $('#customer15').hide();
        }else{
            $('#customer15').show();
            $('#type_area15').hide();
        }
    })
    $('.list16').change(function(){
        let value = $('.list16 :selected').text();
        if(value !== '自訂'){
            $('#type_area16').show();
            $('#customer16').hide();
        }else{
            $('#customer16').show();
            $('#type_area16').hide();
        }
    })
    $('.list17').change(function(){
        let value = $('.list17 :selected').text();
        if(value !== '自訂'){
            $('#type_area17').show();
            $('#customer17').hide();
        }else{
            $('#customer17').show();
            $('#type_area17').hide();
        }
    })
    $('.list18').change(function(){
        let value = $('.list18 :selected').text();
        if(value !== '自訂'){
            $('#type_area18').show();
            $('#customer18').hide();
        }else{
            $('#customer18').show();
            $('#type_area18').hide();
        }
    })
    $('.list19').change(function(){
        let value = $('.list19 :selected').text();
        if(value !== '自訂'){
            $('#type_area19').show();
            $('#customer19').hide();
        }else{
            $('#customer19').show();
            $('#type_area19').hide();
        }
    })
    $('.list20').change(function(){
        let value = $('.list20 :selected').text();
        if(value !== '自訂'){
            $('#type_area20').show();
            $('#customer20').hide();
        }else{
            $('#customer20').show();
            $('#type_area20').hide();
        }
    })




    


    function ALL_List() {
        let str = '';
        //類別
        for (let i = 0; i < dataArr.all.length; i++) {
            let string = `<option value="${dataArr.all[i].name}">${dataArr.all[i].name}</option>`
            str += string;
        }
        $("select[id='ALL_list']").append(str);
    }
    function unit_List(){
        let str = '';
        //單位
        for (let i = 0; i < dataArr.unit.length; i++) {
            let string = `<option value="${dataArr.unit[i].size}">${dataArr.unit[i].size}</option>`
            str += string;
        }
        $("select[id='unit']").append(str);
    }
});