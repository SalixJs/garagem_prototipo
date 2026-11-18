package DAO;

import Model.Enthusiast;
import Util.ConnectionFactory;

import java.sql.*;

public class EnthusiastDAO {
    public void insert (Enthusiast enthusiast) throws SQLException{
        String sqlUser = "insert into users(name,email,password_hash,city) values (?,?,?,?)";
        String SqlEnthusiast = "insert into enthusiast(code) values (?)";


        try (Connection conn = ConnectionFactory.getConnection()) {
            conn.setAutoCommit(false);

            try {
                try (PreparedStatement stm = conn.prepareStatement(sqlUser, Statement.RETURN_GENERATED_KEYS)) {
                    stm.setString(1, enthusiast.getName());
                    stm.setString(2, enthusiast.getEmail());
                    stm.setString(3, enthusiast.getPasswordHash());
                    stm.setString(4, enthusiast.getCity());
                    stm.executeUpdate();

                    try (ResultSet rs = stm.getGeneratedKeys()) {
                        if (rs.next()) enthusiast.setCode(rs.getInt(1));
                    }
                }

                try (PreparedStatement stme = conn.prepareStatement(SqlEnthusiast)) {
                    stme.setInt(1, enthusiast.getCode());
                    stme.executeUpdate();
                }

                conn.commit();
            } catch (SQLException e) {
                conn.rollback();
                throw e;
            }
        }
    }


}
