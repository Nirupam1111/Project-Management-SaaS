package com.nirupam.projectManagement.service;

import java.util.List;

import com.nirupam.projectManagement.exception.ChatException;
import com.nirupam.projectManagement.exception.ProjectException;
import com.nirupam.projectManagement.model.Chat;
import com.nirupam.projectManagement.model.Project;
import com.nirupam.projectManagement.model.User;
import com.nirupam.projectManagement.exception.UserException;

public interface ProjectService {
	Project createProject(Project project, Long userId) throws UserException;

//	List<Project> getProjectsByOwner(User owner) throws ProjectException;

	List<Project> getProjectsByTeam(User user, String category, String tag) throws ProjectException;


	Project getProjectById(Long projectId) throws ProjectException;

	String deleteProject(Long projectId,Long userId) throws UserException;

	Project updateProject(Project updatedProject, Long id) throws ProjectException;
	
	List<Project> searchProjects(String keyword, User user) throws ProjectException;

	void addUserToProject(Long projectId, Long userId) throws UserException, ProjectException;

	void removeUserFromProject(Long projectId, Long userId) throws UserException, ProjectException;

	Chat getChatByProjectId(Long projectId) throws ProjectException, ChatException;


	
}
