package com.nirupam.projectManagement.repository;


import com.nirupam.projectManagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
