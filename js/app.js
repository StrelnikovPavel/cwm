function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
   ua = navigator.userAgent;
   var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
   return is_ie;
}
if (isIE()) {
   document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
   document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('_webp');
   } else {
      document.querySelector('body').classList.add('_no-webp');
   }
});
function ibg() {
   if (isIE()) {
      let ibg = document.querySelectorAll("._ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
         }
      }
   }
}
ibg();

if (document.querySelector('.wrapper')) {
   document.querySelector('.wrapper').classList.add('_loaded');
}

var unlock = true;

//=================
//=================
//Menu
let body = document.querySelector("body");
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
   //let delay = 500;
   let menuBody = document.querySelector(".menu__body");
   iconMenu.addEventListener("click", function (e) {
      if (unlock) {
         //body_lock(delay);
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
         body.classList.toggle("_lock");
      }
   });
};
function menu_close() {
   let iconMenu = document.querySelector(".icon-menu");
   let menuBody = document.querySelector(".menu__body");
   let body = document.querySelector("body");
   iconMenu.classList.remove("_active");
   menuBody.classList.remove("_active");
   body.classList.remove("_lock");
}
//=================
//=================
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
   let tab = tabs[index];
   let tabs_items = tab.querySelectorAll("._tabs-item");
   let tabs_blocks = tab.querySelectorAll("._tabs-block");
   for (let index = 0; index < tabs_items.length; index++) {
      let tabs_item = tabs_items[index];
      tabs_item.addEventListener("click", function (e) {
         for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.classList.remove('_active');
            tabs_blocks[index].classList.remove('_active');
         }
         tabs_item.classList.add('_active');
         tabs_blocks[index].classList.add('_active');
         e.preventDefault();
      });
   }
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
   for (let index = 0; index < spollers.length; index++) {
      const spoller = spollers[index];
      spoller.addEventListener("click", function (e) {
         if (spollersGo) {
            spollersGo = false;
            if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
               return false;
            }
            if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
               return false;
            }
            if (spoller.closest('._spollers').classList.contains('_one')) {
               let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
               for (let i = 0; i < curent_spollers.length; i++) {
                  let el = curent_spollers[i];
                  if (el != spoller) {
                     el.classList.remove('_active');
                     _slideUp(el.nextElementSibling);
                  }
               }
            }
            spoller.classList.toggle('_active');
            _slideToggle(spoller.nextElementSibling);

            setTimeout(function () {
               spollersGo = true;
            }, 500);
         }
      });
   }
}
//==================
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.height = target.offsetHeight + 'px';
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideDown = (target, duration = 500) => {
   target.style.removeProperty('display');
   let display = window.getComputedStyle(target).display;
   if (display === 'none')
      display = 'flex';

   target.style.display = display;
   let height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.transitionProperty = "height, margin, padding";
   target.style.transitionDuration = duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideToggle = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (window.getComputedStyle(target).display === 'none') {
         return _slideDown(target, duration);
      } else {
         return _slideUp(target, duration);
      }
   }
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
   let start = performance.now();
   requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
         requestAnimationFrame(animate);
      }

   });
}
function makeEaseOut(timing) {
   return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
   }
}
function makeEaseInOut(timing) {
   return function (timeFraction) {
      if (timeFraction < .5)
         return timing(2 * timeFraction) / 2;
      else
         return (2 - timing(2 * (1 - timeFraction))) / 2;
   }
}
function quad(timeFraction) {
   return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
   return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
   duration: 1000,
   timing: makeEaseOut(quad),
   draw(progress) {
      window.scroll(0, start_position + 400 * progress);
*/
//====================================================================================================
const popupLinks = document.querySelectorAll('.popup-link');
//const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

//let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         console.log('true');
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         body.classList.toggle("_lock");
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
            body.classList.remove("_lock");
         }
      });
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         body.classList.toggle("_lock");
      }
   }
}


// function bodyLock() {
//    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//    if (lockPadding.length > 0) {
//       for (let index = 0; index < lockPadding.length; index++) {
//          const el = lockPadding[index];
//          el.style.paddingRight = lockPaddingValue;
//       }
//    }
//    body.style.paddingRight = lockPaddingValue;
//    body.classList.add('lock');

//    unlock = false;
//    setTimeout(function () {
//       unlock = true;
//    }, timeout);
// }

// function bodyUnLock() {
//    setTimeout(function () {
//       if (lockPadding.length > 0) {
//          for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';
//          }
//       }
//       body.style.paddingRight = '0px';
//       body.classList.remove('lock');
//    }, timeout);

