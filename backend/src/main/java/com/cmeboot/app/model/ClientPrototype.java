package com.cmeboot.app.model;

public class ClientPrototype {
    private String email;
    private String password;
    private String firstN;
    private String lastN;

    public ClientPrototype( String email, String password, String firstN, String lastN) {

        this.email = email;
        this.password = password;
        this.firstN = firstN;
        this.lastN = lastN;
    }

    public ClientPrototype() {

    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstN() {
        return firstN;
    }

    public void setFirstN(String firstN) {
        this.firstN = firstN;
    }

    public String getLastN() {
        return lastN;
    }

    public void setLastN(String lastN) {
        this.lastN = lastN;
    }
}
