   $(document).ready(function(){
        $("#b").hide();
        $("#card").hide();
        $("#menu-toggle").click(function(){
          $("#b").slideToggle(4);
        });
        $("#b").click(function(){
          $("#card").show(4);
        });
      });