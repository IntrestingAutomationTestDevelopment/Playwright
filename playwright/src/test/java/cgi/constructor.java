package cgi;
/*
 * public class constructor {
 * 
 * public static void main(String[] args) {
 * 
 * String str = "test123"; //constructor obj = new constructor();
 * 
 * } // Default Constructor public void constructor1() {
 * System.out.println("Default Constructor Called"); }
 * 
 * //Parameterized Constructor public constructor(int id, String name) { this.id
 * = id; this.name = name; } }
 */
class constructor {
    String brand;
    int year;

    // Parameterized constructor
    public constructor(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }


//public class Main {
    public static void main(String[] args) {
    	constructor myCar = new constructor("Toyota", 2020); // Constructor called with parameters
        System.out.println("Brand: " + myCar.brand);
        System.out.println("Year: " + myCar.year);
    }
}


