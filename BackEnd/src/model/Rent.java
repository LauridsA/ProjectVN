public class Rent {
    private int id, price_per_day;
    private Date start_date, end_date;
    private User buyer, seller;
    private Motorbike bike;

    public Rent(int id){
        this.id = id;
    }
}