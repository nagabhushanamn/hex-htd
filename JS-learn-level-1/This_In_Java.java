
class Person{
    String pName="Nag";
    void sayName(){
        //String pName="Local";
        System.lout.println('im '+pName);
        System.lout.println('im '+this.pName);
    }
}


public class This_In_Java{
    public static void main(String args[]){
        Person person=new Person();
        person.sayName();
    }
}