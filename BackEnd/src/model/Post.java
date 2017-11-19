package model;
import java.util.Date;
import User;
public class Post {
    private int id;
    private String description;
    private User creater;
    private Date created_date;

    public Post(int id){
        this.id = id;
    }
}