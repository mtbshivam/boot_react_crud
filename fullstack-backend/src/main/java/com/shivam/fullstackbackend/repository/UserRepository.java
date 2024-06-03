package com.shivam.fullstackbackend.repository;

import com.shivam.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long>{
}
