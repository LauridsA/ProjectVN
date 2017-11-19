import System.Collections.Generic;

public interface Controller<T>{
    T Create(int id);
    T Read(int id);
    T Update(int id);
    T Delete(int id);
}