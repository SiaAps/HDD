$(document).ready(function(){
 $('.header').height($(window).height());
})

$(".navbar a").click(function(){
$("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
 })


function submit(){
  let min=Math.ceil(FormInputBegin.value);
  let max=Math.ceil(FormInputEnd.value);
  let res=Math.floor((max-min+1)*Math.random())+min;
    document.getElementById('FormResult').value=res;
    
    
  }


