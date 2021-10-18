<script>  
//Constructor function  
function Bike(company)  
{  
    this.company=company;   
}  
  
Bike.prototype.getCompany=function()  
{  
  return this.company;  
}  
//Another constructor function  
function Vehicle(name,price) {  
 this.name=name;  
  this.price=price;  
  }   
var bike = new Bike("Honda");  
Vehicle.prototype=bike; //Now Bike treats as a parent of Vehicle.  
var vehicle=new Vehicle("Shine",70000);  
document.writeln(vehicle.getCompany()+" "+vehicle.name+" "+vehicle.price);  
</script>  
Test it Now
