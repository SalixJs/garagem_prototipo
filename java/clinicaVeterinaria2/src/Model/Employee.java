package Model;

public abstract class Employee {
    protected int code;
    protected String name;
    protected String position;
    protected String cpf;
    protected double salary;

    public Employee(int code, String name, String position, String cpf, double salary) {
        this.code = code;
        this.name = name;
        this.position = position;
        this.cpf = cpf;
        this.salary = salary;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}
