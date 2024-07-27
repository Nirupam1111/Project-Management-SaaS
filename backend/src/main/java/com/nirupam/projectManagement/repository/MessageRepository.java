package com.nirupam.projectManagement.repository;

import java.util.List;

import com.nirupam.projectManagement.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long>{
	 List<Message> findByChatIdOrderByCreatedAtAsc(Long chatId);
}
