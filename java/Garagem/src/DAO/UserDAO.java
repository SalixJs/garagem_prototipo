package DAO;

import Model.User;

import java.sql.*;

public class UserDAO {
    public long insert(Connection conn, User user) throws SQLException{
        String sql = "insert into users(name, email, password_hash, city) values (?,?,?,?)";
        try (PreparedStatement stm = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)){
            stm.setString(1 , user.getName());
            stm.setString(2, user.getEmail());
            stm.setString(3, user.getPasswordHash());
            stm.setString(4, user.getCity());
            stm.executeUpdate();

            try(ResultSet rs = stm.getGeneratedKeys()){
                if (rs.next()) return rs.getLong(1);
                throw new SQLException("User ID not generated");
            }
        }
    }
}
