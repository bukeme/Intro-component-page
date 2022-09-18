$(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        var $email = $('#email').val()
        var $at = new RegExp(/@/)
        var $com = new RegExp(/.com/)
        $('p.email').css({
            'display': 'none'
        })
        if ($email !== '') {
            if ($at.test($email) && $com.test($email)) {
                $('p.email').css({
                    'display': 'none'
                })
            } else {
                $('p.email').css({
                    'display': 'block'
                })
            }
        }
        $('input').each(function(index) {

            if ($(this).val() == '') {
                $(this).parent().next().css({
                    'display': 'block'
                })
                $(this).css({
                    'border': '2px solid hsl(0, 100%, 74%)'
                })
            } else {
                $(this).parent().next().css({
                    'display': 'none'
                })
                $(this).css({
                    'border': '2px solid hsl(246, 25%, 77%)'
                })
            }
        })
    })
})