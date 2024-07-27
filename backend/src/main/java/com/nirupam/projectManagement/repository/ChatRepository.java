package com.nirupam.projectManagement.repository;

import com.nirupam.projectManagement.model.Chat;
import com.nirupam.projectManagement.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
    

	Chat findByProject(Project projectById);
	
//	List<Chat> findByProjectNameContainingIgnoreCase(String projectName);
}

