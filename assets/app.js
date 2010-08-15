$(document).ready(function() {
  $('.file_list').dataTable({
    "aaSorting": [[ 1, "asc" ]],
    "bPaginate": false,
    "bJQueryUI": true,
    "aoColumns": [
			null,
		  { "sType": "percent" },
			null,
			null,
			null
		]
  });
  
  $("a.src_link").fancybox({
		'hideOnContentClick': true
	});
	
  $('.source_table tbody tr:odd').addClass('odd');
  $('.source_table tbody tr:even').addClass('even');
  
  $('.file_list_container').hide();
  $('.file_list_container').first().show();
  
  $('.file_list_container h2').each(function(){
    $('.group_tabs').append('<li><a href="#">' + $(this).html() + '</a></li>');
  });

  $('.group_tabs a').live('focus', function() {
    $(this).blur();
  });
  $('.group_tabs a').live('click', function(){
    if (!$(this).parent().hasClass('active')) {
      $('.group_tabs a').parent().removeClass('active');
      $(this).parent().addClass('active');
      $('.file_list_container').hide();
      $(".file_list_container h2:contains('" + $(this).html() + "')").parent().slideDown();
    };
  });
  
  $('.group_tabs a:first').click();
  
  $("abbr.timeago").timeago();
});