import java.util.Generic;
/**
 * IData
 */
public interface IData<T> {
    private T Create(int id);
    private T Read(int id);
    private T Update(int id);
    private T Delete(int id);
}