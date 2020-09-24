function showTab(tab) {
    var $a = $('#' + tab);
    $('#tabs li a').removeClass('selected');
    $a.addClass('selected');
    if ($a.hasClass('inactive')) {
        $('#tabs li a').addClass('inactive');
        $a.removeClass('inactive');
        $('.tab-block').hide();
        $('#' + tab + '-content').fadeIn('slow');
        window.location.hash = '#' + tab;
    }
}

$(document).on('turbolinks:load', function() {
    $('#tabs li a').addClass('inactive');
    $('.tab-block').hide();

    var initialTab = window.location.hash;
    if (initialTab) {
        initialTab = initialTab.slice(1);
    }
    if (!initialTab) {
        initialTab = $('#tabs li a:first').attr('id');
    }
    showTab(initialTab);

    $('#tabs li a').click(function() {
        showTab($(this).attr('id'));
    });
});
