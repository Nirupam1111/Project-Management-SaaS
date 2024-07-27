package com.nirupam.projectManagement.service;

import com.nirupam.projectManagement.exception.IssueException;
import com.nirupam.projectManagement.model.Comment;
import com.nirupam.projectManagement.exception.UserException;

import java.util.List;

public interface CommentService {
    Comment createComment(Long issueId, Long userId, String comment) throws UserException, IssueException;

    void  deleteComment(Long commentId, Long userId) throws UserException, IssueException;

    List<Comment> findCommentByIssueId(Long issueId);

}
