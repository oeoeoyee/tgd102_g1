// ==payment.html===
// 信用卡付款驗證
jQuery(function($){
    $('.cc-number').payment('formatCardNumber');
    $('.cc-exp').payment('formatCardExpiry');
    $('.cc-cvc').payment('formatCardCVC');

    $('form').submit(function(e){
        e.preventDefault();
        $('input').removeClass('invalid');
        $('.validation').removeClass('passed failed');

        let cardType = $.payment.cardType($('.cc-number').val());

        $('.cc-number').toggleClass('invalid', !$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleClass('invalid', !$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleClass('invalid', !$.payment.validateCardCVC($('.cc-cvc').val(), cardType));

        if ( $('input.invalid').length ) {
            $('.validation').addClass('failed');
        } else {
            $('.validation').addClass('passed');
        }
    });
});

// 信用卡卡別驗證

$('#card_type').on('change', checkCard);

$('#card_num').blur(checkCard);

function checkCard() {
    let card = $('#card_num').val();
    let reg;
    const cardType = $('#card_type').val();
    switch (cardType) {
        case 'visa':
            reg = /^4$/;
            break;
        case 'jcb':
            reg = /^3$/;
            break;
        case 'master':
            reg = /^5$/;
            break;
    }
    if(reg.test(card)){
        $('.card_num .error').html('');
    }else{
        $('.card_num .error').html('請輸入正確的信用卡格式');
    }
}

