/* eslint-disable no-unused-vars */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CreateCommentForm } from "./CreateCommentForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import CommentCard from "./CommentCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssueById, updateIssueStatus } from "@/redux/Issue/Issue.action";
import { useParams } from "react-router-dom";
import { fetchComments } from "@/redux/Comment/comment.action";
import { Badge } from "@/components/ui/badge";

const comments = [1, 1, 1];

const IssueDetails = () => {
  const { issueId } = useParams();
  const dispatch = useDispatch();
  const { issue, comment } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchIssueById(issueId));
    dispatch(fetchComments(issueId));
  }, []);

  const handleUpdateIssueStatus = (value) => {
    dispatch(updateIssueStatus({ id: issueId, status: value }));
  };

  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea className="h-[80vh] w-[60%] ">
          <div className="">
            <h1 className="text-lg font-semibold text-gray-400 font-sans">
              {issue.issueDetails?.title}
            </h1>

            <div className="py-5">
              <h2 className="font-semibold text-gray-400 font-sans">Description</h2>
              <p className="text-gray-400 text-sm mt-3 font-sans">
                {issue.issueDetails?.description}
              </p>
            </div>
            <div className="mt-5">
              <h1 className="pb-3 font-sans">Activity</h1>
              <Tabs defaultValue="comments" className="w-[400px]">
                <TabsList className="mb-5">
                  <TabsTrigger value="all"><span className=" font-sans">All</span></TabsTrigger>
                  <TabsTrigger value="comments"><span className=" font-sans">Comments</span></TabsTrigger>
                  <TabsTrigger value="history"><span className=" font-sans">History</span></TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <span className=" font-sans" >all Make changes to your account here.</span>
                </TabsContent>
                <TabsContent value="comments">
                  <CreateCommentForm issueId={issueId} />
                  <div className="mt-8 space-y-6">
                    {comment.comments.map((item, index) => (
                      <CommentCard item={item} key={index} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                <span className=" font-sans" >History Change your password here.</span>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={"To Do"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending"><span className="font-sans">To Do</span></SelectItem>
              <SelectItem value="in_progress"><span className="font-sans">In Progress</span></SelectItem>
              <SelectItem value="done"><span className="font-sans">Done</span></SelectItem>
            </SelectContent>
          </Select>

          <div className="border rounded-lg">
            <p className="border-b py-3 px-5 font-sans">Details</p>

            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem] font-sans">Assignee</p>
                  {issue.issueDetails?.assignee ? (
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 text-xs">
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <p>{issue.issueDetails?.assignee?.fullName}</p>
                    </div>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem] font-sans">Labels</p>
                  <span className=" font-sans" > None </span>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem] font-sans">Status</p>
                  <Badge
                    className={`font-sans ${
                      issue.issueDetails?.status == "in_progress"
                        ? "bg-orange-500"
                        : issue.issueDetails?.status == "done"
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {issue.issueDetails?.status}
                  </Badge>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-[7rem] font-sans">Realese</p>
                  <div className="flex items-center gap-3">-</div>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem] font-sans">Reporter</p>
                  {issue.issueDetails?.assignee ? (
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 text-xs">
                        <AvatarFallback>N</AvatarFallback>
                      </Avatar>
                      <p>Nirupam</p>
                    </div>
                  ) : (
                    <div>-</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