//    unlock = false;
//    setTimeout(function () {
//       unlock = true;
//    }, timeout);
// }

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
});

//====================================================================================================
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
   for (let index = 0; index < forms.length; index++) {
      const el = forms[index];
      el.addEventListener('submit', form_submit);
   }
}
async function form_submit(e) {
   let btn = e.target;
   let form = btn.closest('form');
   let error = form_validate(form);
   if (error == 0) {
      let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
      let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
      const message = form.getAttribute('data-message');
      const ajax = form.getAttribute('data-ajax');

      //SendForm
      if (ajax) {
         e.preventDefault();
         let formData = new FormData(form);
         form.classList.add('_sending');
         let response = await fetch(formAction, {
            method: formMethod,
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            form.classList.remove('_sending');
            if (message) {
               popup_open('_' + message + '-message');
            }
            form_clean(form);
         } else {
            alert("Ошибка");
            form.classList.remove('_sending');
         }
      }
   } else {
      let form_error = form.querySelectorAll('._error');
      if (form_error && form.classList.contains('_goto-error')) {
         _goto(form_error[0], 1000, 50);
      }
      e.preventDefault();
   }
}
function form_validate(form) {
   let error = 0;
   let form_req = form.querySelectorAll('._req');
   if (form_req.length > 0) {
      for (let index = 0; index < form_req.length; index++) {
         const el = form_req[index];
         if (!_is_hidden(el)) {
            error += form_validate_input(el);
         }
      }
   }
   return error;
}
function form_validate_input(input) {
   let error = 0;
   let input_g_value = input.getAttribute('data-value');

   if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
      if (input.value != input_g_value) {
         let em = input.value.replace(" ", "");
         input.value = em;
      }
      if (email_test(input) || input.value == input_g_value) {
         form_add_error(input);
         error++;
      } else {
         form_remove_error(input);
      }
   } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
      form_add_error(input);
      error++;
   } else {
      if (input.value == '' || input.value == input_g_value) {
         form_add_error(input);
         error++;
      } else {
         form_remove_error(input);
      }
   }
   return error;
}
function form_add_error(input) {
   input.classList.add('_error');
   input.parentElement.classList.add('_error');

   let input_error = input.parentElement.querySelector('.form__error');
   if (input_error) {
      input.parentElement.removeChild(input_error);
   }
   let input_error_text = input.getAttribute('data-error');
   if (input_error_text && input_error_text != '') {
      input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
   }
}
function form_remove_error(input) {
   input.classList.remove('_error');
   input.parentElement.classList.remove('_error');

   let input_error = input.parentElement.querySelector('.form__error');
   if (input_error) {
      input.parentElement.removeChild(input_error);
   }
}
function form_clean(form) {
   let inputs = form.querySelectorAll('input,textarea');
   for (let index = 0; index < inputs.length; index++) {
      const el = inputs[index];
      el.parentElement.classList.remove('_focus');
      el.classList.remove('_focus');
      el.value = el.getAttribute('data-value');
   }
   let checkboxes = form.querySelectorAll('.checkbox__input');
   if (checkboxes.length > 0) {
      for (let index = 0; index < checkboxes.length; index++) {
         const checkbox = checkboxes[index];
         checkbox.checked = false;
      }
   }
   let selects = form.querySelectorAll('select');
   if (selects.length > 0) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const select_default_value = select.getAttribute('data-default');
         select.value = select_default_value;
         select_item(select);
      }
   }
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
   const element = viewPass[index];
   element.addEventListener("click", function (e) {
      if (element.classList.contains('_active')) {
         element.parentElement.querySelector('input').setAttribute("type", "password");
      } else {
         element.parentElement.querySelector('input').setAttribute("type", "text");
      }
      element.classList.toggle('_active');
   });
}



