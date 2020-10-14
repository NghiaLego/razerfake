$(() => {
    $('.btn').click(function () {
        $('.noidung').hide();
        $('[space-content='+($(this).attr('data-id-content'))+']').show();
    });
})