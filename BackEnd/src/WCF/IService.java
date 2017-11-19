[ServiceContract]
public interface IService<T>
{
    [OperationContract]
    T Create(int id);

    [OperationContract]
    T Read(int id);

    [OperationContract]
    T Update(int id);

    [OperationContract]
    T Delete(int id);
}