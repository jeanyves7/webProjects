package com.cmeboot.app.controller;


import com.cmeboot.app.model.Cart;
import com.cmeboot.app.model.Client;
import com.cmeboot.app.model.Purchased;
import com.cmeboot.app.model.isLogged;
import com.cmeboot.app.service.CartServiceImp;
import com.cmeboot.app.service.ClientServiceImp;
import com.cmeboot.app.service.IsLogedServiceImp;
import com.cmeboot.app.service.PurchasedServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.lang.reflect.Array;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/client")
public class ClientController {

    @Autowired
    ClientServiceImp cloServ;

    @Autowired
    CartServiceImp cartServ;

    @Autowired
    PurchasedServiceImp purServ;

    @Autowired
    IsLogedServiceImp isServ;

    @GetMapping("/id/{id}")
    public ResponseEntity<Client> getCl(@PathVariable Long id){
        return  new ResponseEntity<>(cloServ.getClient(id), HttpStatus.OK);
    }

    @GetMapping("/login")
    public ResponseEntity<Client> getCl(@RequestParam("email") String email,@RequestParam("password") String password) {
        if (cloServ.isSignUp(email,password)) {
            Client cl=cloServ.getClient(email);
            isLogged il=new isLogged();
            il.setIdC(cl.getIdC());
            il.setEmail(cl.getEmail());
            il.setFirstN(cl.getFirstN());
            il.setLastN(cl.getLastN());
            il.setPassword(cl.getPassword());
            isServ.addItem(il);
            return new ResponseEntity<>(cloServ.getClient(email), HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/CheckClient")
    public ResponseEntity<isLogged> checkClient(){
        return new ResponseEntity<>(isServ.checK(),HttpStatus.OK);
    }

    @Transactional
    @GetMapping("logOut")
    public ResponseEntity<Client> logOut(){
        isServ.deleteAll();
        return new ResponseEntity<>(null,HttpStatus.OK);
    }

    @GetMapping("/cart")
    public ResponseEntity<List<Cart>> getCarts(){
        return new ResponseEntity<>(cartServ.findAll(),HttpStatus.OK);
    }

    @PostMapping("/cart")
    public ResponseEntity<List<Cart>> setCart(@RequestBody Cart cart){
       if(cartServ.Check(cart.getIdI())){
           cartServ.addItem(cart);}
       return new ResponseEntity<>(cartServ.findAll(),HttpStatus.OK);
    }

    @PatchMapping("/Cart/qty/")
    public ResponseEntity<List<Cart>> updateCart(@RequestParam("id") Long id,@RequestParam("qty")Long l){
        Optional<Cart> cartop=cartServ.getId(id);
        Cart cart=cartop.get();
        cart.setQty(l);
        cartServ.addItem(cart);
        return new ResponseEntity<>(cartServ.findAll(),HttpStatus.OK);

    }

    @Transactional
    @PostMapping("/delete/item")
    public ResponseEntity<List<Cart>> deletItem(@RequestParam("id")Long id){
        cartServ.deleteItem(id);
        return new ResponseEntity<>(cartServ.findAll(),HttpStatus.OK);
    }


    @Transactional
    @PostMapping("/purchased")
    public ResponseEntity<List<Cart>> purchase(@RequestBody List<Purchased> l){

        for(int i=0;i<l.size();++i){
            purServ.addItem(l.get(i));
        }
        cartServ.deleteAll();
        return new ResponseEntity<>(cartServ.findAll(),HttpStatus.OK);
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
