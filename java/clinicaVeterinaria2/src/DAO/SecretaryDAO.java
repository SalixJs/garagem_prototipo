package DAO;

import Model.Secretary;
import Util.ConnectionFactory;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SecretaryDAO {
    public void insert (Secretary secretary){
        String sqlEmployee = "insert into funcionario(nome, cargo, cpf, salario) values (?, ?, ?, ?)";
        String sqlSecretary = "insert into secretaria(codigo) values (?)";

        Connection conn = null;

        try {
            conn = ConnectionFactory.getConnection();
            conn.setAutoCommit(false);
            int idTemp = 0;

            try(PreparedStatement stm = conn.prepareStatement(sqlEmployee, Statement.RETURN_GENERATED_KEYS)){
                stm.setString(1, secretary.getName());
                stm.setString(2, secretary.getPosition());
                stm.setString(3, secretary.getCpf());
                stm.setDouble(4, secretary.getSalary());
                stm.executeUpdate();

                try(ResultSet rs = stm.getGeneratedKeys()){
                    if(rs.next()){
                        idTemp = rs.getInt(1);
                        secretary.setCode(idTemp);
                    }
                }
            }

            try(PreparedStatement stms = conn.prepareStatement(sqlSecretary)){
                stms.setInt(1, secretary.getCode());
                stms.executeUpdate();
            }

            conn.commit();
        } catch (SQLException e){
            System.out.println("Erro" + e.getMessage());
        }
    }

    public List<Secretary> list() {
        List<Secretary> list = new ArrayList<>();
        String sql = "select s.codigo, f.nome, f.cargo, f.cpf, f.salario " + "from secretaria s " +
                "join funcionario f on s.codigo = f.codigo";

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stm = conn.prepareStatement(sql);
              ResultSet rs = stm.executeQuery()) {

            while (rs.next()) {
                Secretary sec = new Secretary(
                        rs.getInt("codigo"),
                        rs.getString("nome"),
                        rs.getString("cargo"),
                        rs.getString("cpf"),
                        rs.getDouble("salario")
                );
                list.add(sec);
            }
        } catch (SQLException e) {
            System.out.println("Erro " + e.getMessage());
        }
        return list;
    }

    public void delete(int code) {
        String sql = "delete from funcionario where codigo = ?";

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stm = conn.prepareStatement(sql)) {
            stm.setInt(1, code);

            int affectedLines = stm.executeUpdate();
            if(affectedLines > 0) {
                System.out.println("Secretaria excluido");
            } else {
                System.out.println("Nenhuma secretaria encontrada");
            }
        } catch (SQLException e) {
            System.out.println("Erro "+ e.getMessage());
        }
    }

    public void toUpdate(Secretary sec) {
        String sql1 = "update funcionario set nome = ?, cargo = ?, cpf = ?, salario = ? where codigo = ?";

        try (Connection conn = ConnectionFactory.getConnection()){
            conn.setAutoCommit(false);

            try (PreparedStatement stmf = conn.prepareStatement(sql1)) {
                stmf.setString(1, sec.getName());
                stmf.setString(2, sec.getPosition());
                stmf.setString(3, sec.getCpf());
                stmf.setDouble(4, sec.getSalary());
                stmf.setInt(5, sec.getCode());
                stmf.executeUpdate();
            }
            conn.commit();
        } catch (SQLException e) {
            System.out.println("Erro " + e.getMessage());
        }
    }
}
