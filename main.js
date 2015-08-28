/**
 * Created by martynuk on 28.08.15.
 */

var Slider = {
	init: function(elem){
		this.elem = elem;
		this.blocks = $('.block__item', elem);
		this.eventHandlers();
	},
	eventHandlers: function(){
		var _this = this;
		this.elem.on('mouseenter', function(e){
			_this.onEnterAction(e);
		});
		this.elem.on('mouseleave', function(e){
			_this.onLeaveAction(e);
		});
	},
	onEnterAction: function(e){
		var _this = this;
		if(this.interval) clearInterval(this.interval);

		this.interval = setInterval(function(){
			console.log(_this.blocks);
			_this.blocks.each(function(index, block) {
				var left = ($(block).css('left') != 'auto')?(parseInt($(block).css('left')) - 5) + 'px':  '-5px';
				console.log($(block).css('left'));

				$(block).css('left', left);
			});

			if(Math.abs(parseInt(_this.blocks.eq(0).css('left'))) >= _this.blocks.eq(0).outerWidth + parseInt(_this.blocks.eq(0).css('marginRight'))){

				_this.blocks.eq(0).parent().append(_this.blocks.eq(0));
				_this.blocks = $('.block__item', _this.elem);

				_this.blocks.each(function(index, block) {

					$(block).css('left', 0);

				});
			}
		}, 50);
	},
	onLeaveAction: function(){

		clearInterval(this.interval);
	}
};

Slider.init($('.block'));

