$(document).ready(function()
{
    $( 'li>a[id$="Container"]' ).click(function(event) 
    {
        event.preventDefault();
        var href = $(this).attr('href');
        const el= document.getElementsByClassName('window');
        while(el.length>0){
            el[0].parentNode.removeChild(el[0]);
        }

        $('#content').load(href);
        return false;
    });
    $( 'a[id$="Home"]' ).click(function(event) 
    {
        event.preventDefault();
        
        const el= document.getElementsByClassName('window');
        while(el.length>0){
            el[0].parentNode.removeChild(el[0]);
        }

        
        return false;
    });
});