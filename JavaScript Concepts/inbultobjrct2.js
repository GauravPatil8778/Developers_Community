<script>  
class Moment extends Date {  
  constructor(year) {  
    super(year);  
  }}  
var m=new Moment("August 15, 1947 20:22:10");  
document.writeln("Year value:")  
document.writeln(m.getFullYear());  
</script>  
