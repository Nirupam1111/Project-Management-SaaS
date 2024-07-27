package com.nirupam.projectManagement.repository;

import java.util.List;

import com.nirupam.projectManagement.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

	List<Comment> findByIssueId(Long issueId);
}

