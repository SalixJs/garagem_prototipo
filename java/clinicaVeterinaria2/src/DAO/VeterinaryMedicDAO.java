package DAO;

import Model.VeterinaryMedic;
import Util.ConnectionFactory;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class VeterinaryMedicDAO {
    public void insert(VeterinaryMedic veterinary) {
        String sqlEmployee = "insert into funcionario(nome, cargo, cpf, salario) values (?, ?, ?, ?)";
        String sqlVeterinary = "insert into medico_veterinario(codigo, crmv, especialidade) values ( ?, ?, ?)";

        Connection conn = null;

        try {
            conn = ConnectionFactory.getConnection();
            conn.setAutoCommit(false);
            int idTemp = 0;

            try (PreparedStatement stm = conn.prepareStatement(sqlEmployee, Statement.RETURN_GENERATED_KEYS)) {
                stm.setString(1, veterinary.getName());
                stm.setString(2, veterinary.getPosition());
                stm.setString(3, veterinary.getCpf());
                stm.setDouble(4, veterinary.getSalary());
                stm.executeUpdate();

                try (ResultSet rs = stm.getGeneratedKeys()) {
                    if (rs.next()) {
                        idTemp = rs.getInt(1);
                        veterinary.setCode(idTemp);
                    }
                }
            }

            try (PreparedStatement stmv = conn.prepareStatement(sqlVeterinary)) {
                stmv.setInt(1, veterinary.getCode());
                stmv.setString(2, veterinary.getCrmv());
                stmv.setString(3, veterinary.getSpeciality());
                stmv.executeUpdate();
            }

            conn.commit();
        } catch (SQLException e) {
            System.out.println("Erro" + e.getMessage());
        }
    }

    public List<VeterinaryMedic> list() {
        List<VeterinaryMedic> list = new ArrayList<>();
        String sql = "select f.codigo, f.nome, f.cargo, f.cpf, f.salario, v.crmv, v.especialidade " +
                "from funcionario f " + "inner join medico_veterinario v on f.codigo = v.codigo";

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stm = conn.prepareStatement(sql);
             ResultSet rs = stm.executeQuery()) {

            while (rs.next()) {
                VeterinaryMedic vet = new VeterinaryMedic(
                        rs.getInt("codigo"),
                        rs.getString("nome"),
                        rs.getString("cargo"),
                        rs.getString("cpf"),
                        rs.getDouble("salario"),
                        rs.getString("crmv"),
                        rs.getString("especialidade")
                );
                list.add(vet);
            }
        } catch (SQLException e) {
            System.out.println("Erro" + e.getMessage());
        }
        return list;
    }

    public void delete(int code) {
        String sql = "delete from funcionario where codigo = ?";

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stm = conn.prepareStatement(sql)) {
            stm.setInt(1, code);
            int affectedLines = stm.executeUpdate();
            if (affectedLines > 0) {
                System.out.println("Medico excluido");
            } else {
                System.out.println("Nenhum medico encontrado");
            }
        } catch (SQLException e) {
            System.out.println("erro" + e.getMessage());
        }
    }

    public void toUpdate(VeterinaryMedic vet) {
        String sql1 = "update funcionario set nome = ?, cargo = ?, cpf = ?, salario = ? where codigo = ?";
        String sql2 = "update medico_veterinario set crmv = ?, especialidade = ? where codigo = ?";

        try (Connection conn = ConnectionFactory.getConnection()) {
            conn.setAutoCommit(false);

            try (PreparedStatement stmf = conn.prepareStatement(sql1)) {
                stmf.setString(1, vet.getName());
                stmf.setString(2, vet.getPosition());
                stmf.setString(3, vet.getCpf());
                stmf.setDouble(4, vet.getSalary());
                stmf.setInt(5,vet.getCode());
                stmf.executeUpdate();
            }
            try (PreparedStatement stmv = conn.prepareStatement(sql2)) {
                stmv.setString(1, vet.getCrmv());
                stmv.setString(2, vet.getSpeciality());
                stmv.setInt(3, vet.getCode());
                stmv.executeUpdate();
            }
            conn.commit();
        } catch (SQLException e) {
            System.out.println("Erro" + e.getMessage());
        }
    }
}