import model.Sale;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * DBSale
 */
public class DBSale implements IData<Sale> {
    private String connectionstring;
    private DBSingleConnection dbSinCon;
    public DBSale(DBSingleConnection dbSinCon){
        this.dbSinCon = dbSinCon;
    }

}