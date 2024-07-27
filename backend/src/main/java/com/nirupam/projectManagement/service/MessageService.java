package com.nirupam.projectManagement.service;

import java.util.List;

import com.nirupam.projectManagement.exception.ChatException;
import com.nirupam.projectManagement.exception.ProjectException;
import com.nirupam.projectManagement.model.Message;
import com.nirupam.projectManagement.exception.UserException;

public interface MessageService {

    Message sendMessage(Long senderId, Long chatId, String content) throws UserException, ChatException, ProjectException;

    List<Message> getMessagesByProjectId(Long projectId) throws ProjectException, ChatException;
}

