// JavaScript Document
// Display Popup

$(document).ready(function() {
 $('#phone').hide();
 
 
    
   

$('.links').click(function(e)
{
     e.preventDefault();
   $('contactForm').validate();
    
    $('#content').replaceWith($('.page2').html());
	  

	
   $('#state select').change(function() {

var value= $(this).val();
  
 if(value == 'CA') { 
 $('#phone').show(); 
	 } 
 else {
 $('#phone').hide();
	 }
    return false;
 
	  });
	  

$('#submit').click(function(e)
{
      
       $( "#container" ).html( "<p class='page3'>Congratulations!Message was submitted successfully.</p>" );
      
       
        
        
   });




   
}); 
	  
	  


});
 

   
  
  
    

    


 

