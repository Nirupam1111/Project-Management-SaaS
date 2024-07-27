package com.nirupam.projectManagement.service;

import com.nirupam.projectManagement.domain.PlanType;
import com.nirupam.projectManagement.model.Subscription;
import com.nirupam.projectManagement.model.User;

public interface SubscriptionService {
    Subscription createSubscription(User user);
    Subscription getUserSubscription(Long userId) throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);
}
