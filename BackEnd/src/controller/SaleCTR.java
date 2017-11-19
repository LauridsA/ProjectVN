import model.Sale;
import DAL.DBSale;
import DAL.DBSingleConnection;
public class SaleCTR implements Controller<Sale>{
    private DBSale dbs;
    public SaleCTR(DBSingleConnection dbSinCon){
        super();
        dbs = new DBSale(dbSinCon); // might need constructor without dbsincon?? TODO
    }
    public Sale Create(int id){
        return dbs.create(id);
    }

    public Sale Update(int id){
        return dbs.Update(id);
    }

    public Sale Delete(int id){
        return dbs.Delete(id);
    }

    public Sale Read(int id){
        return dbs.Read(id);
    }

}