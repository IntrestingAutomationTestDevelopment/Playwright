package cgi;
//import ConstructorOverload2;
class ConstructorOverLoad {
    String name;
    int age;

    // Constructor 1: No parameters
    ConstructorOverLoad() {
        this.name = "Unknown";
        this.age = 0;
    }

    // Constructor 2: One parameter
    ConstructorOverLoad(String name) {
        this.name = name;
        this.age = 0;
    }

    // Constructor 3: Two parameters
    ConstructorOverLoad(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
	public static void main(String[] args) {
		ConstructorOverLoad p1 = new ConstructorOverLoad();                  // Calls Constructor 1
		ConstructorOverLoad p2 = new ConstructorOverLoad("Alice");           // Calls Constructor 2
		ConstructorOverLoad p3 = new ConstructorOverLoad("Bob", 25);         // Calls Constructor 3

        p1.displayInfo();
        p2.displayInfo();
        p3.displayInfo();
    }
}



    
