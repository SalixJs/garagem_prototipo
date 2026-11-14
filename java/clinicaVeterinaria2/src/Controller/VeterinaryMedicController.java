package Controller;

import DAO.VeterinaryMedicDAO;
import Model.VeterinaryMedic;
import View.VeterinaryMedicView;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;

public class VeterinaryMedicController {
    private VeterinaryMedicView view;
    private VeterinaryMedicDAO dao;

    public VeterinaryMedicController(VeterinaryMedicView view){
        this.view = view;
        this.dao = new VeterinaryMedicDAO();
        loadTable();
        this.view.getBtnSalvar().addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                saveVeterinarian();
            }
        });
    }

    private void saveVeterinarian(){
        try{
            String name = view.getNome();
            String position = view.getCargo();
            String cpf = view.getCpf();
            String crmv = view.getCrmv();
            String speciality = view.getEspecialidade();
            double salary = Double.parseDouble(view.getSalario());
            VeterinaryMedic vet = new VeterinaryMedic(0, name, position, cpf, salary, crmv, speciality);
            dao.insert(vet);
            JOptionPane.showMessageDialog(view, "Inserido com sucesso");
            loadTable();
        } catch (NumberFormatException ex) {
            System.out.println("Os valores devem ser preenchidos " + ex.getMessage());
            JOptionPane.showMessageDialog(view, "Burro, é tudo");
        } catch (Exception e) {
            System.out.println("Erro " + e.getMessage());
            JOptionPane.showMessageDialog(view, "Erro de banco");
        }
    }

    private void loadTable(){
        DefaultTableModel model = view.getModeloTabela();
        model.setRowCount(0);

        List<VeterinaryMedic> list = dao.list();

        for (VeterinaryMedic vet : list){
            model.addRow(new Object[]{
                    vet.getCode(),
                    vet.getName(),
                    vet.getCrmv(),
                    vet.getSpeciality()
            });
        }
    }

    private void deleteVeterinary(){
        JTable table = view.getTabelaVeterinarios();
        int selectedLine = table.getSelectedRow();

        if (selectedLine >= 0){
            int response = JOptionPane.showConfirmDialog(view, "Confirma?", "Confirmar", JOptionPane.YES_NO_OPTION);
            if (response == JOptionPane.YES_NO_OPTION){
                int code = (int) table.getValueAt(selectedLine, 0);
                dao.delete(code);
            } else {
                JOptionPane.showMessageDialog(view, "Selecione um veterinario da tabela", "Aviso", JOptionPane.WARNING_MESSAGE);
            }
        };
        loadTable();
    }
}
