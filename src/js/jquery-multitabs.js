(function($) {
  $.fn.multitabs = function() {
    var _this = $(this);
    var tabs = _this.children('.tab__header[data-child="false"]').children('div');
    var childrenTabs = _this.find('.tab__header[data-child="true"]').children('div');

    $(tabs).add(childrenTabs).on('click', function() {
      var num;
      var _this = $(this);
      var classNameTab = _this.attr('class').split(' ');
      var classNameContent = _this.parent().siblings().children();

      for (i = 0; i <= classNameTab.length; i++) {
        if (/([\d.]+)/.test(classNameTab[i])) {
          var isChild = $(_this).parent().data('child');
          num = classNameTab[i].split('-')[1];
          
          if (!isChild) {
            $(tabs).removeClass('tab__header--active');
            $(_this).addClass('tab__header--active');
          } else {
            $(_this).siblings().removeClass('tab__header--active');
            $(_this).addClass('tab__header--active');
          }

        }
      }

      $(classNameContent).each(function(i, n) {
        var name = $(n).attr('class').split(' ');
        for (n = 0; n <= name.length; n++) {
          if (name[n] != undefined) {
            if (/([\d.]+)/.test(name[n])) {
              if (num === name[n].split('-')[1]) {
                var el = $(classNameContent)[num - 1];
                $(classNameContent).removeClass('tab__content--active');
                $(el).addClass('tab__content--active');
              }
            }
          }
        }
      });

    });

  }
})(jQuery);
