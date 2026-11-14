package Model;

public class User {
    protected int code;
    protected String name;
    protected String email;
    protected String passwordHash;
    protected String city;

    public User(int code, String name, String email, String passwordHash, String city){
        this.code = code;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.city = city;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
