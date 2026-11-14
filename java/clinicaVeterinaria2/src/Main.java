import Controller.VeterinaryMedicController;
import DAO.SecretaryDAO;
import DAO.VeterinaryMedicDAO;
import Model.Secretary;
import Model.VeterinaryMedic;
import Util.ConnectionFactory;
import View.VeterinaryMedicView;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args){
        /*
        VeterinaryMedicDAO vetDAO = new VeterinaryMedicDAO();
        VeterinaryMedic vet = new VeterinaryMedic(0, "jose", "veterinario", "00000000000", 2.50, "21983hu12", "CamelosIndianos");
        List<VeterinaryMedic> list = new ArrayList<>();
        list = vetDAO.list();
        for (VeterinaryMedic n : list){
            System.out.println(n.getName() + " " + n.getCrmv() + " " + n.getSpeciality());
        }

        vet = list.get(0);
        vet.setName("Carlos");
        vetDAO.toUpdate(vet);

        list = vetDAO.list();
        for (VeterinaryMedic n : list){
            System.out.println(n.getName() + " " + n.getCrmv());
        }
         */

        VeterinaryMedicView view = new VeterinaryMedicView();
        VeterinaryMedicController c = new VeterinaryMedicController(view);

        view.setVisible(true);
    }
}