//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
   if (inputs.length > 0) {
      for (let index = 0; index < inputs.length; index++) {
         const input = inputs[index];
         const input_g_value = input.getAttribute('data-value');
         input_placeholder_add(input);
         if (input.value != '' && input.value != input_g_value) {
            input_focus_add(input);
         }
         input.addEventListener('focus', function (e) {
            if (input.value == input_g_value) {
               input_focus_add(input);
               input.value = '';
            }
            if (input.getAttribute('data-type') === "pass") {
               input.setAttribute('type', 'password');
            }
            if (input.classList.contains('_date')) {
               /*
               input.classList.add('_mask');
               Inputmask("99.99.9999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
               */
            }
            if (input.classList.contains('_phone')) {
               //'+7(999) 999 9999'
               //'+38(999) 999 9999'
               //'+375(99)999-99-99'
               input.classList.add('_mask');
               Inputmask("+375 (99) 9999999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
            }
            if (input.classList.contains('_digital')) {
               input.classList.add('_mask');
               Inputmask("9{1,}", {
                  "placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
            }
            form_remove_error(input);
         });
         input.addEventListener('blur', function (e) {
            if (input.value == '') {
               input.value = input_g_value;
               input_focus_remove(input);
               if (input.classList.contains('_mask')) {
                  input_clear_mask(input, input_g_value);
               }
               if (input.getAttribute('data-type') === "pass") {
                  input.setAttribute('type', 'text');
               }
            }
         });
         if (input.classList.contains('_date')) {
            datepicker(input, {
               customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
               customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
               formatter: (input, date, instance) => {
                  const value = date.toLocaleDateString()
                  input.value = value
               },
               onSelect: function (input, instance, date) {
                  input_focus_add(input.el);
               }
            });
         }
      }
   }
}
function input_placeholder_add(input) {
   const input_g_value = input.getAttribute('data-value');
   if (input.value == '' && input_g_value != '') {
      input.value = input_g_value;
   }
}
function input_focus_add(input) {
   input.classList.add('_focus');
   input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
   input.classList.remove('_focus');
   input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
   input.inputmask.remove();
   input.value = input_g_value;
   input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
   for (let index = 0; index < quantityButtons.length; index++) {
      const quantityButton = quantityButtons[index];
      quantityButton.addEventListener("click", function (e) {
         let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
         if (quantityButton.classList.contains('quantity__button_plus')) {
            value++;
         } else {
            value = value - 1;
            if (value < 1) {
               value = 1
            }
         }
         quantityButton.closest('.quantity').querySelector('input').value = value;
      });
   }
}

//RANGE
const priceSlider = document.querySelector('.price__range');
if (priceSlider) {
   noUiSlider.create(priceSlider, {
      start: [0, 200000],
      connect: true,
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
         'min': [0],
         'max': [200000]
      }
   });

   const priceStart = document.getElementById('price-start');
   const priceEnd = document.getElementById('price-end');
   priceStart.addEventListener('change', setPriceValues);
   priceEnd.addEventListener('change', setPriceValues);

   function setPriceValues() {
      let priceStartValue;
      let priceEndValue;
      if (priceStart.value != '') {
         priceStartValue = priceStart.value;
      }
      if (priceEnd.value != '') {
         priceEndValue = priceEnd.value;
      }
      priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
   }
}
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);
}
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
   //scr_body.setAttribute('data-scroll', pageYOffset);
   let src_value = pageYOffset;
   let header = document.querySelector('header.header');
   if (header !== null) {
      if (src_value > 10) {
         header.classList.add('_scroll');
      } else {
         header.classList.remove('_scroll');
      }
   }
   if (scr_blocks.length > 0) {
      for (let index = 0; index < scr_blocks.length; index++) {
         let block = scr_blocks[index];
         let block_offset = offset(block).top;
         let block_height = block.offsetHeight;

         if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
            block.classList.add('_scr-sector_active');
         } else {
            if (block.classList.contains('_scr-sector_active')) {
               block.classList.remove('_scr-sector_active');
            }
         }
         if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
            if (!block.classList.contains('_scr-sector_current')) {
               block.classList.add('_scr-sector_current');
            }
         } else {
            if (block.classList.contains('_scr-sector_current')) {
               block.classList.remove('_scr-sector_current');
            }
         }
      }
   }
   if (scr_items.length > 0) {
      for (let index = 0; index < scr_items.length; index++) {
         let scr_item = scr_items[index];
         let scr_item_offset = offset(scr_item).top;
         let scr_item_height = scr_item.offsetHeight;


         let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
         if (window.innerHeight > scr_item_height) {
            scr_item_point = window.innerHeight - scr_item_height / 3;
         }

         if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
            scr_item.classList.add('_active');
            scroll_load_item(scr_item);
         } else {
            scr_item.classList.remove('_active');
         }
         if (((src_value > scr_item_offset - window.innerHeight))) {
            if (scr_item.querySelectorAll('._lazy').length > 0) {
               scroll_lazy(scr_item);
            }
         }
      }
   }

   if (scr_fix_block.length > 0) {
      fix_block(scr_fix_block, src_value);
   }
   let custom_scroll_line = document.querySelector('._custom-scroll__line');
   if (custom_scroll_line) {
      let window_height = window.innerHeight;
      let content_height = document.querySelector('.wrapper').offsetHeight;
      let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
      let custom_scroll_line_height = custom_scroll_line.offsetHeight;
      custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
   }

   if (src_value > scrollDirection) {
      // downscroll code
   } else {
      // upscroll code
   }
   scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
   //document.addEventListener("DOMContentLoaded", scroll_scroll);
   scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
   let lazy_src = scr_item.querySelectorAll('*[data-src]');
   if (lazy_src.length > 0) {
      for (let index = 0; index < lazy_src.length; index++) {
         const el = lazy_src[index];
         if (!el.classList.contains('_loaded')) {
            el.setAttribute('src', el.getAttribute('data-src'));
            el.classList.add('_loaded');
         }
      }
   }
   let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
   if (lazy_srcset.length > 0) {
      for (let index = 0; index < lazy_srcset.length; index++) {
         const el = lazy_srcset[index];
         if (!el.classList.contains('_loaded')) {
            el.setAttribute('srcset', el.getAttribute('data-srcset'));
            el.classList.add('_loaded');
         }
      }
   }
}

