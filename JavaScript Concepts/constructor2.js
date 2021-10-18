<script>  
class CompanyName  
{  
  constructor()  
  {  
    this.company="Javatpoint";  
  }  
}  
class Employee extends CompanyName {  
  constructor(id,name) {  
   super();  
    this.id=id;  
    this.name=name;  
  }   
}     
var emp = new Employee(1,"John");  
document.writeln(emp.id+" "+emp.name+" "+emp.company);  
</script>  
