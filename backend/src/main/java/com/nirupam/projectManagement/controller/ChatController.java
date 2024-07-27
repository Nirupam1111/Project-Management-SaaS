//package com.nirupam.projectManagement.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.nirupam.projectManagement.exception.ChatException;
//import com.nirupam.projectManagement.exception.ProjectException;
//import com.nirupam.projectManagement.model.Chat;
//import com.nirupam.projectManagement.request.CreateChat;
//import com.nirupam.projectManagement.service.ChatService;
//
//@RestController
//@RequestMapping("/api/chats")
//public class ChatController {
//
//    @Autowired
//    private ChatService chatService;
//
//    @PostMapping("/create")
//    public ResponseEntity<Chat> createChat(@RequestBody CreateChat chat) throws ProjectException {
//        Chat createChat = chatService.createChat(chat.getProjectId(), chat.getUserIds());
//        return ResponseEntity.ok(createChat);
//    }
//
//    @GetMapping("/project/{projectId}")
//    public ResponseEntity<List<Chat>> getChatsByProjectId(@PathVariable Long projectId) throws ChatException {
//        List<Chat> list = chatService.getChatsByProjectId(projectId);
//        return ResponseEntity.ok(list);
//    }
//    
//    @PostMapping("/{chatId}/addUsers")
//    public ResponseEntity<Chat> addUsersToChat(@PathVariable Long chatId,
//                               @RequestParam List<Long> userIds) throws ChatException {
//           Chat addedUsersToChat = chatService.addUsersToChat(chatId, userIds);
//           return ResponseEntity.ok(addedUsersToChat);
//    }
//    
////    @GetMapping("/search")
////    public ResponseEntity<List<Chat>> searchChatsByName(@RequestParam String name) throws ChatException {
////        List<Chat> chats = chatService.searchChatsByName(name);
////        return ResponseEntity.ok(chats);
////    }
//
//    // Other endpoints as needed
//}