function scroll_load_item(scr_item) {
   if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
      let map_item = document.getElementById('map');
      if (map_item) {
         scr_item.classList.add('_loaded-map');
         map();
      }
   }
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
   disableScroll();
   window.addEventListener('wheel', full_scroll);
}
function full_scroll(e) {
   let viewport_height = window.innerHeight;
   if (viewport_height >= scr_min_height) {
      if (scrolling_full) {
         // ВЫЧИСЛИТЬ!!!
         let current_scroll = pageYOffset;//parseInt(scr_body.getAttribute('data-scroll'));
         //
         let current_block = document.querySelector('._scr-sector._scr-sector_current');
         let current_block_pos = offset(current_block).top;
         let current_block_height = current_block.offsetHeight;
         let current_block_next = current_block.nextElementSibling;
         let current_block_prev = current_block.previousElementSibling;
         let block_pos;
         if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
            if (current_block_prev) {
               let current_block_prev_height = current_block_prev.offsetHeight;
               block_pos = offset(current_block_prev).top;
               if (current_block_height <= viewport_height) {
                  if (current_block_prev_height >= viewport_height) {
                     block_pos = block_pos + (current_block_prev_height - viewport_height);
                     full_scroll_to_sector(block_pos);
                  }
               } else {
                  enableScroll();
                  if (current_scroll <= current_block_pos) {
                     full_scroll_to_sector(block_pos);
                  }
               }
            } else {
               full_scroll_pagestart();
            }
         } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
            if (current_block_next) {
               block_pos = offset(current_block_next).top;
               if (current_block_height <= viewport_height) {
                  full_scroll_to_sector(block_pos);
               } else {
                  enableScroll();
                  if (current_scroll >= block_pos - viewport_height) {
                     full_scroll_to_sector(block_pos);
                  }
               }
            } else {
               full_scroll_pageend();
            }
         }
      } else {
         disableScroll();
      }
   } else {
      enableScroll();
   }
}
function full_scroll_to_sector(pos) {
   disableScroll();
   scrolling_full = false;
   _goto(pos, 800);

   let scr_pause = 500;
   if (navigator.appVersion.indexOf("Mac") != -1) {
      scr_pause = 1000;
   };
   setTimeout(function () {
      scrolling_full = true;
   }, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
   let blocks = [];
   for (let index = 0; index < link.length; index++) {
      let el = link[index];
      let block_name = el.getAttribute('href').replace('#', '');
      if (block_name != '' && !~blocks.indexOf(block_name)) {
         blocks.push(block_name);
      }
      el.addEventListener('click', function (e) {
         if (document.querySelector('.menu__body._active')) {
            menu_close();
            body_lock_remove(500);
         }
         let target_block_class = el.getAttribute('href').replace('#', '');
         let target_block = document.querySelector('.' + target_block_class);
         _goto(target_block, 300);
         e.preventDefault();
      })
   }

   window.addEventListener('scroll', function (el) {
      let old_current_link = document.querySelectorAll('._goto-block._active');
      if (old_current_link) {
         for (let index = 0; index < old_current_link.length; index++) {
            let el = old_current_link[index];
            el.classList.remove('_active');
         }
      }
      for (let index = 0; index < blocks.length; index++) {
         let block = blocks[index];
         let block_item = document.querySelector('.' + block);
         if (block_item) {
            let block_offset = offset(block_item).top;
            let block_height = block_item.offsetHeight;
            if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
               let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
               for (let index = 0; index < current_links.length; index++) {
                  let current_link = current_links[index];
                  current_link.classList.add('_active');
               }
            }
         }
      }
   })
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
   for (let index = 0; index < goto_links.length; index++) {
      let goto_link = goto_links[index];
      goto_link.addEventListener('click', function (e) {
         let target_block_class = goto_link.getAttribute('href').replace('#', '');
         let target_block = document.querySelector('.' + target_block_class);
         _goto(target_block, 300);
         e.preventDefault();
      });
   }
}
function _goto(target_block, speed, offset = 0) {
   let header = '';
   //OffsetHeader
   header = 'header';
   let options = {
      speedAsDuration: true,
      speed: speed,
      header: header,
      offset: offset,
      easing: 'easeOutQuad',
   };
   let scr = new SmoothScroll();
   scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
   var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
   if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
   document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
   window.onwheel = preventDefault; // modern standard
   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
   window.ontouchmove = preventDefault; // mobile
   document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
   if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
   document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
   window.onmousewheel = document.onmousewheel = null;
   window.onwheel = null;
   window.ontouchmove = null;
   document.onkeydown = null;
}
function preventDefault(e) {
   e = e || window.event;
   if (e.preventDefault)
      e.preventDefault();
   e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
   /*if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
   }*/
}

