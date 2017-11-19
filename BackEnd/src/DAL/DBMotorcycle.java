
import model.Motorcycle;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
 /**
 * MotorcycleDB
 */
public class MotorcycleDB implements IData<Motorcycle>{
    private String connectionstring;
    private DBSingleConnection dbSinCon;
    public Motorcycle(DBSingleConnection dbSinCon){
        this.dbSinCon = dbSinCon;
    }

    public Motorcycle Create(int id){
        private String query = "";
        ResultSet result = null;
        Connection con = null;
        PreparedStatement statement = null;

        try {
            con = dbSinCon.getDBcon();
			con.setAutoCommit(false);
			statement = con.prepareStatement(query);
			//statement.setLong(1, teamid); SET VALUES
			result = statement.executeQuery();
			con.commit();
			if(!result.isBeforeFirst()) {
				// Do sth??
		} catch (SQLException e) {
			throw new DbaException("Data could not be found", e);
		} finally {
				try {
					con.setAutoCommit(true);
					dbSinCon.closeConnection();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
    }

    public Motorcycle Update(int id){
        private String query = "";
        ResultSet result = null;
        Connection con = null;
        PreparedStatement statement = null;

        try {
            con = dbSinCon.getDBcon();
			con.setAutoCommit(false);
			statement = con.prepareStatement(query);
			//statement.setLong(1, teamid); SETVALUES
			result = statement.executeQuery();
			con.commit();
			if(!result.isBeforeFirst()) {
				// do sth?
		} catch (SQLException e) {
			throw new DbaException("Data could not be found", e);
		} finally {
				try {
					con.setAutoCommit(true);
					dbSinCon.closeConnection();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
    }

    public Motorcycle Delete(int id){
        private String query = "";
        ResultSet result = null;
        Connection con = null;
        PreparedStatement statement = null;

        try {
            con = dbSinCon.getDBcon();
			con.setAutoCommit(false);
			statement = con.prepareStatement(query);
			//statement.setLong(1, teamid); SETVALUES
			result = statement.executeQuery();
			con.commit();
			if(!result.isBeforeFirst()) {
				// do sth?
		} catch (SQLException e) {
			throw new DbaException("Data could not be found", e);
		} finally {
				try {
					con.setAutoCommit(true);
					dbSinCon.closeConnection();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
    }

    public Motorcycle Read(int id){
        private String query = "";
        ResultSet result = null;
        Connection con = null;
        PreparedStatement statement = null;

        try {
            con = dbSinCon.getDBcon();
			con.setAutoCommit(false);
			statement = con.prepareStatement(query);
			//statement.setLong(1, teamid); SETVALUES
			result = statement.executeQuery();
			con.commit();
			if(!result.isBeforeFirst()) {
				//do something?
		} catch (SQLException e) {
			throw new DbaException("Data could not be found", e);
		} finally {
				try {
					con.setAutoCommit(true);
					dbSinCon.closeConnection();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
    }
}