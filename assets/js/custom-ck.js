(function(e){e.et_pb_simple_slider=function(t,n){function E(){r.slideshow&&o>1&&!i.hasClass("et_slider_hovered")&&(p=setTimeout(function(){w||i.et_slider_move_to("next")},r.slideshow_speed))}function S(){var e=i,t=e.find(".et-pb-active-slide .et_pb_slide_image");$slide=t.closest(".et_pb_slide"),$slider=$slide.closest(".et_pb_slider"),slide_height=$slider.innerHeight(),image_height=parseInt(slide_height*.8);t.find("img").css("maxHeight",image_height+"px");$slide.hasClass("et_pb_media_alignment_center")&&t.css("marginTop","-"+parseInt(t.height()/2)+"px")}function x(e){return e.hasClass("et_pb_bg_layout_dark")?"et_pb_bg_layout_dark":"et_pb_bg_layout_light"}var r=e.extend({slide:".et-slide",arrows:".et-pb-slider-arrows",prev_arrow:".et-pb-arrow-prev",next_arrow:".et-pb-arrow-next",controls:".et-pb-controllers a",control_active_class:"et-pb-active-control",previous_text:"Previous",next_text:"Next",fade_speed:500,use_arrows:!0,use_controls:!0,manual_arrows:"",append_controls_to:"",controls_class:"et-pb-controllers",slideshow:!0,slideshow_speed:5e3,show_progress_bar:!1,tabs_animation:!1},n),i=e(t),s=i.find(r.slide),o=s.length,u=r.fade_speed,a=0,f,l,c,h,p,d="",v=null,m=0,g=i.find(".et_pb_container"),y=g.width();i.et_animation_running=!1;e.data(t,"et_pb_simple_slider",i);s.eq(0).addClass("et-pb-active-slide");r.tabs_animation||i.addClass(x(s.eq(0)));if(r.use_arrows&&o>1){r.manual_arrows==""?i.append('<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#"><span>'+r.previous_text+"</span>"+'</a><a class="et-pb-arrow-next" href="#">'+"<span>"+r.next_text+"</span>"+"</a></div>"):i.append(r.manual_arrows);f=e(r.arrows);l=i.find(r.prev_arrow);c=i.find(r.next_arrow);c.click(function(){if(i.et_animation_running)return!1;i.et_slider_move_to("next");return!1});l.click(function(){if(i.et_animation_running)return!1;i.et_slider_move_to("previous");return!1})}if(r.use_controls&&o>1){for(var b=1;b<=o;b++)d+='<a href="#"'+(b==1?' class="'+r.control_active_class+'"':"")+">"+b+"</a>";d='<div class="'+r.controls_class+'">'+d+"</div>";r.append_controls_to==""?i.append(d):e(r.append_controls_to).append(d);h=i.find(r.controls),h.click(function(){if(i.et_animation_running)return!1;i.et_slider_move_to(e(this).index());return!1})}r.slideshow&&o>1&&i.hover(function(){i.addClass("et_slider_hovered");typeof p!="undefined"&&clearInterval(p)},function(){i.removeClass("et_slider_hovered");E()});var w=!1;i.pause=function(){w=!0};i.unpause=function(){w=!1};E();e(window).load(function(){S()});e(window).resize(function(){if(y!==g.width()){y=g.width();S()}});i.et_slider_move_to=function(t){var n=s.eq(a),f;i.et_animation_running=!0;if(t=="next"||t=="previous")t=="next"?a=a+1<o?a+1:0:a=a-1>=0?a-1:o-1;else{if(a==t){i.et_animation_running=!1;return}a=t}typeof p!="undefined"&&clearInterval(p);f=s.eq(a);s.each(function(){e(this).css("zIndex",1)});n.css("zIndex",2).removeClass("et-pb-active-slide");f.css({display:"block",opacity:0}).addClass("et-pb-active-slide");S();r.use_controls&&h.removeClass(r.control_active_class).eq(a).addClass(r.control_active_class);if(!r.tabs_animation){f.animate({opacity:1},u);n.addClass("et_slide_transition").css({display:"list-item",opacity:1}).animate({opacity:0},u,function(){var t=x(n),r=x(f);e(this).css("display","none").removeClass("et_slide_transition");i.removeClass(t).addClass(r);i.et_animation_running=!1})}else{f.css({display:"none",opacity:0});n.addClass("et_slide_transition").css({display:"block",opacity:1}).animate({opacity:0},u,function(){e(this).css("display","none").removeClass("et_slide_transition");f.css({display:"block",opacity:0}).animate({opacity:1},u,function(){i.et_animation_running=!1})})}E()}};e.fn.et_pb_simple_slider=function(t){return this.each(function(){new e.et_pb_simple_slider(this,t)})};var t=e(".et_pb_slider"),n=e(".et_pb_tabs"),r=n.find(".et_pb_tabs_controls li"),i=e(".et_pb_section_video_bg"),s=e(".et_pb_newsletter_button"),o=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/),u=navigator.userAgent.match(/iPad/),a=e(".container"),f=a.width(),l=e("body").hasClass("et_fixed_nav"),c=!1,h,p,d;e(document).ready(function(){function g(t){$element=typeof t!="undefined"?t.closest(".et_pb_section_video_bg"):e(".et_pb_section_video_bg");$element.each(function(){var t=e(this),n=typeof t.attr("data-ratio")!="undefined"?t.attr("data-ratio"):t.find("video").attr("width")/t.find("video").attr("height"),r=t.find(".mejs-video, video, object").css("margin",0),i=t.closest(".et_pb_section").length?t.closest(".et_pb_section"):t.closest(".et_pb_slides"),s=i.width(),o=i.innerHeight(),u,a;typeof t.attr("data-ratio")=="undefined"&&t.attr("data-ratio",n);if(s/o<n){u=o*n;a=o}else{u=s;a=s/n}r.width(u).height(a)})}function y(t){$element=typeof t!="undefined"?t:e(".et_pb_section_video_bg .mejs-video");$element.each(function(){var n=e(this).width()/2,r=0-n;e(this).css("margin-left",r);if(typeof t!="undefined"){if(t.closest(".et_pb_slider").length&&!t.closest(".et_pb_first_video").length)return!1;setTimeout(function(){e(this).closest(".et_pb_preload").removeClass("et_pb_preload")},500)}})}function b(){h=e("#main-header").innerHeight(),p=h<=90?h-29:h-56,d=e("#wpadminbar").length?p+e("#wpadminbar").innerHeight():p}function w(){if(!t.length)return;t.each(function(){var t=e(this).find(".et_pb_slide"),n=t.find(".et_pb_container"),r=0;n.css("min-height",0);t.each(function(){var t=e(this),n=t.innerHeight();r<n&&(r=n)});n.css("min-height",r)})}function S(e){e.find("input:text, textarea").each(function(e,t){var n=jQuery(t),r=n.siblings("label"),i=n.siblings("label").text();if(r.length){r.hide();if(n.siblings("span.required")){i+=n.siblings("span.required").text();n.siblings("span.required").hide()}n.val(i)}}).bind("focus",function(){var e=jQuery(this).siblings("label").text();jQuery(this).siblings("span.required").length&&(e+=jQuery(this).siblings("span.required").text());jQuery(this).val()===e&&jQuery(this).val("")}).bind("blur",function(){var e=jQuery(this).siblings("label").text();jQuery(this).siblings("span.required").length&&(e+=jQuery(this).siblings("span.required").text());jQuery(this).val()===""&&jQuery(this).val(e)})}function x(e){e.find("input:text, textarea").each(function(e,t){var n=jQuery(t),r=n.siblings("label"),i=n.siblings("label").text();r.length&&r.is(":hidden")&&r.text()==n.val()&&n.val("")})}function T(t,n,r,i){var s;t.clone().attr("id",r).removeClass().attr("class",i).appendTo(n);s=n.find("> ul");s.find(".menu_slide").remove();s.find("li:first").addClass("et_first_mobile_item");n.click(function(){if(e(this).hasClass("closed")){e(this).removeClass("closed").addClass("opened");s.slideDown(500)}else{e(this).removeClass("opened").addClass("closed");s.slideUp(500)}return!1});n.find("a").click(function(e){e.stopPropagation()})}var v=e("ul.nav"),m=e("#et_search_icon");v.find("li").hover(function(){if(!e(this).closest("li.mega-menu").length||e(this).hasClass("mega-menu")){e(this).addClass("et-show-dropdown");e(this).removeClass("et-hover").addClass("et-hover")}},function(){var t=e(this);t.removeClass("et-show-dropdown");setTimeout(function(){t.hasClass("et-show-dropdown")||t.removeClass("et-hover")},200)});e("ul.et_disable_top_tier").length&&e("ul.et_disable_top_tier > li > ul").prev("a").attr("href","#");if(o){e(".et_pb_section_video_bg").each(function(){var t=e(this);t.css("visibility","hidden").closest(".et_pb_preload").removeClass("et_pb_preload")});e("body").addClass("et_mobile_device");u||e("body").addClass("et_mobile_device_not_ipad")}m.click(function(){var t=e(this),n=t.siblings(".et-search-form");n.hasClass("et-hidden")?n.css({display:"block",opacity:0}).animate({opacity:1},500):n.animate({opacity:0},500);n.toggleClass("et-hidden")});i.length&&i.find("video").mediaelementplayer({pauseOtherPlayers:!1,success:function(t,n){t.addEventListener("canplay",function(){g(e(n));y(e(n))})}});t.length&&t.each(function(){var t=e(this),n={fade_speed:700,slide:".et_pb_slide"};t.hasClass("et_pb_slider_no_arrows")&&(n.use_arrows=!1);t.hasClass("et_pb_slider_no_pagination")&&(n.use_controls=!1);if(t.hasClass("et_slider_auto")){var r=/et_slider_speed_(\d+)/g;n.slideshow=!0;et_slider_autospeed=r.exec(t.attr("class"));n.slideshow_speed=et_slider_autospeed[1]}t.et_pb_simple_slider(n);t.find(".et_pb_slide_video").each(function(){var t=e(this).find("iframe"),n=t.attr("src"),r=n.indexOf("?")==-1?"?":"&amp;",i=n+r+"wmode=opaque";t.attr("src",i)})});if(n.length){n.et_pb_simple_slider({use_controls:!1,use_arrows:!1,slide:".et_pb_all_tabs > div",tabs_animation:!0});r.click(function(){var t=e(this),n=t.closest(".et_pb_tabs").data("et_pb_simple_slider");if(n.et_animation_running)return!1;t.addClass("et_pb_tab_active").siblings().removeClass("et_pb_tab_active");n.data("et_pb_simple_slider").et_slider_move_to(t.index());return!1})}e(".et_pb_toggle_title").click(function(){var t=e(this),n=t.closest(".et_pb_toggle"),r=n.find(".et_pb_toggle_content");r.slideToggle(700,function(){n.hasClass("et_pb_toggle_close")?n.removeClass("et_pb_toggle_close").addClass("et_pb_toggle_open"):n.removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close")})});if(e.fn.fitVids){e(".et_pb_slide_video").fitVids();e("#main-content").fitVids()}w();var E=e("#commentform");S(E);S(e(".et_pb_newsletter_form"));E.submit(function(){x(E)});T(e("#et-top-navigation ul.nav"),e("#et-top-navigation .mobile_nav"),"mobile_menu","et_mobile_menu");s.click(function(t){t.preventDefault();var n=e(this).closest(".et_pb_newsletter"),r=n.find('input[name="et_pb_signup_firstname"]'),i=n.find('input[name="et_pb_signup_lastname"]'),s=n.find('input[name="et_pb_signup_email"]'),o=n.find('input[name="et_pb_signup_list_id"]').val(),u=n.find(".et_pb_newsletter_result").hide();r.removeClass("et_pb_signup_error");i.removeClass("et_pb_signup_error");s.removeClass("et_pb_signup_error");x(e(this).closest(".et_pb_newsletter_form"));if(r.val()==""||s.val()==""||o===""){r.val()==""&&r.addClass("et_pb_signup_error");s.val()==""&&s.addClass("et_pb_signup_error");r.val()==""&&r.val(r.siblings(".et_pb_contact_form_label").text());i.val()==""&&i.val(i.siblings(".et_pb_contact_form_label").text());s.val()==""&&s.val(s.siblings(".et_pb_contact_form_label").text());return}e.ajax({type:"POST",url:et_custom.ajaxurl,data:{action:"et_pb_submit_subscribe_form",et_load_nonce:et_custom.et_load_nonce,et_list_id:o,et_firstname:r.val(),et_lastname:i.val(),et_email:s.val()},success:function(e){if(e){n.find(".et_pb_newsletter_form > p").hide();u.html(e).show()}else u.html(et_custom.subscription_failed).show()}})});e(window).resize(function(){var t=f!==a.width();g();y();w();e(".et_pb_blog_grid").length&&e(".et_pb_blog_grid").masonry("reload");l&&t&&setTimeout(function(){e("body").css("paddingTop",e("#main-header").innerHeight())},200);if(t){f=a.width();c=!0}});e(window).load(function(){if(l){b();e("body").css("paddingTop",h)}e(".et_pb_blog_grid").length&&e(".et_pb_blog_grid").masonry({itemSelector:".et_pb_post"});setTimeout(function(){e(".et_pb_preload").removeClass("et_pb_preload")},500);e(".et_pb_portfolio_grid").length&&e(".et_pb_portfolio_grid").each(function(){var t=e(this),n=0;t.find(".et_pb_portfolio_item").each(function(){e(this).innerHeight()>n&&(n=e(this).innerHeight())});t.find(".et_pb_portfolio_item").css("min-height",n+"px")});if(e.fn.waypoint){e(".et_pb_counter_container, .et-waypoint").waypoint({offset:"75%",handler:function(){e(this).addClass("et-animated")}});l&&e("#main-content").waypoint({offset:function(){if(c){b();c=!1}return d},handler:function(t){t==="down"?e("#main-header").addClass("et-fixed-header"):e("#main-header").removeClass("et-fixed-header")}})}})});e(".toggle_form").find("form").hide();e(".show_form").click(function(){e(this).parents(".toggle_form").find("form").slideToggle("fast")});e(".woocommerce-billing-fields input").each(function(t){var n=e(this).attr("id");e(this).keyup(function(){e("#shipping_"+n).val(this.value)})});e(".woocommerce-billing-fields select").change(function(){var t=e(this).val();e('.woocommerce-shipping-fields option[value="'+t+'"]').attr("selected","selected")});e(".ship-to-different-address-wrapper input[value=0]").click(function(){e(".woocommerce-billing-fields input").each(function(t){var n=e(this).attr("id");e("#shipping_"+n).val(this.value)});var t=e(".woocommerce-billing-fields select").val();e('.woocommerce-shipping-fields option[value="'+t+'"]').attr("selected","selected")});e("#address_1").keyup(function(){e("#shipping_address_1").val(this.value)});e(".ship-to-different-address-wrapper input[value=0]").is(":checked")&&e(".shipping_address").hide();e("input[name=use_billing_info]").change(function(){if(e(this).attr("value")==0){e(".shipping_address").hide();e(".shipping_address input").not(".not-required").attr("data-parsley-required","false")}else{e(".shipping_address").show();e(".shipping_address input").not(".not-required").attr("data-parsley-required","true")}});e("form").parsley();e(".create_member_table").hide();e("input[name=create_user]").change(function(){if(e(this).attr("value")=="no"){e(".create_member_table").hide();e(".create_member_table input").not(".not-required").attr("data-parsley-required","false")}else{e(".create_member_table").show();e(".create_member_table input").not(".not-required").attr("data-parsley-required","true")}})})(jQuery);