function fix_block(scr_fix_block, scr_value) {
   let window_width = parseInt(window.innerWidth);
   let window_height = parseInt(window.innerHeight);
   let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
   for (let index = 0; index < scr_fix_block.length; index++) {
      const block = scr_fix_block[index];
      let block_width = block.getAttribute('data-width');
      const item = block.querySelector('._side-block');
      if (!block_width) { block_width = 0; }
      if (window_width > block_width) {
         if (item.offsetHeight < window_height - (header_height + 30)) {
            if (scr_value > offset(block).top - (header_height + 15)) {
               item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
            } else {
               gotoRelative(item);
            }
            if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
               block.style.cssText = "position:relative;";
               item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
            }
         } else {
            gotoRelative(item);
         }
      }
   }
   function gotoRelative(item) {
      item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
   }
}

if (!isMobile.any()) {
   //custom_scroll();
   /*
   window.addEventListener('wheel', scroll_animate, {
      capture: true,
      passive: true
   });
   window.addEventListener('resize', custom_scroll, {
      capture: true,
      passive: true
   });
   */
}
function custom_scroll(event) {
   scr_body.style.overflow = 'hidden';
   let window_height = window.innerHeight;
   let custom_scroll_line = document.querySelector('._custom-scroll__line');
   let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
   let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
   if (custom_scroll_content_height > window_height) {
      if (!custom_scroll_line) {
         let custom_scroll = document.createElement('div');
         custom_scroll_line = document.createElement('div');
         custom_scroll.setAttribute('class', '_custom-scroll');
         custom_scroll_line.setAttribute('class', '_custom-scroll__line');
         custom_scroll.appendChild(custom_scroll_line);
         scr_body.appendChild(custom_scroll);
      }
      custom_scroll_line.style.height = custom_cursor_height + 'px';
   }
}

let new_pos = pageYOffset;
function scroll_animate(event) {
   let window_height = window.innerHeight;
   let content_height = document.querySelector('.wrapper').offsetHeight;
   let start_position = pageYOffset;
   let pos_add = 100;

   if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
      new_pos = new_pos - pos_add;
   } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
      new_pos = new_pos + pos_add;
   }
   if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
   if (new_pos < 0) new_pos = 0;

   if (scrolling) {
      scrolling = false;
      _goto(new_pos, 1000);

      let scr_pause = 100;
      if (navigator.appVersion.indexOf("Mac") != -1) {
         scr_pause = scr_pause * 2;
      };
      setTimeout(function () {
         scrolling = true;
         _goto(new_pos, 1000);
      }, scr_pause);
   }
   //If native scroll
   //disableScroll();
}

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();

var headerMain = document.querySelector(".header-main__body");
var headerHome = document.querySelector('.header-home');
if (headerMain || headerHome) {
   var sticky = headerMain.offsetTop;
   document.addEventListener('DOMContentLoaded', function () {
      window.onscroll = function () { headerFixed() };
      function headerFixed() {
         if (window.pageYOffset <= sticky) {
            headerMain.classList.remove('sticky');
            headerHome.classList.remove('_active');
         } else {
            headerMain.classList.add('sticky');
            headerHome.classList.add('_active');
         }
      }
   });
}
//====================================================================================================
