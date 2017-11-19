public class Sale {
    private int id, price;
    private Date sold_date;
    private Motorbike bike;
    private User buyer, seller;
    
    public Sale(int id){
        this.id = id;
    }
}