package Model;

public class VeterinaryMedic extends Employee{
    private String crmv;
    private String speciality;

    public VeterinaryMedic(int code, String name, String position, String cpf, double salary, String crmv, String speciality) {
        super(code, name, position, cpf, salary);
        this.crmv = crmv;
        this.speciality = speciality;
    }

    public String getCrmv() {
        return crmv;
    }

    public void setCrmv(String crmv) {
        this.crmv = crmv;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }
}
