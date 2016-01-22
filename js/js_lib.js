
$(document).ready(function() { 
      $("#btn-54m").click(function() {
                $(".navlist").toggleClass("btn-54mEFX").removeClass("btn-69mEFX btn-78mEFX btn-92mEFX btn-112mEFX");       
                $(".bar_start").toggleClass("bar_1_SFX").removeClass("bar_2_SFX bar_3_SFX bar_4_SFX bar_5_SFX");
      return false;
    });
    $("#btn-69m").click(function() {
                $(".navlist").toggleClass("btn-69mEFX").removeClass("btn-54mEFX btn-78mEFX btn-92mEFX btn-112mEFX");
                $(".bar_start").toggleClass("bar_2_SFX").removeClass("bar_1_SFX bar_3_SFX bar_4_SFX bar_5_SFX");
      return false;
    });
    $("#btn-78m").click(function() {
                $(".navlist").toggleClass("btn-78mEFX").removeClass("btn-54mEFX btn-69mEFX btn-92mEFX btn-112mEFX");
                $(".bar_start").toggleClass("bar_3_SFX").removeClass("bar_1_SFX bar_2_SFX bar_4_SFX bar_5_SFX");
      return false;
    });
      $("#btn-92m").click(function() {
                $(".navlist").toggleClass("btn-92mEFX").removeClass("btn-54mEFX btn-69mEFX btn-78mEFX btn-112mEFX");
                $(".bar_start").toggleClass("bar_4_SFX").removeClass("bar_1_SFX bar_2_SFX bar_3_SFX bar_5_SFX");
      return false;
    });
	   $("#btn-112m").click(function() {
                $(".navlist").toggleClass("btn-112mEFX").removeClass("btn-54mEFX btn-69mEFX btn-78mEFX btn-92mEFX");
                $(".bar_start").toggleClass("bar_5_SFX").removeClass("bar_1_SFX bar_2_SFX bar_3_SFX bar_4_SFX");
			return false;
	 });
});