import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const KanbanCard = ({ task }: { task: any }) => {
  return (
    <>
      <Card className="w-full border-1">
        <CardHeader>
          <Badge variant="secondary" className="mb-2 text-sm ">
            Badge
          </Badge>
          <CardTitle>Task Title</CardTitle>
          <CardDescription>Project:</CardDescription>
          {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent>
          <p>Due Date</p>
        </CardContent>
        <CardFooter className='p-1'>
          <div className="ml-3 flex justify-between items-center w-full">
            <p >Date</p>
            <Avatar>
              <AvatarImage />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default KanbanCard;
