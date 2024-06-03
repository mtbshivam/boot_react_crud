package com.shivam.fullstackbackend.controller;

import com.shivam.fullstackbackend.model.User;
import com.shivam.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:3000")

public class UserController {
@Autowired
    private UserRepository userRepository;

@PostMapping("/user")
User newUser(@RequestBody User newUser){
    return userRepository.save(newUser);
    
}

 @GetMapping("/users")
List<User> getAlluser(){
    return userRepository.findAll();
 }

@GetMapping("/user/{id}")
Optional<User> getUserById(@PathVariable Long id) {
    return userRepository.findById(id);
}

@PutMapping("/user/{id}")
    Object updateById(@RequestBody User newUser,@PathVariable Long id){
        Optional<User> existingUserOptional = userRepository.findById(id);
        if(existingUserOptional.isPresent()){
            User existingUser = existingUserOptional.get();
            existingUser.setName(newUser.getName());
            existingUser.setUsername(newUser.getUsername());
            existingUser.setEmail(newUser.getEmail());
            return userRepository.save(existingUser);
        }else { String s = "user not found ";
                  return s;}
}

@DeleteMapping("/user/{id}")
    Object DelById(@PathVariable Long id){
     userRepository.deleteById(id);
     return "user with id "+id+" is deleted";
}




}


 

