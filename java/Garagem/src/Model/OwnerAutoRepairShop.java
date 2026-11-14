package Model;

public class OwnerAutoRepairShop extends User{
    private String NameInCharge;
    private String telephone;

    public OwnerAutoRepairShop(int code, String name, String email, String passwordHash, String city, String nameInCharge, String telephone) {
        super(code, name, email, passwordHash, city);
        this.NameInCharge = nameInCharge;
        this.telephone = telephone;
    }
}
