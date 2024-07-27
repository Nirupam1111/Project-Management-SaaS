package com.nirupam.projectManagement.service;

import com.nirupam.projectManagement.model.PasswordResetToken;

public interface PasswordResetTokenService {

	public PasswordResetToken findByToken(String token);

	public void delete(PasswordResetToken resetToken);

}
