package com.nirupam.projectManagement.repository;

import com.nirupam.projectManagement.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription,Long> {
    Subscription findByUserId(Long userId);
}
