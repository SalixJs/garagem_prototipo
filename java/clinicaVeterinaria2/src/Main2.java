import DAO.SecretaryDAO;
import Model.Secretary;
import Model.VeterinaryMedic;

import java.util.ArrayList;
import java.util.List;

public class Main2 {
    public static void main(String[] args){
        Secretary sec = new Secretary(0, "Tia Turbina", "Secretaria", "00000000000", 2.50);
        SecretaryDAO secDAO = new SecretaryDAO();
        List<Secretary> list = new ArrayList<>();

        list = secDAO.list();
        sec = list.get(0);
        sec.setName("Tia Turbina");
        secDAO.toUpdate(sec);
        for (Secretary n : list){
            System.out.println(n.getName());
        }

        sec = list.get(0);
        sec.setName("Sicilia");
        secDAO.toUpdate(sec);

        list = secDAO.list();
        for (Secretary n : list){
            System.out.println(n.getName());
        }
    }
}
