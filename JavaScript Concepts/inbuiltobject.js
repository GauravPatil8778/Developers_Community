<script>  
class Moment extends Date {  
  constructor() {  
    super();  
  }}  
var m=new Moment();  
document.writeln("Current date:")  
document.writeln(m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear());  
</script>  
