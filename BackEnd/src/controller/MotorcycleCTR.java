import model.Motorcycle;
import DAL.DBMotorcycle;
import DAL.DBSingleConnection;
public class MotorcycleCTR implements Controller<Motorcycle> {
    private DBMotorcycle dbm;
    public MotorcycleCTR(DBSingleConnection dbSinCon){
        super();
        dbm = new DBMotorcycle(dbSinCon); //need dbsincon? need normal too TODO
    }

    public Motorcycle Create(int id){
        return dbm.create(id);
    }

    public Motorcycle Update(int id){
        return dbm.Update(id);
    }

    public Motorcycle Delete(int id){
        return dbm.Delete(id);
    }

    public Motorcycle Read(int id){
        return dbm.Read(id);
    }
}