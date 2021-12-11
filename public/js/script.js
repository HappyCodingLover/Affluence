$(document).ready(function() {
    $('.clipboard').click(function() {
        var that = $(this);

        var textArea = document.createElement("textarea");
        textArea.value = $(that).find('h5').text();
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
      
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      
        try {
          var successful = document.execCommand('copy');
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }
      
        document.body.removeChild(textArea);

        var clipboard_html = that.find('.clipboard-content').html();
        that.find('.clipboard-content').html('<h5>Copied!</h5>');
        setTimeout(function() {
            that.find('.clipboard-content').html(clipboard_html);
        }, 2000);
    });
});