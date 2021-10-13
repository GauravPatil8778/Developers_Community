<script>  
function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
  
this.changeSalary=changeSalary;  
function changeSalary(otherSalary){  
this.salary=otherSalary;  
}  
}  
e=new emp(103,"Sonoo Jaiswal",30000);  
document.write(e.id+" "+e.name+" "+e.salary);  
e.changeSalary(45000);  
document.write("<br>"+e.id+" "+e.name+" "+e.salary);  
</script>  
