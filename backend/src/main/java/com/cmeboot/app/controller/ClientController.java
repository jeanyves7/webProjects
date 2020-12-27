package com.cmeboot.app.controller;


import com.cmeboot.app.model.Client;
import com.cmeboot.app.service.ClientServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/client")
public class ClientController {

    @Autowired
    ClientServiceImp cloServ;

    @GetMapping("/id/{id}")
    public ResponseEntity<Client> getCl(@PathVariable Long id){
        return  new ResponseEntity<>(cloServ.getClient(id), HttpStatus.OK);
    }

    @GetMapping("/login")
    public ResponseEntity<Client> getCl(@RequestParam("email") String email,@RequestParam("password") String password) {
        if (cloServ.isSignUp(email,password)) {
            return new ResponseEntity<>(cloServ.getClient(email), HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PostMapping("/signUp")
    public ResponseEntity<Client> addCl(@RequestBody Client cl) {
        if (cloServ.isSignUp(cl.getEmail())) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(cloServ.addClient(cl),HttpStatus.OK);
        }
    }

}
