$(document).ready(function () {
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();

	activeTab.show();

	tabWrapper.height(activeTabHeight);

	$(".tabs > li").on("click", function () {
		$(".tabs > li").removeClass("active");

		$(this).addClass("active");

		clickedTab = $(".tabs .active");

		activeTab.fadeOut(250, function () {
			$(".tab__content > li").removeClass("active");
			// $('.text-boxes-row select').prop('selectedIndex',0);
			// $('#show-content').html('');

			var clickedTabIndex = clickedTab.index();

			$(".tab__content > li").eq(clickedTabIndex).addClass("active");

			activeTab = $(".tab__content > .active");

			activeTabHeight = activeTab.outerHeight();

			tabWrapper
				.stop()
				.delay(50)
				.animate(
					{
						height: activeTabHeight
					},
					500,
					function () {
						activeTab.delay(50).fadeIn(250);
					}
				);
		});
	});

/*******************************Meta Data Acordion*************************************/

	$( "#meta-accordion" ).accordion({
    autoHeight: false,
    collapsible: true,
    active: false,
	  animate: 200
	});
	$( "#meta-accordion" ).accordion( "option", "icons", null );

});