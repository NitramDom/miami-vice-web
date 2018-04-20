$(function()
{
	$.vegas(
	{
		src:'./assets/images/background.jpg',
		fade: 3000,
		cover: true
	});

	$.vegas('overlay', 
	{
		src:'./assets/images/overlays/16.png'
	});

	$("#btn-server-infos").click(function()
	{
		$element = $(".ui-panel-content");

		$element.slideToggle();
		$element.toggleClass('show');

		if($element.hasClass('show'))
		{
			$element.attr('data-fa-transform', '180');
		}
		else
		{
			$element.attr('data-fa-transform', '0');
		}
	});
});