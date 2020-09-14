$(document).ready(function () {
    $('#submit').click(function () {
        const plates = $('#plates').val();
        const mesa = $('#mesa').val();
        const Barrel = $('#Barrel').val();
        const barrelMaterial = $('#barrelMaterial').val();
        const customer = $('#customer').val();
        let str = '';

        str += `
        <tr>
            <th scope="row">${customer}</th>
            <td>${plates}</td>
            <td>${mesa}</td>
            <td>${Barrel}</td>
            <td>${barrelMaterial}</td>
        </tr>
        `
        $('#add_meta').append(str);
    });
});