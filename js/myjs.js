// JavaScript Document
// Display Popup

$(document).ready(function() {



$(document).on('click','.links',function(e){
	e.preventDefault();
	
    $('#content').load('prechat.html');
	
   // $('.content').hide();
   // $('.content').replaceWith($('.page2').html());
	  
	

   });
$(document).on('change','#state select',function(e){
  e.preventDefault();

var value= $(this).val();
  
 if(value == 'CA') { //if this value is NOT selected
 $('#phone').show(); //this field is shown
	 } 
 else {
 $('#phone').hide();//else it is removed
 
	 }
    return false;
 
	  });
	  
$(document).on('click','#submit',function(e){
     $($('form[name="form1"]')).validate({ // initialize the plugin
        rules: {
            fullname: {
                required: true
                
            },
            mobilenumber: {
                required: true,
              	phoneUS: true
            }
        },
		highlight: function(element) {
        var id_attr = "#" + $( element ).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        $(id_attr).addClass('glyphicon-alert');         
    },
    unhighlight: function(element) {
        var id_attr = "#" + $( element ).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        $(id_attr).removeClass('glyphicon-alert');         
    },
    errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.length) {
                error.insertAfter(element);
            } else {
            error.insertAfter(element);
            }
        },
        submitHandler: function (form) { // for demo
             $('#page2').replaceWith('<p style="padding-left:"25px">Congrats! Form has been submitted successfully</p>').html();
		
            return false; // for demo
        }
    });
});

 });

   

	  



 

   
  
  
    

    


 

