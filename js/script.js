/***********************************************/
/* TOKEN GENERATOR PAGE  */
/***********************************************/

$(function() {
  //inputs value
 $("#inputs").on('input', 'input[type=text]', function(event) {
    const values = [];
    $(this).closest('#inputs').find('input[type=text]').each(function() {
      values.push($('<span class="output"></span>').text($(this).val()).html());
    });
    $("#custom_wrapper").html(values.join('|'));
  });
  

$('.add').click(function() {
  let count = $("#inputs input").length;
  count++;
  const row = $("<div>", {
  class: "flex-row"
  }).insertBefore(this);
 
$("<label>",{
   for:"custom-text-" +count
}).appendTo(row);

$("<span>",{
    text:"custom text" +count,
    class:"visually-hidden"
}).appendTo($("label", row));

$("<input>", {
    type: "text",
    class: "input",
    placeholder: "custom text " + count,
    id:"custom-text-" +count,
    tabindex: count
  }).appendTo($("label", row));

$("<button>", {
    class: "remove",
    type:"button",
    "aria-label":"remove"
  }).html("-").appendTo(row);
  });
      
  $('body').on('click', '.remove', function() {
    
    $(this).parent('.flex-row').remove();
    if($('#inputs input[type=text]').length) {
      $('#inputs input[type=text]').eq(0).trigger('input');
    } else {
      $('#custom_wrapper').html('');
    }
  });
 
//input email fragments
$('.fragment-quantity').on('change', function () {
  const q = $(this).closest(".flex-col-sm-6").index();
  const y = (q === 0) ? $(this).val() : "," + $(this).val();
  $("#custom_nb_wrapper .qty-output").eq(q).html(y);
});
/***********************************************/
/* COPY TO CLIPBOARD FUNCTION */
/***********************************************/

$(document).on('click', '.copy', function () {
    const tokenText = $(this).closest('.token-block').find('.token').text();

    if (!navigator.clipboard) {
        console.error('Clipboard API non disponible');
        return;
    }

    navigator.clipboard.writeText(tokenText)
        .then(() => {
            $(this).text("Copié !").delay(2000).queue(function () {
                $(this).text("Copier").dequeue();
            });
        })
        .catch(err => {
            console.error("Erreur :", err);
        });
});
});
$(function () {
 thisyear = new Date().getFullYear();
 $('#year').text(thisyear);
});
