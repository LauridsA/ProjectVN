import controller.MotorcycleCTR;
import model.Motorcycle;
import javax.jws.WebMethod;  
import javax.jws.WebService;  
import javax.jws.soap.SOAPBinding;  
import javax.jws.soap.SOAPBinding.Style;  
@WebService  
@SOAPBinding(style = Style.DOCUMENT)

public class MotorcycleService implements IService<Motorcycle>{
    private MotorcycleCTR ctr;

    @WebMethod public MotorcycleService(){
        ctr = new MotorcycleCTR();
    }

    public Motorcycle Create(int id)
    {
        return ctr.Create(t);
    }

    public Motorcycle Update(int id)
    {
        return ctr.Update(t);
    }

    public Motorcycle Delete(int id)
    {
        return ctr.Delete(t);
    }

    public Motorcycle Read(int id)
    {
        return ctr.Read(t);
    }
}