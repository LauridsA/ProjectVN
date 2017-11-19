 /**
 * Product
 */
public abstract class Product {
    private String name, id;
    private int price;


    public abstract void setPrice(int newprice);
    public abstract int getPrice();
}